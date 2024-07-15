// current date and time
let now= new Date();
console.log(now);


// Specified date and time(month start from 0)
let specifiedDate= new Date(2022, 0, 30, 1, 30, 0);
console.log(specifiedDate);


// Date string
let dateString = new Date("2024-07-15T10:30:00");
console.log(dateString);

// Timestamp (milliseconds since January 1, 1970)
let timestampDate = new Date(1000000000000);
console.log(timestampDate);

let date = new Date(2024, 6, 15, 10, 30, 0);

console.log(date.getFullYear()); // 2024
console.log(date.getMonth()); // 6 (July)
console.log(date.getDate()); // 15
console.log(date.getDay()); // 1 (Monday)
console.log(date.getHours()); // 10
console.log(date.getMinutes()); // 30
console.log(date.getSeconds()); // 0
console.log(date.getMilliseconds()); // 0
console.log(date.getTime()); // (timestamp)


date.setFullYear(2022);
date.setMonth(6); // July
date.setDate(15);

// Set hours, minutes, seconds, and milliseconds
date.setHours(10);
date.setMinutes(30);
date.setSeconds(0);
date.setMilliseconds(0);

console.log(date);


// Add 5 days
date.setDate(date.getDate() + 5);
console.log(date); // 2024-07-20

// Subtract 1 month
date.setMonth(date.getMonth() - 1);
console.log(date); // 2024-06-20

// Add 1 year
date.setFullYear(date.getFullYear() + 2);
console.log(date); // 2025-06-20