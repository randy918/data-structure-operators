'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  nameItalian: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  numGuests: 0,

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startermenu[starterIndex], this[(this.mainMenu, mainIndex)]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 2,
    time = '20:00',
    address = 'Nowhere',
  }) {
    console.log(`Order delivered to ${address} at ${time}`);
  },

  orderPasta: function ({
    pastaIngredientKind = 'macaroni',
    pastaIngredientFlavor = 'cheese',
    pastaIngredientSetting = 'paper plate',
  }) {
    console.log(
      `You ordered ${pastaIngredientKind} and ${pastaIngredientFlavor} on a ${pastaIngredientSetting}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    c(`you got ${mainIngredient} and ${otherIngredients}`);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  mainIndex: 2,
  starterIndex: 0,
});

restaurant.orderPasta({
  pastaIngredientKind: 'tortilini',
  pastaIngredientFlavor: 'extra cheese',
});

const { nameItalian, openingHours, categories } = restaurant;

console.log(nameItalian, openingHours, categories);

//!  10922.0938     mutating variables

let b = 999;
const obj = { a: 23, b: 6, c: 78 };

({ a, b } = obj);

//! . 10922.1111    restructuring nested objectToString

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const array = [7, 8, 9];
const newArray = [...array, 10, 11];

console.log(newArray);

const newOffering = [...restaurant.mainMenu, 'Slimers'];

console.log(newOffering);

const theMainMenu = [...restaurant.mainMenu];

console.log(theMainMenu);

const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(allMenu);

const theString = [...'The happy'];
console.log(theString);

const testSpreadOnObject = { ...restaurant, Discount: '15' };

console.log(testSpreadOnObject);

const [e, f, ...others] = [3, 4, 5, 6, 7, 8];
console.log(e, f, others);

const [pizza, , rizotta, ...more] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rizotta, more);

const { sat, thu, ...moreDays } = restaurant.openingHours;
console.log(sat, thu, moreDays);

//! . 10922.2008    functions

const addAllOfThem = (...numbers) => {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};
c(addAllOfThem(...[3, 4, 5, 6, 7]));

restaurant.orderPizza('flour', 'tobasco', 'green onion');

//!  10922.2110     short circuiting

console.log(undefined || null);

const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);
restaurant.orderPizza && restaurant;

//!  10922.2152     nullish coalesing operators

const guestCorrect1 = restaurant.numGuests || 10;
const guestCorrect2 = restaurant.numGuests ?? 10;
console.log(guestCorrect1);
console.log(guestCorrect2);

//!  10922.2207     logical assignment Operators

const rest1 = {
  name: 'capri',
  numGuests: 0,
};

const rest2 = {
  name: 'plaza',
  owner: 'bill',
};

rest1.numGuests ??= 7;
rest2.numGuests ??= 7;

console.log(rest1.numGuests);
console.log(rest2.numGuests);

rest1.owner &&= 'Anonymous';
rest2.owner &&= 'Anonymous';
console.log(rest1);
console.log(rest2);
