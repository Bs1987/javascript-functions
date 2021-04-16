// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

//Requirements
// expect an e-mailadress
// return domain name

//Steps:
//  X declare function expecting an e-mailadress
//  X find index of "@" and put into variable
//  X make variable domain
//  X domain is located at index number after "@"
//  X return every value after index number of "@" (so "@" +)
//  X log function with different arguments to test

function getEmailDomain(emailAdress) {
    const atIndexNumber = emailAdress.indexOf("@")
    const domain = emailAdress.substring(atIndexNumber + 1)
    return domain
}

console.log(getEmailDomain("n.eeken@novi-education.nl"))
console.log(getEmailDomain("t.mellink@novi.nl"))
console.log(getEmailDomain("a.wiersma@outlook.com"))


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

// Requirements:
// - Expect an email-adress
// - Check type of domain
// - Give values to different domain types
// - Return values of domain types
// - Test different domain types

// Steps
//  X Declare a function typeOfEmail
//  X Recall function getEmailDomain to find the domain of an email-adress
//  X give values to domain types:
//     - novi-education.nl = "Student"
//     - novi.nl = "Medewerker"
//     - other = "Extern"
// X Look for values in function arguments
// X return values

function typeOfEmail(emailAdress) {
    if (getEmailDomain(emailAdress) === "novi-education.nl") {
        return "Student";
    }
    if (getEmailDomain(emailAdress) === "novi.nl") {
        return "Medewerker";
    } else {
        return "Extern"
    }
}

console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("a.wiersma@outlook.com"));


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

// Requirements
// Ask email-adress
// Make requirements for email-adress:
//     - has to include an "@"
//     - does not have ","
//     - does not have "." at the end
// Return true or false

//Steps:
// X Declare function
// X Set parameters
// X Set requirements for email-adress
// X Check if arguments fit requirements
// X Return true or false

function checkEmailValidity(emailAdress) {
    const includesAt = emailAdress.includes("@");
    const noComma = emailAdress.includes(",");
    const indexLastCharacter = emailAdress.length;
    const lastCharacter = emailAdress.substring(indexLastCharacter - 1);
    const noPeriodLastCharacter = lastCharacter.includes(".")
    if (includesAt === true && noComma === false && noPeriodLastCharacter === false) {
        return true
    } else {
        return false
    }
}

console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi.nl"));
console.log(checkEmailValidity("n.eekenanovi.nl"));
console.log(checkEmailValidity("n.eeken@novinl."));
console.log(checkEmailValidity("tessmellink@novi,nl"));