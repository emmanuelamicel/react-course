// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// Fonction reduce
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce

const cities = ["Tokyo", "Rio", "Helsinki", "Paris"];

const cities2 = cities.map(city => {
    if (city.length > 3) return city
});
console.log(cities2); // Rio est undefined

const cities3 = cities.filter(city => city.length > 3);
console.log(cities3); // Le tableau ne fait que 3

const result = cities.reduce((accumulator, currentValue) => {
    if (currentValue.length > 3) {
        accumulator.push(currentValue);
    }
    return accumulator
}, []); // Valeur initiale
console.log(result); // A le même effet que filter
