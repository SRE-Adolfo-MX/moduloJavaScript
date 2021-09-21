
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]

/*
Obtener una lista de strings con el siguiente formato:

"La cancion {name} es de {banda}"

*/

const SongByBAnd = (arraySongs) => {
    let data;
    let songs = arraySongs.map((song, index) => {
        return `La cancion ${song.name} es de ${song.band}`
    })  
    return songs
}

console.log(SongByBAnd(songsData))


/*
crear una funcion que me permita Obtener las canciones que contengan un criterio de busqueda

criterio: cel

[
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    }
]
*/

const getSongsByBand = (arraySongs, criterio, string) => {
    let songs = arraySongs.filter((song, index) => song[criterio].toLowerCase().includes(string.toLowerCase()))
    return songs
}

console.log(getSongsByBand(songsData, "band", "ma"))

