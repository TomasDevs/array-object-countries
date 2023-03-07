console.log(`=================== Object part ===================`);
const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];
const populationTotal = 8000000000;

// Percentage calculation
const percentageOfPopulation = (population, totalPopulation) => {
  const percent = parseFloat(((population / totalPopulation) * 100).toFixed(2));
  return percent;
};

// Check percentage population
console.log(percentageOfPopulation(1439323776, populationTotal));

// Check array list
console.log(countriesPopulation);

// Copy array and sorting form smallest to largest
const copyCountries = countriesPopulation.slice();
copyCountries.sort((a, b) => a.population - b.population);

// Creating a new object property
copyCountries.forEach((el) => {
  const index = copyCountries.indexOf(el);
  el.id = el.country.slice(0, 3) + index;
  const percent = percentageOfPopulation(el.population, populationTotal);
  el.percentage = percent;
});

// Check new array list
console.log(copyCountries);

// Copy new array from copyCountries
const newCopyCountries = copyCountries.slice();

// Filter for the new array
const filterCountries = newCopyCountries.filter(
  (el) =>
    el.country.length > 4 &&
    el.country.length <= 8 &&
    el.percentage > 1.5 &&
    el.percentage < 10
);

// Check new filter array list
console.log(filterCountries);
