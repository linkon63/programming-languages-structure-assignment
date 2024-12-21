// Define an enumeration-like object for days of the week
const DaysOfWeek = {
    MONDAY: "Monday",
    TUESDAY: "Tuesday",
    WEDNESDAY: "Wednesday",
    THURSDAY: "Thursday",
    FRIDAY: "Friday",
    SATURDAY: "Saturday",
    SUNDAY: "Sunday"
};

// Accessing enum values
console.log(`First day of the workweek: ${DaysOfWeek.MONDAY}`);
console.log(`Last day of the week: ${DaysOfWeek.SUNDAY}`);

// Using the enum in a function
function isWeekend(day) {
    return day === DaysOfWeek.SATURDAY || day === DaysOfWeek.SUNDAY;
}

console.log(`Is Saturday a weekend? ${isWeekend(DaysOfWeek.SATURDAY)}`);
console.log(`Is Monday a weekend? ${isWeekend(DaysOfWeek.MONDAY)}`);
