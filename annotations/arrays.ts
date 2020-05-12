const carMakers = ['ford', 'ferrari', 'toyota'];

const anyArray = []; // empty array without any data

const dates = [new Date(), new Date()];

const arrayWithArrays: string[][] = [['string1'], ['string2']];

// Prevent incompatible values
// carMakers.push(100); // 100 number is not assignable to array with strings

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDate: (Date | string)[] = [];
importantDate.push(new Date()); // Date is okay
importantDate.push('2030-10-10'); // String is okay
// importantDate.push(100); // Number not okay

