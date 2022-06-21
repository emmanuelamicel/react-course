// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// var, let, const
const array = ["chat", "chien", "lapin"];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log(i); // Retourne 6. var est function scoped

for (var j = 0; j < array.length; j++) {
    console.log(array[j]);
}

console.log(j); // Retourne une erreur. let est block scoped

// const array = 6; // Retroune une erreur. const n'est pas ré-affectable.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// arrow function
// function add(x, y) {
//     return x + y;
// }

// Une arrow fucnction conserve toujours le contexte de départ (this)
const add = (x, y) => x + y; // Retourne bien l'addition de x et y

// Si j'ai un seul paramètre, on peut enlever les parenthèses
const square = x => x * x;

// Si je veux faire un return implicite, il faut ajouter des parenthèses :
const cube = x => ({ resultat: x ** 3 });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// ";" : rester cohérent, on peut choisir d'en mettre nulle part ou partout

// Le seul cas où c'est nécessaire, c'est pour les fonctions IIFE
console.log(add(2, 3));
(function () {
    console.log("Fonction invoquée immédiatement")
})() // Cette fonction est normalement immédiatement lancée à l'exécution. Si on lance maintenant, il va penser que le console.log() précédent est une fonction.
// Il faut mettre un ; après le console.log()
// https://developer.mozilla.org/fr/docs/Glossaire/IIFE#:~:text=IIFE%20(Immediately%20Invoked%20Function%20Expression,d%C3%A8s%20qu'elle%20est%20d%C3%A9finie.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// Déstructuration

const jon = {
    id: 51,
    name: "Jon",
    age: 33,
    address: {
        city: "Winterfell"
    }, // C'est possible de mettre une virgule en plus depuis l'ES6
}

// Méthode longue :
// const name = jon.name;
// const city = jon.address.city;
// const id = jon.id;

const { name, id, address: { city }, age = 24 } = jon;
console.log(name, id, city, age); // L'âge retourné est celui de l'objet jon

// Si on souhaite extraire une propriété et la renommer à la volée, on le fait comme suivant :
const { name: firstname } = jon;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// Template literal

console.log(`Hello ${name} !`); // Le caractère "`" s'appelle le Backtick

// Spécifier un paramètre par défaut
const sayHello = (name = "my lord") => {
    console.log(`Hello ${name} !`);
}

sayHello("Emmanuel");
sayHello();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// Dynamic Object key

const dynamicKey = "surname";
const friend = {
    name: "Mathieu",
    [dynamicKey]: "Matt", // Là, la clé est forcément une chaine de caractère et peut être définie dynamiquement en amont.
    address: {
        city: "Paris"
    }
}

console.log(friend);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// Spread operator

// Attention : ne copie que des adresses mémoire
const secondFriend = {
    ...friend // Ca va itérer à travers friend et copier chaque clé-valeur dans l'objet.
}

console.log(secondFriend);
secondFriend.address.city = "Lyon";
console.log(friend); // Ici, la city de friend va aussi être changée. Si on veut éviter que ça soit changé, on peut faire une modification dans la définition de secondFriend.

// const secondFriend = {
//     ...friend,
//     address: {...friend.address} // Evite que l'adresse soit modifiée pour friend et secondFriend lorsqu'on cherche à modifier le paramètre de secondFriend uniquement.
// }

const thirdFreidn = JSON.parse(JSON.stringify(friend)); // Transforme l'objet directement en JSON.

// Permet l'écriture de plusieurs paramètres dans une seule fonction
const log = (...params) => console.log(params);
log(1, 2, 3, 4);

const log2 = (first, ...rest) => { // Marche avec autant de premiers paramètres que l'on souhaite.
    console.log(`Mon premier paramètre : ${first}`);
    console.log(rest);
}
log2(100, 2, 3, 4);
