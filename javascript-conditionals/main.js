/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

const lewis = {
  name: 'Lewis Smith',
  age: 22,
};

const isUnderFive = (num) => {
  if (num === 5 || num < 5) {
    return true;
  } else {
    return false;
  }
};

console.log(isUnderFive(2));
console.log(isUnderFive(8));
console.log(isUnderFive(lewis));

const startsWithJ = (st) => {
  if (st.startsWith('J')) {
    return true;
  } else {
    return false;
  }
};

console.log(startsWithJ('JASON'));
console.log(startsWithJ('dASON'));

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(22));

const isOldEnoughToDrink = (name) => {
  if (name < 21) {
    return false;
  } else if (name === 21 || name > 21) {
    return true;
  }
};

// console.log(isOldEnoughToDrink(lewis))
console.log(isOldEnoughToDrink('4'));

const isOldEnoughToDrive = (name) => {
  if (name < 16) {
    return false;
  } else if (name === 16 || name > 16) {
    return true;
  }
};

console.log(isOldEnoughToDrive(lewis.age));

const isOldEnoughToDrinkAndDrive = (name, age) => {
  if (name) {
    return false;
  }
  if (age) {
    return false;
  }
};

console.log(isOldEnoughToDrinkAndDrive(lewis));

const categorizeAcidity = (pH) => {
  if (pH < 7) {
    return 'aciidic';
  }
  if (pH === 7) {
    return 'nuetral';
  }
  if (pH > 7 && pH < 14) {
    return 'basic';
  } else {
    return 'Invalid pH level';
  }
};

console.log(categorizeAcidity(131));

const introduceWarnerBro = (name) => {
  if (name === 'yakko' || name === 'waako') {
    return "We're the warner brothers!";
  }
  if (name === 'dot') {
    return "I'm cute";
  }
};

console.log(introduceWarnerBro('yakko'));
console.log(introduceWarnerBro('dot'));

const recommendMovie = (genre) => {
  if (genre === 'action') {
    const actionMovies = [
      'Die Hard',
      'Mad Max: Fury Road',
      'The Dark Knight',
      'John Wick',
      'Lethal Weapon',
      'Mission: Impossible - Fallout',
      'The Avengers',
      'Terminator 2: Judgment Day',
      'The Matrix',
      'Inception',
      'Avatar',
      'Gladiator',
      'The Bourne Identity',
      'Taken',
      'Fast & Furious',
      'Die Hard with a Vengeance',
      'Kill Bill: Vol. 1',
      'Rambo: First Blood',
      'The Expendables',
      'Predator',
      'The Terminator',
      'Die Hard 2',
      'Braveheart',
      'Crank',
      'Casino Royale',
      'The Rock',
      'Face/Off',
      'Iron Man',
      'The Raid: Redemption',
      'Kick-Ass',
      'Con Air',
      'Speed',
      'The A-Team',
      'Point Break',
      'Escape from New York',
      'Total Recall',
      'The Equalizer',
      'Taken',
      'RoboCop',
      'Man of Steel',
      'Salt',
      '300',
      'The Transporter',
      'The Dark Knight Rises',
      'Raiders of the Lost Ark',
      'Kingsman: The Secret Service',
      'True Lies',
      'Blade',
      'Mad Max 2: The Road Warrior',
    ];

    return actionMovies[Math.floor(Math.random() * actionMovies.length)];
  }

  if (genre === 'comedy') {
    const comedyMovies = [
      'Anchorman: The Legend of Ron Burgundy',
      'Superbad',
      'The Hangover',
      'Dumb and Dumber',
      'Bridesmaids',
      'Step Brothers',
      "Ferris Bueller's Day Off",
      'The Grand Budapest Hotel',
      'Mean Girls',
      'Pineapple Express',
      'Shaun of the Dead',
      'Napoleon Dynamite',
      'The 40-Year-Old Virgin',
      'Wedding Crashers',
      'Elf',
      'Hot Fuzz',
      'Airplane!',
      'Austin Powers: International Man of Mystery',
      'The Big Lebowski',
      'Zoolander',
      'Ted',
      'Tropic Thunder',
      'Old School',
      'Pitch Perfect',
      'Dodgeball: A True Underdog Story',
      'Annie Hall',
      'Caddyshack',
      'The Princess Bride',
      'Ghostbusters',
      'Coming to America',
      'Nacho Libre',
      'The Pink Panther',
      'Clueless',
      "Ferris Bueller's Day Off",
      'The Naked Gun: From the Files of Police Squad!',
      "Wayne's World",
      'Dazed and Confused',
      'Office Space',
      'Happy Gilmore',
      'The Devil Wears Prada',
      'Bruce Almighty',
      'Meet the Parents',
      'Neighbors',
      'Borat',
      "There's Something About Mary",
      'Four Weddings and a Funeral',
      'The Producers',
      'Trading Places',
      'Juno',
      'Rushmore',
    ];

    return comedyMovies[Math.floor(Math.random() * comedyMovies.length)];
  }

  if (genre === 'horror') {
    const horrorMovies = [
      'The Shining',
      'Halloween',
      'A Nightmare on Elm Street',
      'The Exorcist',
      'Psycho',
      'Get Out',
      'Hereditary',
      'It',
      'The Conjuring',
      'Saw',
      'Paranormal Activity',
      'The Babadook',
      'Texas Chainsaw Massacre',
      'The Silence of the Lambs',
      'Insidious',
      'The Ring',
      'Cabin in the Woods',
      'Poltergeist',
      'Sinister',
      'A Quiet Place',
      "Rosemary's Baby",
      'Us',
      'Annabelle',
      'The Witch',
      'Evil Dead',
      'The Blair Witch Project',
      "Don't Breathe",
      'The Descent',
      'The Omen',
      'Crimson Peak',
      'Night of the Living Dead',
      'The Others',
      'It Follows',
      'The Sixth Sense',
      '28 Days Later',
      'Midsommar',
      'The Grudge',
      'The Cabin in the Woods',
      'Insidious',
      'The Haunting',
      'Hellraiser',
      'Drag Me to Hell',
      'The Purge',
      'The Nun',
      'The Conjuring 2',
      'Oculus',
      'Lights Out',
      'The Orphanage',
      'Pet Sematary',
      'The Woman in Black',
      'The Visit',
    ];

    return horrorMovies[Math.floor(Math.random() * horrorMovies.length)];
  }

  if (genre === 'drama') {
    const dramaMovies = [
      'The Shawshank Redemption',
      'Forrest Gump',
      'The Godfather',
      "Schindler's List",
      'Fight Club',
      'Pulp Fiction',
      'American Beauty',
      'Good Will Hunting',
      'The Green Mile',
      'A Beautiful Mind',
      'The Social Network',
      'The Pursuit of Happyness',
      'Requiem for a Dream',
      'Eternal Sunshine of the Spotless Mind',
      '12 Angry Men',
      'The Departed',
      'No Country for Old Men',
      'The Wolf of Wall Street',
      'Gladiator',
      'Braveheart',
      'Atonement',
      'The Help',
      'Manchester by the Sea',
      'Spotlight',
      'Million Dollar Baby',
      'Dead Poets Society',
      'Rain Man',
      'American History X',
      'La La Land',
      "The King's Speech",
      'Whiplash',
      'The Theory of Everything',
      'Black Swan',
      'Gone Girl',
      'Moonlight',
      'Room',
      'There Will Be Blood',
      'Dallas Buyers Club',
      'The Imitation Game',
      "Boys Don't Cry",
      'Fences',
      'The Pianist',
      'Scent of a Woman',
      'Mystic River',
      'A Star Is Born',
      'Little Women',
      'Ordinary People',
      'Shakespeare in Love',
      'The Bridges of Madison County',
    ];

    return dramaMovies[Math.floor(Math.random() * dramaMovies.length)];
  }

  if (genre === 'musical') {
    const musicalMovies = [
      'The Shawshank Redemption',
      'Forrest Gump',
      'The Godfather',
      "Schindler's List",
      'Fight Club',
      'Pulp Fiction',
      'American Beauty',
      'Good Will Hunting',
      'The Green Mile',
      'A Beautiful Mind',
      'The Social Network',
      'The Pursuit of Happyness',
      'Requiem for a Dream',
      'Eternal Sunshine of the Spotless Mind',
      '12 Angry Men',
      'The Departed',
      'No Country for Old Men',
      'The Wolf of Wall Street',
      'Gladiator',
      'Braveheart',
      'Atonement',
      'The Help',
      'Manchester by the Sea',
      'Spotlight',
      'Million Dollar Baby',
      'Dead Poets Society',
      'Rain Man',
      'American History X',
      'La La Land',
      "The King's Speech",
      'Whiplash',
      'The Theory of Everything',
      'Black Swan',
      'Gone Girl',
      'Moonlight',
      'Room',
      'There Will Be Blood',
      'Dallas Buyers Club',
      'The Imitation Game',
      "Boys Don't Cry",
      'Fences',
      'The Pianist',
      'Scent of a Woman',
      'Mystic River',
      'A Star Is Born',
      'Little Women',
      'Ordinary People',
      'Shakespeare in Love',
      'The Bridges of Madison County',
    ];

    return musicalMovies[Math.floor(Math.random() * musicalMovies.length)];
  }
  if (genre === 'sci-fi' || genre === 'sciFi') {
    const sciFi = [
      'Blade Runner',
      'The Matrix',
      'Inception',
      'Interstellar',
      'Star Wars: Episode IV - A New Hope',
      'The Terminator',
      'Alien',
      'The Fifth Element',
      'E.T. the Extra-Terrestrial',
      '2001: A Space Odyssey',
      'Jurassic Park',
      'The War of the Worlds',
      'The Day the Earth Stood Still',
      'The Martian',
      'Avatar',
      'Arrival',
      'District 9',
      'The Hunger Games',
      'The Empire Strikes Back',
      'Back to the Future',
      'Guardians of the Galaxy',
      'The Matrix Reloaded',
      'Minority Report',
      'Blade Runner 2049',
      "The Hitchhiker's Guide to the Galaxy",
      'War for the Planet of the Apes',
      'Looper',
      'The Truman Show',
      'A.I. Artificial Intelligence',
      'Children of Men',
      'The Maze Runner',
      'Edge of Tomorrow',
      'Snowpiercer',
      'The Giver',
      'I Am Legend',
      'Prometheus',
      'Pacific Rim',
      'Moon',
      'Starship Troopers',
      'Sunshine',
      'The Adjustment Bureau',
      'The Island',
      'Equilibrium',
      'A Scanner Darkly',
      'Stargate',
      'Her',
      'The Time Machine',
      'Contact',
      'The Prestige',
      'Total Recall',
    ];

    return sciFi[Math.floor(Math.random() * sciFi.length)];
  }
};

console.log(recommendMovie('sciFi'));
console.log(recommendMovie('horror'));
