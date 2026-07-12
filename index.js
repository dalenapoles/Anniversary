let rightPassword = "iloveyouqessymwua"

let passwordInput = document.getElementById("password");
let enterButton = document.getElementById("enter");
let errorMsg = document.getElementById("error-msg");


enterButton.addEventListener("click", function passChecker () {

    let typePass = passwordInput.value;
    

    if(typePass == ""){
        errorMsg.textContent = "The field is Empty"
        console.log("The field is Empty");
    }
    else if(typePass == rightPassword  ){
       window.location.href = "message.html"
        console.log("Correct Password")
    }
   else {
         errorMsg.textContent = "Code is Incorrect"
        console.log("Code is Incorrect")
    }
})




passwordInput.addEventListener("input", function () {
    errorMsg.textContent = "";
   
});

passwordInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevents default actions like submitting a form
    console.log('Enter key was pressed!');
    
    let typePass = passwordInput.value;
    

    if(typePass == ""){
        errorMsg.textContent = "The field is Empty"
        console.log("The field is Empty");
    }
    else if(typePass == rightPassword  ){
       window.location.href = "player.html"
        console.log("Correct Password")
    }
   else {
         errorMsg.textContent = "Code is Incorrect"
        console.log("Code is Incorrect")
    }
  }
})