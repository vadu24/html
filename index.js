console.log("Hi all");
 let hour = 1;
if(hour>=4&&hour<12){
    console.log("Good morning");
}
else if(hour>=12&&hour<18){
    console.log("Good day");
}
else {
        console.log("Good night");
    }



switch(new Date().getDay()){
    case 0:
        day="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        
}

console.log(day)