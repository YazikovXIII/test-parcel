
const date = new Date();
console.log('Date: ', date);
console.log('getUTCDate(): ', date.getUTCDate());
console.log('getUTCDay(): ', date.getUTCDay());
console.log('getUTCMilliseconds(): ', date.getUTCMilliseconds());

let unix_timestamp = 1624021654154; // вхідне число Unix
let dateX = new Date(unix_timestamp); // перетворення числа Unix в об'єкт дати
console.log(dateX.toUTCString()); // виведення дати у форматі UTC
