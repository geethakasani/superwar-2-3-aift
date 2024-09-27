const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  'Popcorn',
  'Gemwoman',
  'Bolt',
  'Antwoman',
  'Mask',
  'Tiger',
  'Captain',
  'Catwoman',
  'Fish',
  'Hulk',
  'Ninja',
  'Black Cat',
  'Volverine',
  'Thor',
  'Slayer',
  'Vader',
  'Slingo',
];
// Images of super Villains is Provided to you
const IMAGE_URLS = [
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-1.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-10.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-11.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-12.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-13.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-14.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-15.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-16.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-17.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-18.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-19.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-2.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-20.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-3.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-4.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-6.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-5.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-7.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-8.png',
  'https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/super-9.png',
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = players.map((players, i) => {
    return {
      name: players,
      strength: getRandomStrength(),
      image: IMAGE_URLS[i],
      type: i % 2 == 0 ? 'hero' : 'villain',
    };
  });
  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

// Build player template
const buildPlayers = (players, type) => {
  // Instead of using for loop
  // Use chaining of Array methods - filter, map and join
  // Type your code here
  let fragment = players
    .filter((players) => players.type == type)
    .map(
      (players) =>
        `<div class="player">
      <img src="${players.image}" alt="">
      <div class="name">${players.name}</div>
      <div class="strength">${players.strength}</div>
      </div>`
    )
    .join();
  return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
  document.getElementById('villains').innerHTML = buildPlayers(
    players,
    'villain'
  );
};
