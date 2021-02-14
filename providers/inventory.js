import uuid from 'uuid/v4'

let inventory = [
  { categories: ['menu'], name: 'Paket Komplit', price: '30000', image: '../images/products/couch1.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 4 },
    { categories: ['menu', 'Burger Station'], name: 'Burger Cheese', price: '14000', image: '../images/products/couch5.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja' , currentInventory: 2 },
  { categories: ['menu', 'Burger Station'], name: 'Burger Double Egg', price: '16000', image: '../images/products/couch6.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂 .', brand: 'Alaraja', currentInventory: 8 },
  { categories: ['menu', 'Burger Station'], name: 'Big Burger', price: '20000', image: '../images/products/couch7.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.' , brand: 'Alaraja', currentInventory: 10},
  { categories: ['menu', 'Burger Station'], name: 'Burger Double Meet', price: '25000', image: '../images/products/couch8.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja' , currentInventory: 7 },
  { categories: ['menu', 'Burger Station'], name: 'Burger Original', price: '12000', image: '../images/products/couch9.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.' , brand: 'Alaraja', currentInventory: 13},
  { categories: ['menu', 'Burger Station'], name: 'Burger Egg', price: '15000', image: '../images/products/couch10.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.' , brand: 'Alaraja', currentInventory: 9},
  { categories: ['menu', 'Burger Station'], name: 'French Fries', price: '7000', image: '../images/products/couch11.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 24 },

  { categories: ['menu'], name: 'Donuts 12 Flavours', price: '8000', image: '../images/products/couch2.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 43 },
  { categories: ['menu', 'Donuts Station'], name: 'Donuts 24 Flavours', price: '9000', image: '../images/products/couch3.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 2},
  { categories: ['menu', 'Donuts Station'], name: 'Donuts 32 Flavours', price: '12000', image: '../images/products/couch4.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 14 },

  { categories: ['menu', 'Drinks Station'], name: 'Coffee Oringinals', price: '3000', image: '../images/products/chair1.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 12 },
  { categories: ['menu', 'Drinks Station'], name: 'Coffee Cappucino Cream', price: '18000', image: '../images/products/chair2.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 13},
  { categories: ['menu', 'Drinks Station'], name: 'Coffee Mochacino Latte', price: '17000', image: '../images/products/chair3.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 33},
  { categories: ['menu', 'Drinks Station'], name: 'Coffee Caramel Latte', price: '20000', image: '../images/products/chair4.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 23 },
  { categories: ['menu', 'Drinks Station'], name: 'Coffee Cream Less Sugar', price: '11000', image: '../images/products/chair5.png', description:  'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 13},
  { categories: ['menu', 'Drinks Station'], name: 'Chocolate Hot Cream', price: '6000', image: '../images/products/chair6.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 15 },

  { categories: ['menu', 'Jajan Market Station'], name: 'Cake Wet Package (20)', price: '18000', image: '../images/products/chair7.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 44 },
  { categories: ['menu', 'Jajan Market Station'], name: 'Cake Lapis 1 Box🤣', price: '12000', image: '../images/products/chair8.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 17 },
  { categories: ['menu', 'Jajan Market Station'], name: 'Lemper Chicken 🤣 Package (10)', price: '16000', image: '../images/products/chair9.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 28 },
  { categories: ['menu', 'Jajan Market Station'], name: 'Pastel Package (10)', price: '5000', image: '../images/products/chair10.png', description: 'Ena Ena Imut Imut sing masak burger dan Web + Mobile Developer e ayu guys😂😂🤣🤣😘 ( Coming Soon Alaraja Food Store App ) Stay Tune 😂💪💪😉😝😂.', brand: 'Alaraja', currentInventory: 31 },  // { 
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory
