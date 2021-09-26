let mentorArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature:  "HTML",
                score: 9
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 8
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    }
]



const printTable = () => {
    let headersTable = ["Nombre", "HTML", "CSS", "JS","Promedio","Button"]
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let headerRow = document.createElement("tr")

    headersTable.forEach(title => {
        let headTd = document.createElement("td")
        let textHead = document.createTextNode(title)
        headTd.appendChild(textHead)
        headerRow.appendChild(headTd)
    })
    thead.appendChild(headerRow)
    table.appendChild(thead)
    

    let tbody = document.createElement("tbody")


    mentorArray.forEach(mentor => {

        let Scores = mentor.scores
        let scoreHTML;
        let scoreCSS;
        let scoreJS;
        
        Scores.forEach(score => {
            
            if (score.signature === "HTML"){
                scoreHTML = score.score;
            }

            if (score.signature === "CSS"){
                scoreCSS = score.score;
            }

            if (score.signature === "JS"){
                scoreJS = score.score;
            }

        })

        let PromMentor = Math.round((scoreHTML+scoreCSS+scoreJS)/mentor.scores.length);
        let btn = document.createElement("BUTTON"); 
        let scoreHTMLcolor;
        let color;
        
        scoreJS <= 9 
        ? colorJS = "#FF0000"
        : colorJS ="";

        PromMentor <= 9 
        ? colorPROM = "#FF0000"
        : colorPROM ="";

        
        if (scoreHTML <= 8){
            colorHTML = "#FF0000"
        } else if (scoreHTML === 9){
            colorHTML = "#FFFF00"
        } else {
            colorHTML = "";
        } 

        if (scoreCSS <= 8){
            colorCSS = "#FF0000"
        } else if (scoreCSS === 9){
            colorCSS = "#FFFF00"
        } else {
            colorCSS = "";
        }

        if (scoreJS <= 8){
            colorJS = "#FF0000"
        } else if (scoreJS === 9){
            colorJS = "#FFFF00"
        } else {
            colorJS = "";
        }


        if (PromMentor <= 8){
            colorPROM = "#FF0000"
        } else if (PromMentor === 9){
            colorPROM = "#FFFF00"
        } else {
            colorPROM = "";
        }

        tbody.innerHTML += `
        
        <tr>
            <td>${mentor.name}</td>
            <td style="background:${colorHTML}">${scoreHTML}</td>
            <td style="background:${colorCSS}">${scoreCSS}</td>
            <td style="background:${colorJS}">${scoreJS}</td>
            <td style="background:${colorPROM}">${PromMentor}</td>
            <td><input type="button" value="Button" /></td>
        </tr>
    `

    })
    table.appendChild(tbody)

    document.body.appendChild(table)

}

console.log(printTable())