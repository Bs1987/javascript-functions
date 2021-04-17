// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.


// Steps:

//  X Supply a an array to fill with high grades. (cumLaudeArray)
//  X run through array (for loop)
//  X find numbers higher or equal to 8 (conditional statement)
//  X save numbers in new array
//  X calculate amount of high grades (array.length)

let cumLaudeArray = [];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        const cumLaude = grades[i];
        cumLaudeArray.push(cumLaude);
    }
}
console.log(cumLaudeArray.length);


// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3
// console.log(cumLaude(grades));
// console.log(cumLaude([6, 4, 5]));
// console.log(cumLaude([8, 9, 4, 6, 10]));
function cumLaude(studentGrades) {
    let cumLaudeArray = [];
    for (let i = 0; i < studentGrades.length; i++) {
        if (studentGrades[i] >= 8) {
            const cumLaude = studentGrades[i];
            cumLaudeArray.push(cumLaude);
        }
    }
    return cumLaudeArray.length;
}

console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

//Steps:
//     X Calculate average: add all values and divide by amount of values
//     X Find length of array
//     X Make variable for length of array
//     X Collect all values
//     X Make variable with collected values from array
//     X Divide collected values by length of array
//     X Put outcome in variable

const amountOfGrades = grades.length;
console.log("AMOUNT OF GRADES IS: " + amountOfGrades);

let sumOfGrades = 0;
for (let i = 0; i < amountOfGrades; i++) {
    sumOfGrades = sumOfGrades + grades[i];
}
console.log("THE SUM OF ALL THE GRADES IS: " + sumOfGrades);
const gradeAverage = sumOfGrades / amountOfGrades;
console.log(gradeAverage);

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function averageGrade(studentGrades) {
    const amountOfGrades = studentGrades.length;
    console.log("AMOUNT OF GRADES IN FUNCTION IS: " + amountOfGrades);
    let sumOfGrades = 0;
    for (let i = 0; i < amountOfGrades; i++) {
        sumOfGrades = sumOfGrades + studentGrades[i];
    }
    console.log("THE SUM OF ALL THE GRADES IN FUNCTION IS: " + sumOfGrades);
    const gradeAverage = sumOfGrades / amountOfGrades;
    return gradeAverage.toFixed(2);
}

console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.
//
// Steps:
//     x Loop through array
//     x Design condition to check highest value in array
//     x Make new variable for highest array value
//     x Condition: Current value should be higher than previous value
//     x If current value is higher than previous value, save it in currentvalue variable
//     x If current value is not higher than previous value, go through loop again.
//     x Print highest number after loop is finished
let highestGrade = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGrade) {
        highestGrade = grades[i];
        console.log("HIGHEST GRADE IS: " + highestGrade);
    }
}

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
