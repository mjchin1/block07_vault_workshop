//Pseudocode:
//1. Create a string containing the pop-up message. 
//2. Declare three variables. 
//3. For each variable, create an equation that returns a value equal to one of the combination numbers (10, 40 and 39). Use different operators for each equation. 
//4. Display a pop-up message that logs both the string and the values returned by each variable equation. 

//define a variable that represents the written text 
let comboMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
//define a variable that contains the equation for the first combination number 
let num1 = 20/2; 
//define a variable that contains the equation for the second combination number 
let num2 = 30 + 10;
//define a variable that contains the equation for the third combination number 
let num3 = 45 - 6;

//create an alert message that concatenates the text and the values of each variable equation 
alert(comboMessage + " " + num1 + "-"+ num2 + "-" + num3);