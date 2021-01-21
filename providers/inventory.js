import uuid from 'uuid/v4'

let inventory = [
  { categories: ['menu'], name: 'Paket Komplit', price: '30000', image: '../images/products/couch1.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 4 },
    { categories: ['menu', 'like'], name: 'Burger Cheese', price: '14000', image: '../images/products/couch5.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja' , currentInventory: 2 },
  { categories: ['menu', 'favorit'], name: 'Burger Double Egg', price: '16000', image: '../images/products/couch6.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂 .', brand: 'Alaraja', currentInventory: 8 },
  { categories: ['menu', 'favorit'], name: 'Big Burger', price: '20000', image: '../images/products/couch7.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.' , brand: 'Alaraja', currentInventory: 10},
  { categories: ['menu', 'favorit'], name: 'Burger Double Meet', price: '25000', image: '../images/products/couch8.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja' , currentInventory: 7 },
  { categories: ['menu', 'favorit'], name: 'Burger Original', price: '12000', image: '../images/products/couch9.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.' , brand: 'Alaraja', currentInventory: 13},
  { categories: ['menu', 'favorit'], name: 'Burger Egg', price: '15000', image: '../images/products/couch10.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.' , brand: 'Alaraja', currentInventory: 9},
  { categories: ['menu', 'like'], name: 'French Fries', price: '7000', image: '../images/products/couch11.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 24 },

  { categories: ['menu'], name: 'Galaxy Blue Sofa', price: '8000', image: '../images/products/couch2.png', description: 'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.', brand: 'Jason Bourne', currentInventory: 43 },
  { categories: ['menu', 'favorit'], name: 'Markus Green Love Seat', price: '9000', image: '../images/products/couch3.png', description: 'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.', brand: 'Jason Bourne' , currentInventory: 2},
  { categories: ['menu', 'favorit'], name: 'Dabit Matte Black', price: '12000', image: '../images/products/couch4.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', currentInventory: 14 },

  { categories: ['menu', 'like'], name: 'Embrace Blue', price: '3000', image: '../images/products/chair1.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.' , brand: 'Jason Bourne', currentInventory: 12 },
  { categories: ['menu', 'like'], name: 'Nord Lounger', price: '18000', image: '../images/products/chair2.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.' , brand: 'Jason Bourne', currentInventory: 13},
  { categories: ['menu', 'like'], name: 'Ceni Matte Oranve', price: '17000', image: '../images/products/chair3.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.' , brand: 'Jason Bourne', currentInventory: 33},
  { categories: ['menu', 'like'], name: 'Abisko Green Recliner', price: '20000', image: '../images/products/chair4.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 23 },
  { categories: ['menu', 'like'], name: 'Denim on Denim Single', price: '11000', image: '../images/products/chair5.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.' , brand: 'Jason Bourne', currentInventory: 13},
  { categories: ['menu', 'like'], name: 'Levo Tan Lounge Chair', price: '6000', image: '../images/products/chair6.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 15 },

  { categories: ['menu', 'like'], name: 'Anime Tint Recliner', price: '18000', image: '../images/products/chair7.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 44 },
  { categories: ['menu', 'like'], name: 'Josh Jones Red Chair', price: '12000', image: '../images/products/chair8.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 17 },
  { categories: ['menu', 'like'], name: 'Black Sand Lounge', price: '16000', image: '../images/products/chair9.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 28 },
  { categories: ['menu', 'like'], name: 'Mint Beige Workchair', price: '5000', image: '../images/products/chair10.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 31 }, 
  { categories: ['about us'], name: 'Galaxy Blue Sofa', price: '8000', image: '../images/products/couch2.png', description: 'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.', brand: 'Jason Bourne', currentInventory: 43 },  // { 
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory
