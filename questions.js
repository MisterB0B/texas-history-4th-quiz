// Texas History Quest — 4th grade — 20 levels × 10 questions
// Note: Keep questions grade-appropriate; sources are linked per question.

window.TX_QUIZ = {
  levels: [
    {
      title: "Level 1 — First Peoples of Texas",
      questions: [
        q("Which group lived in East Texas piney woods and built grass houses called jacales?", ["Caddo", "Comanche", "Karankawa", "Apache"], 0,
          img("https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Caddo_nation_flag.svg/512px-Caddo_nation_flag.svg.png", "https://commons.wikimedia.org/wiki/File:Caddo_nation_flag.svg"),
          src("https://en.wikipedia.org/wiki/Caddo")
        ),
        q("The Comanche were famous for their skills with what animal on the Great Plains?", ["Horse", "Alligator", "Camel", "Moose"], 0,
          img("https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Comanche_and_horse.jpg/640px-Comanche_and_horse.jpg", "https://commons.wikimedia.org/wiki/File:Comanche_and_horse.jpg"),
          src("https://en.wikipedia.org/wiki/Comanche")
        ),
        q("Which Texas coastal people were known for fishing and using canoes?", ["Karankawa", "Caddo", "Tigua", "Tonkawa"], 0,
          img("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coastal_prairie_in_Texas.jpg/640px-Coastal_prairie_in_Texas.jpg", "https://commons.wikimedia.org/wiki/File:Coastal_prairie_in_Texas.jpg"),
          src("https://en.wikipedia.org/wiki/Karankawa")
        ),
        q("Why did many Native peoples move with the seasons?", ["To follow food and resources", "To build skyscrapers", "To find gold coins", "To vote in elections"], 0,
          img("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bison_grazing.jpg/640px-Bison_grazing.jpg", "https://commons.wikimedia.org/wiki/File:Bison_grazing.jpg"),
          src("https://en.wikipedia.org/wiki/Indigenous_peoples_of_Texas")
        ),
        q("What is one reason historians study Native Texas groups?", ["To understand Texas long before statehood", "To learn about smartphones", "To study space rockets", "To watch cartoons"], 0,
          img("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Texas_relief_map.jpg/640px-Texas_relief_map.jpg", "https://commons.wikimedia.org/wiki/File:Texas_relief_map.jpg"),
          src("https://en.wikipedia.org/wiki/History_of_Texas")
        ),
        q("Which of these is a primary source?", ["A diary from the time", "A modern cartoon", "A made-up story", "A video game"], 0,
          img("https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Diary_book.jpg/640px-Diary_book.jpg", "https://commons.wikimedia.org/wiki/File:Diary_book.jpg"),
          src("https://en.wikipedia.org/wiki/Primary_source")
        ),
        q("Texas is very large. Native peoples lived in many different regions. What is one region?", ["Plains", "Antarctica", "The Moon", "The Sahara"], 0,
          img("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Great_Plains.png/640px-Great_Plains.png", "https://commons.wikimedia.org/wiki/File:Great_Plains.png"),
          src("https://en.wikipedia.org/wiki/Great_Plains")
        ),
        q("Which tool helped people hunt bison on the plains long ago?", ["Bow and arrow", "Laptop", "Microwave", "Remote control"], 0,
          img("https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Arrowheads.jpg/640px-Arrowheads.jpg", "https://commons.wikimedia.org/wiki/File:Arrowheads.jpg"),
          src("https://en.wikipedia.org/wiki/Arrowhead")
        ),
        q("What does " + JSON.stringify("culture") + " mean?", ["A group’s way of life", "A type of weather", "A kind of car", "A math problem"], 0,
          img("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Powwow_dancers.jpg/640px-Powwow_dancers.jpg", "https://commons.wikimedia.org/wiki/File:Powwow_dancers.jpg"),
          src("https://en.wikipedia.org/wiki/Culture")
        ),
        q("Good citizenship means being a helpful member of a community. Which is an example?", ["Following rules and helping others", "Cheating", "Stealing", "Being unsafe"], 0,
          img("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Community_service.jpg/640px-Community_service.jpg", "https://commons.wikimedia.org/wiki/File:Community_service.jpg"),
          src("https://tea.texas.gov/texas-schools/general-information/finding-a-school-for-your-child/home-schooling")
        )
      ]
    },

    // NOTE: Levels 2–20 follow in the same pattern.
    // To keep this response readable, the remaining questions are generated in-code below.
  ]
};

// Helper constructors
function q(text, choices, answerIndex, image, source){
  return { text, choices, answerIndex, image, source };
}
function img(url, creditUrl){
  return { url, creditUrl };
}
function src(url){
  return { url };
}

// --- Generate the remaining 19 levels (10 questions each) ---
// These are hand-written templates with safe, widely-taught Texas history facts.

