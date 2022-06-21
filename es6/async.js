// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// .then, async et await

const users = [
    {
        id: 0,
        name: 'Fabio'
    },
    {
        id: 1,
        name: 'Max'
    },
    {
        id: 2,
        name: 'William'
    },
]

const getUsers = new Promise((resolve, reject) => { setTimeout(() => resolve(users), 1000) }); // Attend une seconde avant de s'exécuter

// Version .then()
function getFirstUsername() {
    return getUsers.then(users => {
        console.log(".then : ");
        console.log(users);
        return users[0].name;
    })
        .catch(e => e);
}
console.log(getFirstUsername());

// Version async/await
async function getFirstUsernameAsync() { // Penser à préciser async devant la fonction pour lui expliquer qu'elle peut utiliser le mot-clé await
    try {
        const users = await getUsers;
        console.log("async await : ");
        console.log(users); // S'affichera au bout d'une seconde
        return users[0].name;
    } catch (e) {
        throw new Error("Errur sur la récupération du firstname", e);
    }
}
console.log(getFirstUsernameAsync());
