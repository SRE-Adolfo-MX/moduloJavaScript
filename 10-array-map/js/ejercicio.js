/*
Ejercicio:
*/

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
- Agrupar el nombres de la bandas, que no esten repetidas
*/

console.log("*******EJERCICIO1*************")

let nombresBanda = (songsData) =>{

    let numsBands = songsData.length;    
    let listBands = [];
    let i;
    for (i=0;i<numsBands;i++){
        if(!listBands.includes(songsData[i].band)){
            listBands.push(songsData[i].band)
        }
    }
        return listBands;
}

console.log(nombresBanda(songsData));

/*
- Agrupar las canciones por banda
*/

console.log("*******EJERCICIO2*************")
let bandSongs1
let bandSongs = []
let songsBand = songsData.forEach((song, item) => {
    
    let band = song.band;
    let songs = song.name;
    let listBands = [];
    if(!listBands.includes(band)){
        listBands.push(band)
    }
    bandSongs1 = {
            listBands
        }
    console.log(bandSongs1)
})



/*
- La cancion con más reproducciones
*/

console.log("*******EJERCICIO3*************")
let max=0;
let reproductions = songsData.filter((song, item) => {
    let arreglo = [];
    arreglo = song.statistics.reproductions
    if (arreglo > max){
        max = arreglo;
    }
})
console.log(reproductions)

let songReproduction = (songsData, max) =>{

    let reproduction = max;
    let numsBands = songsData.length;    
    let i;
    for (i=0;i<numsBands;i++){
        let rep = songsData[i].statistics.reproductions
        let song = songsData[i].name
        if(rep === reproduction){

            return `La cancion con mayor reproduccion es ${song} con ${reproduction} reproducciones`
        }
    }
  
}

console.log(songReproduction(songsData, max))

/*
- La cancion con más likes
*/

console.log("*******EJERCICIO4*************")
let maxlike=0;
let likes = songsData.filter((song, item) => {
    let arreglo = [];
    arreglo = song.statistics.likes
    if (arreglo > maxlike){
        maxlike = arreglo;
    }
})
console.log(likes)

let songLikes = (songsData, maxlike) =>{

    let likes = maxlike;
    let numsBands = songsData.length;    
    let i;
    for (i=0;i<numsBands;i++){
        let rep = songsData[i].statistics.likes
        let song = songsData[i].name
        if(rep === likes){

            return `La cancion con mayor likes es ${song} con ${likes} likes`
        }
    }
  
}

console.log(songLikes(songsData, maxlike))