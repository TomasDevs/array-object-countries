console.log(`=================== Array part ===================`);
const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

// Check if the country exists
const checkCountry = (country, countries) => {
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return;
  }

  const include = countries.includes(country);
  const index = countries.indexOf(country);

  const find = `Zadaná krajina ${country} se nachází v seznamu krajin na indexu ${index}`;
  const notFind = `Zadaná krajina ${country} se nenachází v seznamu krajin.`;

  include ? console.log(find) : console.log(notFind);
};

console.log(`=================== First part ===================`);

checkCountry("Germany", countries);
checkCountry("Japan", countries);
checkCountry(1000, countries);

// Add the country if it doesn't exist
const addCountry = (country, countries) => {
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return;
  }

  const include = countries.includes(country);
  const index = countries.indexOf(country);
  const newIndex = countries.length;
  const count = countries.length + 1;

  const find = `Zadaná krajina ${country} se nachází v seznamu krajin na indexu ${index}.`;
  const notFind = `Zadaná krajina ${country} byla úspěšně přidána do seznamu krajin na indexu ${newIndex}. Celkový počet krajin v seznamu je ${count}.`;

  include ? console.log(find) : (countries.push(country), console.log(notFind));
};

console.log(`=================== Second part ===================`);

addCountry("Vietnam", countries);
addCountry("Mexico", countries);
addCountry("Poland", countries);
addCountry("", countries);

// Remove the country if it exists
const removeCountry = (country, countries) => {
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return;
  }

  const include = countries.includes(country);
  const index = countries.indexOf(country);

  if (include) {
    countries.splice(index, 1);
    const count = countries.length;
    console.log(
      `Zadaná krajina ${country} byla odstraněna ze seznamu krajin na indexu ${index}. Aktuální počet krajin v seznamu je ${count}.`
    );
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu.`);
  }
};

console.log(`=================== Third part ===================`);

removeCountry("", countries);
removeCountry("Vietnam", countries);
removeCountry("Laos", countries);
removeCountry("Thailand", countries);
