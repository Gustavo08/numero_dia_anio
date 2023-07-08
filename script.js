/*
    Función para obtener el número del dia del año, dado una fecha
    con el siguiente formato: mes/dia/año
*/

const isLeapYear = y => y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;

const daysInAYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function dayOfYear ( date ) {
    const d = new Date(date);
    const daysGiven = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();

    if ( isLeapYear(year) && month > 1) {
        return daysInAYear.slice(0, month).reduce( (a, c) => a + c, 0) + 1 + daysGiven;
    } else {
        return daysInAYear.slice(0, month).reduce( (a, c) => a + 1, 0) + daysGiven;
    }
}

let response = dayOfYear("12/23/2020");
console.log("🚀 ~ file: script.js:24 ~ response:", response)
