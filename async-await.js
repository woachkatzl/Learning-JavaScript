// trasform a function using then chaining into and async function with await

// the given function
function getMainActorProfileFromMovie(id) {
    return fetch(`https://swapi.dev/api/films/${id}/`)
        .then((movieResponse) => {
            return movieResponse.json()
        })
        .then((movie) => {
            const characterUrl = movie.characters[0].split("//")[1]
            return fetch(`https://${characterUrl}`)
        })
        .then((characterResponse) => {
            return characterResponse.json()
        })
        .catch((err) => {
            console.error("Произошла ошибка!", err)
        })
}

// transformation result
async function asyncGetMainActorProfileFromMovie(id) {

    try {
        const movieResponse = await fetch(`https://swapi.dev/api/films/${id}/`);
        const movie = await movieResponse.json();

        const characterUrl = movie.characters[0].split("//")[1];
        const characterResponse = await fetch(`https://${characterUrl}`);
        const character = await characterResponse.json();

        return character;
    }
    catch (err) {
        console.error('Произошла ошибка!', err);
    }
}