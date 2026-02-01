const $ = (sel) => document.querySelector(sel);

const LS = {
  student: 'txq_student_v1',
  progress: 'txq_progress_v1',
};

const state = {
  levelIndex: 0,
  qIndex: 0,
  score: 0,
  answered: false,
  selected: null,
};

function loadProgress(){
  try { return JSON.parse(localStorage.getItem(LS.progress) || '{}'); }
  catch { return {}; }
}
function saveProgress(p){ localStorage.setItem(LS.progress, JSON.stringify(p)); }
function setStudent(name){ localStorage.setItem(LS.student, name || ''); }
function getStudent(){ return localStorage.getItem(LS.student) || ''; }

function show(viewId){
  for (const id of ['viewHome','viewQuiz','viewLevelResult','viewScore']) {
    const el = document.getElementById(id);
    el.hidden = id !== viewId;
  }
}

function buildLevelButtons(){
  const levels = window.TX_QUIZ.levels;
  const prog = loadProgress();

  const startSel = $('#startLevel');
  startSel.innerHTML = '';
  levels.forEach((lv, i) => {
    const opt = document.createElement('option');
    opt.value = String(i);
    opt.textContent = `${i+1}. ${lv.title}`;
    startSel.appendChild(opt);
  });

  const root = $('#levels');
  root.innerHTML = '';

  levels.forEach((lv, i) => {
    const box = document.createElement('div');
    box.className = 'level';
    const best = prog?.best?.[i];
    const done = typeof best === 'number';
    box.innerHTML = `
      <strong>${i+1}. ${lv.title}</strong>
      <div class="meta">Best: ${done ? best+'/10' : '—'}</div>
    `;
    box.addEventListener('click', () => startAt(i));
    root.appendChild(box);
  });
}

function startAt(i){
  state.levelIndex = i;
  state.qIndex = 0;
  state.score = 0;
  state.answered = false;
  state.selected = null;
  renderQuestion();
  show('viewQuiz');
}

function renderQuestion(){
  const lv = window.TX_QUIZ.levels[state.levelIndex];
  const q = lv.questions[state.qIndex];

  $('#quizTitle').textContent = lv.title;
  $('#quizMeta').textContent = `Question ${state.qIndex+1} of 10`;
  $('#scoreNow').textContent = `${state.score}/10`;

  $('#qNum').textContent = `Question ${state.qIndex+1}`;
  $('#qText').textContent = q.text;

  const imgEl = $('#qImg');
  imgEl.src = q.image?.url || '';
  imgEl.alt = 'Texas history image';

  const credit = $('#imgCredit');
  credit.href = q.image?.creditUrl || '#';
  credit.textContent = q.image?.creditUrl ? 'Wikimedia/Source' : '—';

  const qs = $('#qSource');
  qs.href = q.source?.url || '#';
  qs.textContent = q.source?.url ? 'Read more' : '—';

  $('#feedback').textContent = '';
  $('#btnNext').disabled = true;

  const choices = $('#choices');
  choices.innerHTML = '';

  state.answered = false;

  q.choices.forEach((c, idx) => {
    const b = document.createElement('button');
    b.className = 'choice';
    b.textContent = c;
    b.addEventListener('click', () => pick(idx, b));
    choices.appendChild(b);
  });
}

function pick(idx, btnEl){
  if (state.answered) return;
  state.answered = true;

  const lv = window.TX_QUIZ.levels[state.levelIndex];
  const q = lv.questions[state.qIndex];
  const correct = idx === q.answerIndex;

  const choiceButtons = Array.from(document.querySelectorAll('.choice'));
  choiceButtons.forEach((b, i) => {
    if (i === q.answerIndex) b.classList.add('correct');
    if (i === idx && !correct) b.classList.add('wrong');
    b.disabled = true;
  });

  if (correct) {
    state.score += 1;
    $('#feedback').textContent = 'Correct!';
  } else {
    $('#feedback').textContent = `Not quite. Correct answer: ${q.choices[q.answerIndex]}`;
  }

  $('#scoreNow').textContent = `${state.score}/10`;
  $('#btnNext').disabled = false;
}

function finishLevel(){
  const prog = loadProgress();
  prog.best = prog.best || {};
  const prev = prog.best[state.levelIndex];
  if (typeof prev !== 'number' || state.score > prev) {
    prog.best[state.levelIndex] = state.score;
  }
  prog.last = { levelIndex: state.levelIndex, qIndex: 0 };
  saveProgress(prog);

  $('#levelScore').textContent = `${state.score}/10`;

  if (state.score === 10) {
    $('#resultTitle').textContent = 'Perfect score!';
    $('#levelMessage').textContent = 'You got 10/10. Neon celebration activated.';
    playAnim(true);
  } else {
    $('#resultTitle').textContent = 'Level complete';
    $('#levelMessage').textContent = 'Nice work. Want to try again and beat your score?';
    playAnim(false);
  }

  show('viewLevelResult');
  buildLevelButtons();
}

