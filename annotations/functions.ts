// Inline annotation

const add = (a: number, b: number): number => {
  return a + b;
};

// This function expect (a, b) as number, and should return number

// Interface annotation

// Void - we're not returning anything in function
const subtract = (a: number, b: number) => {
  a - b;
};

// ES2015
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};
