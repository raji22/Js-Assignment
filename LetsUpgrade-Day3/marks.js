//Take the marks from the user

var marks =Number(prompt("Enter the marks"));

// if((marks>=80) & (marks<100))
// {
//     console.log("Marks are " + marks +" and grade is A");
// }
   
// else if((marks>=50) & (marks<80))
// {
//     console.log("Marks are " + marks +" and grade is B");
// }
   
// else
// {
//     console.log("Marks are " + marks +" and grade is C");
// }
    


//switch 

switch(true)
{
    case ((marks>=80) && (marks<=100)): 
        console.log("Marks are " + marks +" and grade is A");
        break;
    case ((marks>=50) && (marks<80)):   
        console.log("Marks are " + marks +" and grade is B");
        break;
    case ((marks>=40) && (marks<50)):   
        console.log("Marks are " + marks +" and grade is C");
        break;
    case ((marks>=20) && (marks<40)):  
        console.log("Marks are " + marks +" and grade is D");
        break;
    default:
        console.log("Marks are not valid")
    
}