function playAnim(isHigh){
  const c = document.getElementById('anim');
  const ctx = c.getContext('2d');
  const W = c.width, H = c.height;
  const particles = [];

  function rand(a,b){ return a + Math.random()*(b-a); }

  for (let i=0;i<80;i++){
    particles.push({
      x: rand(0,W),
      y: rand(-H,0),
      r: rand(2,5),
      vx: rand(-0.8,0.8),
      vy: rand(0.7,2.2),
      hue: isHigh ? rand(170,300) : rand(0,30),
      life: rand(40,120)
    });
  }

  let t = 0;
  function frame(){
    t++;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = 'rgba(7,8,13,0.35)';
    ctx.fillRect(0,0,W,H);

    // fun vs less-fun
    ctx.font = 'bold 18px system-ui';
    ctx.fillStyle = isHigh ? 'rgba(35,255,215,0.95)' : 'rgba(255,79,216,0.75)';
    ctx.fillText(isHigh ? 'NEON WIN!' : 'TRY AGAIN!', 14, 28);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 1;
      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue}, 90%, ${isHigh?60:50}%, ${isHigh?0.95:0.6})`;
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    });

    if (t < 140) requestAnimationFrame(frame);
  }
  frame();
}

function showScorecard(){
  const levels = window.TX_QUIZ.levels;
  const prog = loadProgress();
  const best = prog.best || {};

  const total = Object.values(best).reduce((a,b)=>a+(Number.isFinite(b)?b:0),0);
  const done = Object.keys(best).length;

  $('#scStudent').textContent = getStudent() || '(student)';
  $('#scTotal').textContent = `${total}/200`;
  $('#scDone').textContent = `${done}/20`;

  const root = $('#scLevels');
  root.innerHTML = '';
  levels.forEach((lv,i)=>{
    const box = document.createElement('div');
    box.className = 'level';
    const b = best[i];
    box.innerHTML = `
      <strong>${i+1}. ${lv.title}</strong>
      <div class="meta">Best: ${typeof b === 'number' ? b+'/10' : '—'}</div>
    `;
    box.addEventListener('click', () => startAt(i));
    root.appendChild(box);
  });

  show('viewScore');
}

// Nav
$('#navHome').addEventListener('click', ()=>{ buildLevelButtons(); show('viewHome'); });
$('#navScore').addEventListener('click', ()=> showScorecard());
$('#navReset').addEventListener('click', ()=>{
  if(confirm('Reset progress for this device?')){
    localStorage.removeItem(LS.progress);
    buildLevelButtons();
    show('viewHome');
  }
});
$('#navResume').addEventListener('click', ()=>{
  const p = loadProgress();
  if(p.last && typeof p.last.levelIndex === 'number') startAt(p.last.levelIndex);
  else startAt(0);
});

// Home buttons
$('#btnStart').addEventListener('click', ()=> startAt(0));
$('#btnStartAt').addEventListener('click', ()=> startAt(parseInt($('#startLevel').value,10) || 0));

$('#btnReplay').addEventListener('click', ()=> startAt(state.levelIndex));
$('#btnContinue').addEventListener('click', ()=>{
  const next = state.levelIndex + 1;
  if(next >= window.TX_QUIZ.levels.length){
    showScorecard();
  } else {
    startAt(next);
  }
});
$('#btnGoHome').addEventListener('click', ()=>{ buildLevelButtons(); show('viewHome'); });

$('#btnNext').addEventListener('click', ()=>{
  state.qIndex += 1;
  if(state.qIndex >= 10) finishLevel();
  else renderQuestion();
});

function validateDataset(){
  const levels = window.TX_QUIZ?.levels;
  if (!Array.isArray(levels)) throw new Error('Missing quiz dataset.');
  if (levels.length !== 20) throw new Error(`Dataset error: expected 20 levels, got ${levels.length}.`);
  levels.forEach((lv,i)=>{
    if (!Array.isArray(lv.questions) || lv.questions.length !== 10) {
      throw new Error(`Dataset error: level ${i+1} should have 10 questions (has ${lv.questions?.length ?? 0}).`);
    }
    lv.questions.forEach((q,j)=>{
      if (!q?.text || !Array.isArray(q.choices) || q.choices.length !== 4) {
        throw new Error(`Dataset error: L${i+1} Q${j+1} must have text + 4 choices.`);
      }
      if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex > 3) {
        throw new Error(`Dataset error: L${i+1} Q${j+1} invalid answerIndex.`);
      }
      if (!q.image?.url || !q.image?.creditUrl) {
        throw new Error(`Dataset error: L${i+1} Q${j+1} missing image url/creditUrl.`);
      }
      if (!q.source?.url) {
        throw new Error(`Dataset error: L${i+1} Q${j+1} missing source url.`);
      }
    });
  });
}

// init
$('#studentName').value = getStudent();
$('#studentName').addEventListener('input', ()=> setStudent($('#studentName').value));

try {
  validateDataset();
  buildLevelButtons();
  show('viewHome');
} catch (e) {
  alert(e.message + "\n\nThe app needs a complete 20×10 dataset. Try again after the next update.");
  console.error(e);
}
