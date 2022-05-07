// Assignment code here
var listLC="abcdefghijklmnopqrstuvwxyz";
var listUC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var listNum="123456789";

var listSC="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var generatePassword= function(){
  var passLength=0;
  while(passLength<8 || passLength>128){

    passLength=window.prompt("How long is your password?");
    if(passLength<8 || passLength>128){
      window.alert("Password must be between 8 and 128 characters! Please try again.")
    }

    }
    var charList=""
    while(charList==""){

    var lowerCase=confirm("Would you like to include lowerCase letters?");
    var upperCase=confirm("Would you like to include upper case letters?");
    var numbers=confirm("Would you like to include numbers?");
    var specialChar=confirm("Would you like to include special characters?");
    ;
    if(lowerCase){
      charList=charList+listLC;
    }
    if(upperCase){
      charList=charList+listUC;
    }
    if(numbers){
      charList=charList+listNum;
    }
    if(specialChar){
      charList=charList+listSC;
    }
    if(charList==""){
      window.alert("Please select at least one character type!");
    }
  };
var password="";
for(i=0;i<passLength;i++){
var position=Math.floor(Math.random()*charList.length);
var choice=charList.substring(position,position+1);
console.log(choice);
password=password+choice;

}
console.log(password.length);

return password;
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
