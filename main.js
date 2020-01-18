//Switch

//It must be used, when you have single condition to check for multiple values.
let days = 12; //2;
let message;

switch (days) {
    case 1:
        message = "Sun";
        break;
    case 2:
        message = "Mon";
    //break;
    case 3:
        message = "Tue";
        //break;    //Commenting break, even when the condition was satisfied at Case 2, it still executes other lines 
    case 4:
        message = "Wed";
        break;
    case 5:
        message = "Thu";
        break;
    case 6:
        message = "Fri";
        break;
    case 7:
        message = "Sat";
        break;

    default:
        message = "Days must be between 1 to 7 only."; //When the data has irrelevant values in it. It displays default
        break;
}

console.log(message);