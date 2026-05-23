// ===========================
//  FlixZone – data.js
// ===========================

const PALETTE = [
  ['#1a1a2e','#16213e'], ['#0f3460','#533483'],
  ['#2d1b69','#11998e'], ['#e53935','#1a1a2e'],
  ['#1b4332','#40916c'], ['#3a0ca3','#7209b7'],
  ['#023e8a','#0077b6'], ['#6a0572','#c77dff'],
  ['#1d3557','#e63946'], ['#003049','#fcbf49'],
  ['#2b2d42','#ef233c'], ['#0a3d62','#f8c291'],
  ['#134e4a','#0d9488'], ['#1e1b4b','#4f46e5'],
  ['#450a0a','#dc2626'], ['#14532d','#16a34a']
];

const SHOWS = [
  {
    id: 1, title: 'Sacred Games', genre: 'Thriller',
    year: 2018, rating: 'A', duration: '8 Episodes',
    match: 98, language: 'Hindi',
    desc: 'A link in the chain of a conspiracy that could destroy Mumbai brings police officer Sartaj Singh into contact with a criminal overlord named Ganesh Gaitonde.'
  },
  {
    id: 2, title: 'Mirzapur', genre: 'Action',
    year: 2018, rating: 'A', duration: '10 Episodes',
    match: 96, language: 'Hindi',
    desc: 'Guddu and Bablu\'s lives change after an encounter with Munna, the reckless son of Akhandanand Tripathi, a powerful carpets exporter and mafia overlord.'
  },
  {
    id: 3, title: 'The Family Man', genre: 'Action',
    year: 2019, rating: 'U/A 16+', duration: '10 Episodes',
    match: 97, language: 'Hindi',
    desc: 'Srikant Tiwari is a middle-class man who secretly works as an intelligence officer for a special cell of the National Investigation Agency.'
  },
  {
    id: 4, title: 'Delhi Crime', genre: 'Drama',
    year: 2019, rating: 'A', duration: '7 Episodes',
    match: 94, language: 'Hindi',
    desc: 'DCP Vartika Chaturvedi leads her team in the aftermath of the brutal 2012 Delhi gang rape case, chasing down suspects while facing intense public and government scrutiny.'
  },
  {
    id: 5, title: 'Scam 1992', genre: 'Drama',
    year: 2020, rating: 'U/A 16+', duration: '10 Episodes',
    match: 99, language: 'Hindi',
    desc: 'The story of Harshad Mehta, a stockbroker who single-handedly took the stock market to dizzying heights and his eventual downfall.'
  },
  {
    id: 6, title: 'Panchayat', genre: 'Comedy',
    year: 2020, rating: 'U/A 7+', duration: '8 Episodes',
    match: 95, language: 'Hindi',
    desc: 'An engineering graduate reluctantly accepts a job as secretary of a village panchayat in UP and experiences the charm of rural India.'
  },
  {
    id: 7, title: 'Kota Factory', genre: 'Drama',
    year: 2019, rating: 'U/A 13+', duration: '5 Episodes',
    match: 93, language: 'Hindi',
    desc: 'A 16-year-old boy moves to Kota to fulfil his dream of getting into IIT and faces the pressure of competitive exams while navigating new friendships.'
  },
  {
    id: 8, title: 'Jamtara', genre: 'Thriller',
    year: 2020, rating: 'U/A 16+', duration: '10 Episodes',
    match: 91, language: 'Hindi',
    desc: 'A small-town phishing empire is threatened by a corrupt politician who wants a cut of the action, and a cop who is determined to stop them all.'
  },
  {
    id: 9, title: 'Dark', genre: 'Sci-Fi',
    year: 2017, rating: 'U/A 16+', duration: '10 Episodes',
    match: 97, language: 'German',
    desc: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.'
  },
  {
    id: 10, title: 'Squid Game', genre: 'Thriller',
    year: 2021, rating: 'A', duration: '9 Episodes',
    match: 98, language: 'Korean',
    desc: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a lethal game is in motion with a deadly prize at stake.'
  },
  {
    id: 11, title: 'Money Heist', genre: 'Action',
    year: 2017, rating: 'U/A 16+', duration: '5 Seasons',
    match: 96, language: 'Spanish',
    desc: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history—to print billions of euros in the Royal Mint of Spain.'
  },
  {
    id: 12, title: 'Stranger Things', genre: 'Sci-Fi',
    year: 2016, rating: 'U/A 16+', duration: '4 Seasons',
    match: 97, language: 'English',
    desc: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.'
  },
  {
    id: 13, title: 'Breaking Bad', genre: 'Drama',
    year: 2008, rating: 'A', duration: '5 Seasons',
    match: 99, language: 'English',
    desc: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student.'
  },
  {
    id: 14, title: 'Ozark', genre: 'Thriller',
    year: 2017, rating: 'A', duration: '4 Seasons',
    match: 95, language: 'English',
    desc: 'A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.'
  },
  {
    id: 15, title: 'Peaky Blinders', genre: 'Drama',
    year: 2013, rating: 'A', duration: '6 Seasons',
    match: 96, language: 'English',
    desc: 'A gangster family epic set in 1919 Birmingham, England, and centred on a gang who sew razor blades in the peaks of their caps.'
  },
  {
    id: 16, title: 'Narcos', genre: 'Action',
    year: 2015, rating: 'A', duration: '3 Seasons',
    match: 95, language: 'English',
    desc: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.'
  },
  {
    id: 17, title: 'Black Mirror', genre: 'Sci-Fi',
    year: 2011, rating: 'A', duration: '6 Seasons',
    match: 92, language: 'English',
    desc: 'An anthology series exploring a twisted, high-tech multiverse where humanity\'s greatest innovations and darkest instincts collide.'
  },
  {
    id: 18, title: 'Aarya', genre: 'Action',
    year: 2020, rating: 'U/A 16+', duration: '8 Episodes',
    match: 90, language: 'Hindi',
    desc: 'When Aarya\'s world is shattered by tragedy, she must decide how far she\'ll go to protect herself and her family and find herself at war with her own kin.'
  },
  {
    id: 19, title: 'Breathe', genre: 'Thriller',
    year: 2018, rating: 'U/A 16+', duration: '8 Episodes',
    match: 89, language: 'Hindi',
    desc: 'A father will do anything to save his ailing son. An upright cop on the verge of breaking. Two lives are set on a collision course.'
  },
  {
    id: 20, title: 'Mindhunter', genre: 'Thriller',
    year: 2017, rating: 'A', duration: '2 Seasons',
    match: 96, language: 'English',
    desc: 'In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting into the minds of serial killers to solve crimes.'
  },
  {
    id: 21, title: 'The Witcher', genre: 'Action',
    year: 2019, rating: 'U/A 16+', duration: '3 Seasons',
    match: 91, language: 'English',
    desc: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.'
  },
  {
    id: 22, title: 'Euphoria', genre: 'Drama',
    year: 2019, rating: 'A', duration: '3 Seasons',
    match: 88, language: 'English',
    desc: 'A look at life for a group of high school students as they grapple with issues of drugs, sex, and violence.'
  },
  {
    id: 23, title: 'Succession', genre: 'Drama',
    year: 2018, rating: 'A', duration: '4 Seasons',
    match: 97, language: 'English',
    desc: 'The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps back from the company.'
  },
  {
    id: 24, title: 'The Crown', genre: 'Drama',
    year: 2016, rating: 'U/A 13+', duration: '6 Seasons',
    match: 90, language: 'English',
    desc: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.'
  }
];

// Utility: get color pair for index
function getColor(i) {
  return PALETTE[i % PALETTE.length];
}

// Filter shows by genre
function filterByGenre(genre) {
  if (genre === 'all') return SHOWS;
  if (genre === 'Hindi') return SHOWS.filter(s => s.language === 'Hindi');
  return SHOWS.filter(s => s.genre === genre);
}