(function buildMore(){
  const L = window.TX_QUIZ.levels;

  const levelDefs = [
    { title: "Level 2 — Spanish Explorers", era: "Spanish explorers" },
    { title: "Level 3 — Missions in Texas", era: "missions" },
    { title: "Level 4 — French in Texas", era: "French" },
    { title: "Level 5 — Mexico & Tejas", era: "Mexican Texas" },
    { title: "Level 6 — Empresarios", era: "empresarios" },
    { title: "Level 7 — Texas Revolution Basics", era: "Texas Revolution" },
    { title: "Level 8 — The Alamo", era: "Alamo" },
    { title: "Level 9 — Goliad & " + JSON.stringify("Remember") + "", era: "Goliad" },
    { title: "Level 10 — San Jacinto", era: "San Jacinto" },
    { title: "Level 11 — Republic of Texas", era: "Republic" },
    { title: "Level 12 — Statehood", era: "statehood" },
    { title: "Level 13 — Civil War Era Texas", era: "Civil War" },
    { title: "Level 14 — Cattle & Cowboys", era: "cattle" },
    { title: "Level 15 — Railroads & Growth", era: "railroads" },
    { title: "Level 16 — Oil Boom", era: "oil" },
    { title: "Level 17 — Texas in World War II", era: "WWII" },
    { title: "Level 18 — Civil Rights in Texas", era: "civil rights" },
    { title: "Level 19 — Modern Texas", era: "modern" },
    { title: "Level 20 — Review Mix", era: "review" },
  ];

  const images = {
    explorer: img('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Map_of_Texas_1685.jpg/640px-Map_of_Texas_1685.jpg','https://commons.wikimedia.org/wiki/File:Map_of_Texas_1685.jpg'),
    mission: img('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mission_San_Jos%C3%A9_Y_San_Miguel_de_Aguayo.jpg/640px-Mission_San_Jos%C3%A9_Y_San_Miguel_de_Aguayo.jpg','https://commons.wikimedia.org/wiki/File:Mission_San_Jos%C3%A9_Y_San_Miguel_de_Aguayo.jpg'),
    alamo: img('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Alamo_2019.jpg/640px-Alamo_2019.jpg','https://commons.wikimedia.org/wiki/File:Alamo_2019.jpg'),
    sanjacinto: img('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Jacinto_Monument.jpg/640px-San_Jacinto_Monument.jpg','https://commons.wikimedia.org/wiki/File:San_Jacinto_Monument.jpg'),
    flag: img('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/640px-Flag_of_Texas.svg.png','https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg'),
    cattle: img('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cattle_drive.jpg/640px-Cattle_drive.jpg','https://commons.wikimedia.org/wiki/File:Cattle_drive.jpg'),
    oil: img('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Spindletop_gusher.jpg/640px-Spindletop_gusher.jpg','https://commons.wikimedia.org/wiki/File:Spindletop_gusher.jpg'),
    ww2: img('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/USO_show_1943.jpg/640px-USO_show_1943.jpg','https://commons.wikimedia.org/wiki/File:USO_show_1943.jpg'),
    capitol: img('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Texas_State_Capitol_2014.jpg/640px-Texas_State_Capitol_2014.jpg','https://commons.wikimedia.org/wiki/File:Texas_State_Capitol_2014.jpg')
  };

  const sources = {
    history: src('https://en.wikipedia.org/wiki/History_of_Texas'),
    spain: src('https://en.wikipedia.org/wiki/New_Spain'),
    missions: src('https://en.wikipedia.org/wiki/Spanish_missions_in_Texas'),
    alamo: src('https://en.wikipedia.org/wiki/Battle_of_the_Alamo'),
    goliad: src('https://en.wikipedia.org/wiki/Goliad_massacre'),
    sanjacinto: src('https://en.wikipedia.org/wiki/Battle_of_San_Jacinto'),
    republic: src('https://en.wikipedia.org/wiki/Republic_of_Texas'),
    statehood: src('https://en.wikipedia.org/wiki/Annexation_of_Texas'),
    spindletop: src('https://en.wikipedia.org/wiki/Spindletop'),
  };

  function mc(text, choices, answer, image, sourceUrl){
    return q(text, choices, answer, image, src(sourceUrl));
  }

  // Level generator: 10 questions per level, with a clear correct answer.
  for (const def of levelDefs){
    const qs = [];

    if (def.era === 'Spanish explorers'){
      qs.push(mc('Spain explored and claimed parts of Texas as part of what colony?', ['New Spain','New France','New England','New Germany'], 0, images.explorer, sources.spain.url));
      qs.push(mc('Spanish explorers were often looking for which of these?', ['New lands and riches','Video games','Snowstorms','Robots'], 0, images.explorer, sources.history.url));
      qs.push(mc('What is an “explorer”?', ['Someone who travels to learn about new places','Someone who stays home always','Someone who paints only','Someone who sells cars'], 0, images.explorer, sources.history.url));
      qs.push(mc('Why did Spain build forts and missions in Texas?', ['To protect land and spread culture/religion','To build amusement parks','To make TV shows','To grow pineapples'], 0, images.mission, sources.missions.url));
      qs.push(mc('Which direction is Spain from Texas?', ['Across the Atlantic Ocean','Across the Pacific Ocean','Across the Arctic Ocean','Inside Texas'], 0, images.explorer, sources.history.url));
      qs.push(mc('Long ago, maps helped explorers do what?', ['Plan routes and find places','Bake cakes','Play soccer','Write music'], 0, images.explorer, sources.history.url));
      qs.push(mc('A “colony” is…', ['A place controlled by a far-away country','A kind of sandwich','A mountain','A spaceship'], 0, images.explorer, sources.spain.url));
      qs.push(mc('Which is a reason people keep records of history?', ['So we can learn what happened and why','So we forget everything','So we never read','So we hide facts'], 0, images.capitol, sources.history.url));
      qs.push(mc('Explorers often traveled by…', ['Ship and horseback','Airplane and subway','Rocket and hoverboard','Snowmobile'], 0, images.explorer, sources.history.url));
      qs.push(mc('What’s the safest way to study history?', ['Use evidence and reliable sources','Guess randomly','Copy rumors','Change facts'], 0, images.capitol, sources.history.url));
    }

    else if (def.era === 'missions'){
      qs.push(mc('A mission in Texas was mainly a…', ['Religious and community settlement','Shopping mall','Space station','Movie theater'], 0, images.mission, sources.missions.url));
      qs.push(mc('Missions often taught people new skills like…', ['Farming and crafts','Video editing','Robotics competitions','Snowboarding'], 0, images.mission, sources.missions.url));
      qs.push(mc('San Antonio is famous for which mission site?', ['The Alamo','Mount Rushmore','The Eiffel Tower','Niagara Falls'], 0, images.alamo, sources.alamo.url));
      qs.push(mc('Missions were built by…', ['Spain in colonial times','Ancient Egypt','Modern astronauts','Vikings'], 0, images.mission, sources.missions.url));
      qs.push(mc('Why were missions important in early Texas?', ['They were centers for community life','They made cars','They sold computers','They built skyscrapers'], 0, images.mission, sources.missions.url));
      qs.push(mc('Missions were often built near…', ['Water sources like rivers','Active volcanoes only','The North Pole','Under the ocean'], 0, images.mission, sources.missions.url));
      qs.push(mc('A “primary source” could be…', ['A letter written at the time','A modern meme','A made-up rumor','A cartoon without facts'], 0, images.mission, 'https://en.wikipedia.org/wiki/Primary_source'));
      qs.push(mc('A mission church was used for…', ['Worship and community gatherings','Skateboarding','Watching TV','Playing video games'], 0, images.mission, sources.missions.url));
      qs.push(mc('Missions helped Spain…', ['Hold and organize land claims','Create Texas counties','Invent electricity','Build highways'], 0, images.capitol, sources.missions.url));
      qs.push(mc('Which is a Texas mission name?', ['San José','Big Ben','Colosseum','Great Wall'], 0, images.mission, sources.missions.url));
    }

    else if (def.era === 'French'){
      qs.push(mc('France tried to start a colony in Texas in the 1680s. The colony was called…', ['Fort St. Louis','Jamestown','Plymouth','Fort Knox'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Fort_Saint_Louis_(Texas)'));
      qs.push(mc('The French colony was on or near the…', ['Texas Gulf Coast','Rocky Mountains','Great Lakes','Pacific Northwest'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Fort_Saint_Louis_(Texas)'));
      qs.push(mc('France’s presence in Texas made Spain…', ['More interested in protecting Texas','Leave Texas forever','Turn Texas into an island','Stop making maps'], 0, images.explorer, sources.history.url));
      qs.push(mc('A “fort” is built mainly for…', ['Defense and protection','Growing corn','Painting pictures','Playing sports'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Fort'));
      qs.push(mc('Which country is New France connected to?', ['France','Spain','China','Brazil'], 0, images.explorer, 'https://en.wikipedia.org/wiki/New_France'));
      qs.push(mc('If two countries want the same land, that is called a…', ['Conflict','Vacation','Recipe','Concert'], 0, images.capitol, sources.history.url));
      qs.push(mc('Historians learn about colonies by studying…', ['Artifacts and written records','Magic tricks','Dreams only','Rumors'], 0, images.capitol, sources.history.url));
      qs.push(mc('The French colony in Texas did not last long because…', ['It faced hardships and attacks','It became a huge city','It moved to space','It turned into a zoo'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Fort_Saint_Louis_(Texas)'));
      qs.push(mc('What ocean is near the Texas Gulf Coast?', ['Gulf of Mexico (part of Atlantic Ocean region)','Arctic Ocean','Indian Ocean','Southern Ocean'], 0, images.explorer, sources.history.url));
      qs.push(mc('France and Spain were both European countries. True or false?', ['True','False','Only in winter','Only on Tuesdays'], 0, images.explorer, sources.history.url));
    }

    else if (def.era === 'Mexican Texas'){
      qs.push(mc('In the early 1800s, Texas was part of…', ['Mexico','Canada','Japan','Australia'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Mexican_Texas'));
      qs.push(mc('Texas was often called “Tejas.” True or false?', ['True','False','Only in space','Only at night'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Tejas'));
      qs.push(mc('Why did Mexico invite settlers to Texas?', ['To help grow and defend the region','To build roller coasters','To mine diamonds','To make movies'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Mexican_Texas'));
      qs.push(mc('A law is a rule made by…', ['A government','A toy store','A comic book','A soccer team'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Law'));
      qs.push(mc('Good citizenship includes…', ['Learning about rules and government','Breaking promises','Cheating','Being unsafe'], 0, images.capitol, 'https://tea.texas.gov/texas-schools/general-information/finding-a-school-for-your-child/home-schooling'));
      qs.push(mc('Settlers in Mexican Texas often spoke…', ['Spanish and English','Only Latin','Only Chinese','Only French'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Mexican_Texas'));
      qs.push(mc('A capital is…', ['A city where government leaders work','A kind of snack','A river','A mountain'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Capital_city'));
      qs.push(mc('Austin is the capital of Texas today. True or false?', ['True','False','Only in summer','Only in winter'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Austin,_Texas'));
      qs.push(mc('People move to new places for many reasons. One reason is…', ['To find land and opportunity','To become invisible','To stop learning','To avoid food'], 0, images.explorer, sources.history.url));
      qs.push(mc('History includes studying…', ['People, places, and events from the past','Only dinosaurs','Only the future','Only cartoons'], 0, images.capitol, sources.history.url));
    }

    else if (def.era === 'empresarios'){
      qs.push(mc('An empresario was someone who…', ['Brought settlers to Texas','Built rockets','Made cartoons','Discovered Antarctica'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Empresario'));
      qs.push(mc('One famous empresario was…', ['Stephen F. Austin','George Washington','Abraham Lincoln','Amelia Earhart'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Stephen_F._Austin'));
      qs.push(mc('Empresarios got land grants from…', ['The Mexican government','The Roman Empire','The State of Alaska','A TV studio'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Empresario'));
      qs.push(mc('Settlers were asked to follow laws of…', ['Mexico','Japan','Italy','Australia'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Mexican_Texas'));
      qs.push(mc('A “grant” is…', ['Permission or something given','A kind of animal','A type of tree','A song'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Grant_(law)'));
      qs.push(mc('Stephen F. Austin is often called the…', ['Father of Texas','King of Spain','President of France','Mayor of New York'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Stephen_F._Austin'));
      qs.push(mc('Many early settlers came from the…', ['United States','Australia','Antarctica','Africa only'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Mexican_Texas'));
      qs.push(mc('A contract is an agreement. True or false?', ['True','False','Only on weekends','Only in Texas'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Contract'));
      qs.push(mc('Why would a government want settlers on frontier land?', ['To help develop and protect it','To empty it completely','To hide it forever','To melt it'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Frontier'));
      qs.push(mc('Learning Texas history helps us understand…', ['How Texas became what it is today','Only math','Only science','Only music'], 0, images.capitol, sources.history.url));
    }

    else if (def.era === 'Texas Revolution'){
      qs.push(mc('The Texas Revolution was a fight between Texas settlers and…', ['Mexico','Canada','France','Japan'], 0, images.flag, 'https://en.wikipedia.org/wiki/Texas_Revolution'));
      qs.push(mc('The revolution happened in the…', ['1830s','1930s','1730s','2030s'], 0, images.flag, 'https://en.wikipedia.org/wiki/Texas_Revolution'));
      qs.push(mc('People wanted more local control. That idea relates to…', ['Self-government','Volcanoes','Video games','Baking'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Self-governance'));
      qs.push(mc('A battle is…', ['A fight between groups/armies','A dance','A recipe','A poem'], 0, images.flag, 'https://en.wikipedia.org/wiki/Battle'));
      qs.push(mc('Which phrase is connected to Texas independence?', ['Remember the Alamo','Remember the Moon','Remember the Rainforest','Remember the Alps'], 0, images.alamo, sources.alamo.url));
      qs.push(mc('A “revolution” is…', ['A major change, often in government','A type of car','A new shoe','A musical instrument'], 0, images.flag, 'https://en.wikipedia.org/wiki/Revolution'));
      qs.push(mc('Who was Santa Anna?', ['A leader of Mexico during the Texas Revolution','A Texas governor in 2000','A famous cowboy singer','A railroad builder'], 0, images.flag, 'https://en.wikipedia.org/wiki/Antonio_L%C3%B3pez_de_Santa_Anna'));
      qs.push(mc('A declaration of independence tells…', ['Why a group wants to become independent','How to cook','How to dance','How to skateboard'], 0, images.flag, 'https://en.wikipedia.org/wiki/Declaration_of_independence'));
      qs.push(mc('Why do historians compare sources?', ['To check accuracy','To make rumors','To hide facts','To skip reading'], 0, images.capitol, sources.history.url));
      qs.push(mc('Which is a place in Texas connected to the Revolution?', ['San Antonio','Paris (France)','London','Tokyo'], 0, images.alamo, sources.alamo.url));
    }

    else if (def.era === 'Alamo'){
      qs.push(mc('The Alamo is located in…', ['San Antonio','Austin','Dallas','El Paso'], 0, images.alamo, sources.alamo.url));
      qs.push(mc('The Battle of the Alamo happened in…', ['1836','1901','1776','2001'], 0, images.alamo, sources.alamo.url));
      qs.push(mc('The Alamo was originally a…', ['Mission','Castle','School','Skyscraper'], 0, images.mission, sources.missions.url));
      qs.push(mc('“Remember the Alamo” became a…', ['Rallying cry','Math rule','Song lyric only','Food recipe'], 0, images.alamo, sources.alamo.url));
      qs.push(mc('Defenders at the Alamo fought against…', ['Santa Anna’s army','The Roman army','Vikings','Pirates'], 0, images.alamo, sources.alamo.url));
      qs.push(mc('Why is the Alamo remembered today?', ['It became a symbol in Texas history','It was a shopping mall','It was a zoo','It was a train station'], 0, images.alamo, sources.alamo.url));
      qs.push(mc('Which is a respectful way to visit historic sites?', ['Follow rules and learn','Climb on everything','Break signs','Throw trash'], 0, images.alamo, sources.alamo.url));
      qs.push(mc('A memorial is built to…', ['Remember people/events','Sell candy','Park cars','Play sports'], 0, images.sanjacinto, 'https://en.wikipedia.org/wiki/Memorial'));
      qs.push(mc('What does “historic” mean?', ['Important in history','Made of plastic','Very small','Not real'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Historic'));
      qs.push(mc('San Antonio is in which part of Texas?', ['South-Central','Far North','Outside Texas','Underwater'], 0, images.capitol, 'https://en.wikipedia.org/wiki/San_Antonio'));
    }

    else if (def.era === 'Goliad'){
      qs.push(mc('The Goliad Massacre happened during the…', ['Texas Revolution','Oil Boom','WWII','Space Race'], 0, images.flag, sources.goliad.url));
      qs.push(mc('Goliad is a town in…', ['Texas','Florida','California','New York'], 0, images.flag, sources.goliad.url));
      qs.push(mc('The Goliad event is remembered because…', ['Many prisoners were killed','It was a big parade','It was a concert','It was a fair'], 0, images.flag, sources.goliad.url));
      qs.push(mc('“Remember Goliad!” was used to…', ['Encourage Texans to keep fighting','Start a recipe','Name a video game','Build a bridge'], 0, images.flag, sources.goliad.url));
      qs.push(mc('History can be sad. What is a good way to learn it?', ['With respect and facts','By joking about it','By changing facts','By ignoring it'], 0, images.capitol, sources.history.url));
      qs.push(mc('A “massacre” means…', ['Many people killed','A small party','A sports game','A school day'], 0, images.flag, sources.goliad.url));
      qs.push(mc('Why do people build museums?', ['To teach and preserve history','To hide homework','To sell cars','To grow plants'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Museum'));
      qs.push(mc('Which is a way to honor history?', ['Learn from it','Pretend it never happened','Make up stories','Hide sources'], 0, images.capitol, sources.history.url));
      qs.push(mc('The Texas Revolution ended with Texas becoming…', ['Independent for a time','A country in Europe','A state of Mexico forever','A new ocean'], 0, images.flag, sources.republic.url));
      qs.push(mc('The next big battle after the Alamo and Goliad was…', ['San Jacinto','Gettysburg','Yorktown','Normandy'], 0, images.sanjacinto, sources.sanjacinto.url));
    }

    else if (def.era === 'San Jacinto'){
      qs.push(mc('The Battle of San Jacinto was fought near what city?', ['Houston area','El Paso','Amarillo','Lubbock'], 0, images.sanjacinto, sources.sanjacinto.url));
      qs.push(mc('Who led the Texas army at San Jacinto?', ['Sam Houston','Stephen F. Austin','Davy Crockett','George Washington'], 0, images.sanjacinto, 'https://en.wikipedia.org/wiki/Sam_Houston'));
      qs.push(mc('San Jacinto was important because…', ['Texas won independence soon after','It ended the Oil Boom','It built the Capitol','It started WWII'], 0, images.sanjacinto, sources.sanjacinto.url));
      qs.push(mc('Santa Anna was captured after…', ['San Jacinto','The Civil War','The railroad era','The oil boom'], 0, images.sanjacinto, sources.sanjacinto.url));
      qs.push(mc('A monument is built to…', ['Remember something important','Cook food','Play sports','Store toys'], 0, images.sanjacinto, 'https://en.wikipedia.org/wiki/Monument'));
      qs.push(mc('Texas became a republic after…', ['Winning the revolution','Finding oil','Building railroads','Inventing phones'], 0, images.flag, sources.republic.url));
      qs.push(mc('What does “victory” mean?', ['Winning','Losing','Sleeping','Painting'], 0, images.flag, 'https://en.wikipedia.org/wiki/Victory'));
      qs.push(mc('Why do we study battles?', ['They changed history','They are always fun','They are only games','They are food'], 0, images.capitol, sources.history.url));
      qs.push(mc('Houston is a city in Texas. True or false?', ['True','False','Only in winter','Only in summer'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Houston'));
      qs.push(mc('Which is a Texas symbol?', ['Texas flag','Eiffel Tower','Great Wall','Pyramids'], 0, images.flag, 'https://en.wikipedia.org/wiki/Flag_of_Texas'));
    }

    else if (def.era === 'Republic'){
      qs.push(mc('After 1836, Texas became the…', ['Republic of Texas','Kingdom of Texas','Empire of Texas','Colony of Texas'], 0, images.flag, sources.republic.url));
      qs.push(mc('The Republic of Texas lasted until…', ['1845','1901','1776','2000'], 0, images.flag, sources.statehood.url));
      qs.push(mc('A president is…', ['A leader elected to run a government','A type of animal','A mountain','A river'], 0, images.capitol, 'https://en.wikipedia.org/wiki/President'));
      qs.push(mc('Sam Houston was president of the Republic. True or false?', ['True','False','Only on weekends','Only in spring'], 0, images.sanjacinto, sources.republic.url));
      qs.push(mc('Why might a country want to join another country?', ['Protection and trade','To stop learning','To hide maps','To end math'], 0, images.capitol, sources.statehood.url));
      qs.push(mc('A capital city of the Republic was…', ['Austin','New York','Paris','London'], 0, images.capitol, sources.republic.url));
      qs.push(mc('A constitution is…', ['Rules for how a government works','A kind of hat','A train','A math tool'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Constitution'));
      qs.push(mc('Which is a way to show good citizenship?', ['Learn about government','Cheat','Be unsafe','Bully'], 0, images.capitol, sources.history.url));
      qs.push(mc('Texas later became a U.S. state. True or false?', ['True','False','Only in 1836','Only in 1901'], 0, images.flag, sources.statehood.url));
      qs.push(mc('A “republic” is a government where…', ['People elect leaders','Kings rule forever','No rules exist','Only kids vote'], 0, images.capitol, sources.republic.url));
    }

    else if (def.era === 'statehood'){
      qs.push(mc('Texas joined the United States in…', ['1845','1836','1901','1776'], 0, images.flag, sources.statehood.url));
      qs.push(mc('When a place becomes part of a country, that can be called…', ['Annexation','Hibernation','Evaporation','Illumination'], 0, images.flag, sources.statehood.url));
      qs.push(mc('Austin is the capital of Texas. True or false?', ['True','False','Only in 1845','Only in summer'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Austin,_Texas'));
      qs.push(mc('A state has its own government and also follows…', ['U.S. laws','Only school rules','Only game rules','No rules'], 0, images.capitol, 'https://en.wikipedia.org/wiki/U.S._state'));
      qs.push(mc('A legislature is a group that…', ['Makes laws','Builds houses','Cooks food','Plays music'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Legislature'));
      qs.push(mc('The Texas state flag has one star. This is why Texas is called…', ['The Lone Star State','The Two Star State','The Moon State','The River State'], 0, images.flag, 'https://en.wikipedia.org/wiki/Flag_of_Texas'));
      qs.push(mc('The Texas State Capitol is in…', ['Austin','Houston','San Antonio','Dallas'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Texas_State_Capitol'));
      qs.push(mc('A governor is…', ['The leader of a state government','A kind of fish','A type of rock','A cowboy hat'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Governor_(United_States)'));
      qs.push(mc('A citizen is…', ['A member of a community/country','A type of car','A mountain','A storm'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Citizenship'));
      qs.push(mc('Which is a way to practice good citizenship at school?', ['Be respectful and helpful','Cheat','Fight','Litter'], 0, images.capitol, sources.history.url));
    }

    else if (def.era === 'Civil War'){
      qs.push(mc('The Civil War was fought between…', ['The Union and the Confederacy','Texas and Spain','France and Mexico','Canada and Alaska'], 0, images.capitol, 'https://en.wikipedia.org/wiki/American_Civil_War'));
      qs.push(mc('Texas joined the… during the Civil War.', ['Confederacy','European Union','United Nations','Vikings'], 0, images.flag, 'https://en.wikipedia.org/wiki/Texas_in_the_American_Civil_War'));
      qs.push(mc('After the Civil War, the U.S. began…', ['Reconstruction','Space travel','Dinosaur farming','Internet building'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Reconstruction_era'));
      qs.push(mc('History questions should be answered using…', ['Evidence','Rumors','Guesses only','Magic'], 0, images.capitol, sources.history.url));
      qs.push(mc('A timeline helps you…', ['Put events in order','Bake cookies','Play games','Draw cartoons'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Timeline'));
      qs.push(mc('The Civil War happened in the…', ['1860s','1760s','1960s','2060s'], 0, images.capitol, 'https://en.wikipedia.org/wiki/American_Civil_War'));
      qs.push(mc('A cause is…', ['A reason something happens','A type of shoe','A river','A mountain'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Causality'));
      qs.push(mc('An effect is…', ['A result of something','A sandwich','A tree','A car'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Causality'));
      qs.push(mc('Studying history helps us learn from…', ['Mistakes and successes','Only cartoons','Only sports','Only games'], 0, images.capitol, sources.history.url));
      qs.push(mc('Good citizenship includes learning about…', ['Rules and rights','Cheating','Stealing','Unsafe choices'], 0, images.capitol, sources.history.url));
    }

    else if (def.era === 'cattle'){
      qs.push(mc('After the Civil War, cattle drives helped ranchers…', ['Move cattle to railroads and markets','Fly to the moon','Build submarines','Make robots'], 0, images.cattle, 'https://en.wikipedia.org/wiki/Cattle_drive'));
      qs.push(mc('People who worked with cattle on ranches were called…', ['Cowboys','Astronauts','Pirates','Knights'], 0, images.cattle, 'https://en.wikipedia.org/wiki/Cowboy'));
      qs.push(mc('A ranch is…', ['Land where animals are raised','A skyscraper','A train','A boat'], 0, images.cattle, 'https://en.wikipedia.org/wiki/Ranch'));
      qs.push(mc('Cattle drives often used trails like the…', ['Chisholm Trail','Silk Road','Appalachian Trail','Great Wall'], 0, images.cattle, 'https://en.wikipedia.org/wiki/Chisholm_Trail'));
      qs.push(mc('Why were railroads important to ranchers?', ['They shipped cattle to faraway markets','They made candy','They built volcanoes','They grew trees'], 0, images.cattle, 'https://en.wikipedia.org/wiki/Rail_transport'));
      qs.push(mc('Texas became known for…', ['Ranching and cattle','Igloos','Rainforests','Glaciers'], 0, images.cattle, 'https://en.wikipedia.org/wiki/Ranching'));
      qs.push(mc('A market is a place where…', ['Goods are bought and sold','Only books are read','Only games are played','Only naps happen'], 0, images.cattle, 'https://en.wikipedia.org/wiki/Market_(economics)'));
      qs.push(mc('Which is a tool cowboys might use?', ['Lasso','Laptop','Microwave','Remote control'], 0, images.cattle, 'https://en.wikipedia.org/wiki/Lasso'));
      qs.push(mc('Cattle drives could be dangerous because…', ['Weather and stampedes','They were underwater','They were in space','They used rockets'], 0, images.cattle, 'https://en.wikipedia.org/wiki/Cattle_drive'));
      qs.push(mc('Working together on a ranch shows…', ['Teamwork','Cheating','Littering','Being unsafe'], 0, images.cattle, sources.history.url));
    }

    else if (def.era === 'railroads'){
      qs.push(mc('Railroads helped Texas because they…', ['Connected towns and moved goods faster','Stopped travel forever','Removed rivers','Built mountains'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Rail_transport_in_Texas'));
      qs.push(mc('Railroads made it easier to…', ['Ship cotton and cattle','Teleport','Fly to Mars','Become invisible'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Rail_transport_in_Texas'));
      qs.push(mc('A locomotive is…', ['A train engine','A type of horse','A kind of tree','A math problem'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Locomotive'));
      qs.push(mc('Towns often grew near…', ['Railroad lines','Volcanoes','Icebergs','Deserts only'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Rail_transport'));
      qs.push(mc('Why do transportation systems matter?', ['They connect people and trade','They stop learning','They hide history','They erase maps'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Transportation'));
      qs.push(mc('A cargo is…', ['Goods being transported','A dance','A song','A toy'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Cargo'));
      qs.push(mc('Railroad time schedules helped with…', ['Planning travel','Cooking','Playing games','Sleeping'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Railway_timetable'));
      qs.push(mc('Texas has many large cities today partly because…', ['Transportation helped growth','There were no roads','There were no people','There were only farms'], 0, images.capitol, sources.history.url));
      qs.push(mc('Which is a Texas city?', ['Dallas','Paris (France)','Rome','Beijing'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Dallas'));
      qs.push(mc('Good citizenship includes…', ['Taking care of community places','Breaking things','Littering','Cheating'], 0, images.capitol, sources.history.url));
    }

    else if (def.era === 'oil'){
      qs.push(mc('Spindletop is famous for…', ['A big oil gusher in 1901','A gold rush in 1801','A space launch in 2001','A snowstorm in 1701'], 0, images.oil, sources.spindletop.url));
      qs.push(mc('Spindletop is near…', ['Beaumont, Texas','El Paso','Amarillo','Austin'], 0, images.oil, sources.spindletop.url));
      qs.push(mc('Oil is used to make…', ['Gasoline and many products','Only ice cream','Only paper','Only wood'], 0, images.oil, 'https://en.wikipedia.org/wiki/Petroleum'));
      qs.push(mc('An “oil boom” means…', ['Fast growth because of oil business','A quiet day','A snowstorm','A flood'], 0, images.oil, 'https://en.wikipedia.org/wiki/Oil_boom'));
      qs.push(mc('Texas became a major oil state. True or false?', ['True','False','Only in winter','Only on weekends'], 0, images.oil, 'https://en.wikipedia.org/wiki/Petroleum_industry_in_Texas'));
      qs.push(mc('A refinery is a place where…', ['Oil is processed','Books are printed','Trains are built','Cattle are raised'], 0, images.oil, 'https://en.wikipedia.org/wiki/Oil_refinery'));
      qs.push(mc('Why did oil change Texas?', ['Jobs and new industries grew','It made Texas smaller','It stopped cities from growing','It removed roads'], 0, images.oil, 'https://en.wikipedia.org/wiki/Petroleum_industry_in_Texas'));
      qs.push(mc('Which is a safe rule around machines?', ['Follow safety rules','Touch everything','Run around','Ignore signs'], 0, images.oil, 'https://en.wikipedia.org/wiki/Industrial_safety'));
      qs.push(mc('Spindletop happened in the…', ['1900s','1500s','1700s','2100s'], 0, images.oil, sources.spindletop.url));
      qs.push(mc('Texas history includes learning about…', ['Natural resources like oil','Only cartoons','Only sports','Only games'], 0, images.oil, sources.history.url));
    }

    else if (def.era === 'WWII'){
      qs.push(mc('World War II happened mostly in the…', ['1940s','1840s','1740s','2040s'], 0, images.ww2, 'https://en.wikipedia.org/wiki/World_War_II'));
      qs.push(mc('During WWII, Texas had many…', ['Military training bases','Castles','Pyramids','Ice palaces'], 0, images.ww2, 'https://en.wikipedia.org/wiki/United_States_home_front_during_World_War_II'));
      qs.push(mc('A “home front” means…', ['People supporting the war effort at home','A front porch only','A mountain range','A river delta'], 0, images.ww2, 'https://en.wikipedia.org/wiki/Home_front'));
      qs.push(mc('Factories in Texas helped by making…', ['Supplies and equipment','Only toys','Only candy','Only books'], 0, images.ww2, 'https://en.wikipedia.org/wiki/War_industry'));
      qs.push(mc('Why do we study WWII in Texas history?', ['Texas contributed to the nation’s efforts','It happened in 1500','It was only in Europe','It was only a game'], 0, images.ww2, 'https://en.wikipedia.org/wiki/United_States_home_front_during_World_War_II'));
      qs.push(mc('A veteran is…', ['Someone who served in the military','A type of animal','A city','A hurricane'], 0, images.ww2, 'https://en.wikipedia.org/wiki/Veteran'));
      qs.push(mc('Good citizenship includes…', ['Helping your community','Cheating','Stealing','Littering'], 0, images.capitol, sources.history.url));
      qs.push(mc('Texas has ports that helped move supplies. A port is…', ['A place for ships to load/unload','A type of shoe','A desert','A mountain'], 0, images.ww2, 'https://en.wikipedia.org/wiki/Port'));
      qs.push(mc('During WWII, many women worked in…', ['Factories and offices','Only farms','Only castles','Only caves'], 0, images.ww2, 'https://en.wikipedia.org/wiki/Rosie_the_Riveter'));
      qs.push(mc('History should be studied with…', ['Respect and facts','Rumors only','Made-up stories','Guessing'], 0, images.capitol, sources.history.url));
    }

    else if (def.era === 'civil rights'){
      qs.push(mc('Civil rights are…', ['Rights people should have equally','Types of shoes','Kinds of weather','Math tricks'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Civil_and_political_rights'));
      qs.push(mc('The civil rights movement in the U.S. grew in the…', ['1950s–1960s','1750s–1760s','1650s–1660s','2050s–2060s'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Civil_rights_movement'));
      qs.push(mc('A law that is unfair can be changed by…', ['People working together and voting','Ignoring it forever','Making up facts','Hiding history'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Civil_rights_movement'));
      qs.push(mc('Good citizenship includes…', ['Treating others fairly','Bullying','Cheating','Stealing'], 0, images.capitol, sources.history.url));
      qs.push(mc('A protest is…', ['A public way to show you want change','A dessert','A song','A toy'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Protest'));
      qs.push(mc('Voting is a way citizens…', ['Choose leaders and decisions','Cook food','Drive trains','Build pyramids'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Voting'));
      qs.push(mc('A right is…', ['Something you are allowed to do','A type of hat','A river','A storm'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Rights'));
      qs.push(mc('A responsibility is…', ['Something you should do','A toy','A mountain','A color'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Responsibility'));
      qs.push(mc('History helps us understand why equal rights matter. True or false?', ['True','False','Only on weekends','Only at night'], 0, images.capitol, sources.history.url));
      qs.push(mc('Treating everyone with respect is…', ['Good citizenship','Bad sportsmanship','Cheating','Unsafe'], 0, images.capitol, sources.history.url));
    }

    else if (def.era === 'modern'){
      qs.push(mc('Texas today has large cities like…', ['Houston','Paris (France)','London','Tokyo'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Houston'));
      qs.push(mc('Texas’ capital city is…', ['Austin','Dallas','El Paso','San Antonio'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Austin,_Texas'));
      qs.push(mc('Texas has many industries, including…', ['Energy and technology','Only castles','Only igloos','Only volcanoes'], 0, images.oil, 'https://en.wikipedia.org/wiki/Economy_of_Texas'));
      qs.push(mc('A timeline shows…', ['Events in order over time','Only pictures','Only music','Only math'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Timeline'));
      qs.push(mc('Texas history includes Native peoples, Spain, Mexico, and the U.S. True or false?', ['True','False','Only Spain','Only Mexico'], 0, images.flag, sources.history.url));
      qs.push(mc('A symbol of Texas is the…', ['Texas flag','Eiffel Tower','Great Wall','Pyramids'], 0, images.flag, 'https://en.wikipedia.org/wiki/Flag_of_Texas'));
      qs.push(mc('Good citizenship in a community includes…', ['Helping and being responsible','Littering','Cheating','Bullying'], 0, images.capitol, sources.history.url));
      qs.push(mc('Studying history helps us…', ['Understand the present','Forget the past','Skip learning','Change facts'], 0, images.capitol, sources.history.url));
      qs.push(mc('Texas is one of the largest states in the U.S. True or false?', ['True','False','Only in winter','Only in summer'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Texas'));
      qs.push(mc('A primary source is…', ['Made at the time of an event','A rumor','A modern guess','A game'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Primary_source'));
    }

    else {
      // Review level: mix facts
      const mix = [
        mc('Texas joined the U.S. in…', ['1845','1836','1901','1776'], 0, images.flag, sources.statehood.url),
        mc('The Alamo is in…', ['San Antonio','Austin','Dallas','El Paso'], 0, images.alamo, sources.alamo.url),
        mc('Spindletop is famous for…', ['Oil gusher','Gold rush','Space launch','Snowstorm'], 0, images.oil, sources.spindletop.url),
        mc('Who led at San Jacinto?', ['Sam Houston','Davy Crockett','Santa Anna','Stephen F. Austin'], 0, images.sanjacinto, 'https://en.wikipedia.org/wiki/Sam_Houston'),
        mc('The Lone Star State is…', ['Texas','Alaska','Florida','Ohio'], 0, images.flag, 'https://en.wikipedia.org/wiki/Texas'),
        mc('Empresarios helped bring…', ['Settlers','Dinosaurs','Robots','Penguins'], 0, images.explorer, 'https://en.wikipedia.org/wiki/Empresario'),
        mc('A mission was a…', ['Settlement/church','Skyscraper','Mall','Stadium'], 0, images.mission, sources.missions.url),
        mc('Cowboys worked on…', ['Ranches','Submarines','Space stations','Pyramids'], 0, images.cattle, 'https://en.wikipedia.org/wiki/Cowboy'),
        mc('Good citizenship includes…', ['Helping others','Cheating','Stealing','Bullying'], 0, images.capitol, sources.history.url),
        mc('A primary source example is…', ['A diary','A rumor','A guess','A meme'], 0, images.capitol, 'https://en.wikipedia.org/wiki/Primary_source'),
      ];
      qs.push(...mix);
    }

    // Ensure 10
    while (qs.length < 10) {
      qs.push(mc('Texas history is studied using…', ['Reliable sources','Rumors','Guesses','Magic'], 0, images.capitol, sources.history.url));
    }

    L.push({ title: def.title, questions: qs.slice(0,10) });
  }
})();
