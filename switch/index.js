let month = "2";
let month_out = ""
switch (month) {
    case "1":
        month_out = "January";
        break;
    case "2":
        month_out = "February";
        break;
    case "3":
        month_out = "March";
        break;
    case "4":
        month_out = "April";
        break;
    case "5":
        month_out = "May";
        break;
    case "6":
        month_out = "June";
        break;
    case "7":
        month_out = "July";
        break;
    case "8":
        month_out = "August";
        break;
    case "9":
        month_out = "September";
        break;
    case "10":
        month_out = "October";
        break;
    case "11":
        month_out = "November";
        break;
    case "12":
        month_out = "December";
        break;
    
    default:
        month_out = "Wrong Input";
  }

  console.log("Name of Month is "+month_out)