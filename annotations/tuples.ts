const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Implement tuple

// Solution 1
const pepsi1: [string, number, boolean] = ['brown', 40, true];

// Solution 2
type Drink = [string, number, boolean];

const pepsi2: Drink = ['brown', 40, true];
