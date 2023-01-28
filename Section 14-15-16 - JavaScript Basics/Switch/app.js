const day = 4;

/* if (day === 1) {
    console.log("MONDAY");
} else if (day === 2) {
    console.log("THUESDAY");
} else if (day === 3) {
    console.log("WEDNESDAY");
} else if (day === 4) {
    console.log("THURSDAY");
} else if (day === 5) {
    console.log("FRIDAY");
} else {
    console.log("I DONT KNOW THAT");
} */

switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("THUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
    case 7:
        console.log("WEEKEND");
        break;
    default:
        console.log("I DONT KNOW THAT");
}