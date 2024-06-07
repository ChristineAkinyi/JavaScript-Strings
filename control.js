const personAge = (age) => {
    if (age >=18){
        return "You are an adult";
    }  else if (age >=13 && age< 18){
        return "You are a teenager";
    }   else {
        return "You are a child";
    }     

}
console.log(personAge(10));

// switch is used when you are sure about what you want to check and works best when you have one condition

const greeting = (dayOfTheWeek)=> {
    switch(dayOfTheWeek){
        case "Monday":
        console.log("Hello Monday");
        break;

        case "Tuesday":
            console.log("Hello Tuesday");
            break;
            
        case "Wednesday":
                console.log("Hello Wednesday");
                break;
        case "Thursday":
            console.log("Hello Thursday");
            break;
        case "Friday":
            console.log("Hello Friday");
            break;
        case "Saturday":
            console.log("Hello Saturday");
            break;
        case "Sunday":
            console.log("Hello Sunday");
            break;
        default:
            console.log("Not the days of the week");
    }
};
greeting("Tuesday");
greeting("When");

