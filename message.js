let closedEnv = document.getElementById("closed-env");
let readMe = document.getElementById("OpenRead");
let isEnvelopeOpen = false;
let letter = document.getElementById("letter")
let letterBG = document.getElementById("letterBackground")
let happyContainer = document.getElementById("happyContainer");
let holderImage = document.getElementById("holderImage")
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");


    document.getElementById("icon3").addEventListener("click", () => {
    window.location.href = "flower.html";
  });
    document.getElementById("icon2").addEventListener("click", () => {
    window.location.href = "music.html";
  });
    document.getElementById("icon1").addEventListener("click", () => {
    window.location.href = "message.html";
  });


closedEnv.addEventListener("click", function changeEnv() {
    if(isEnvelopeOpen == false) {
        closedEnv.src = "Images/Envelope(NewOpen).png";
        readMe.textContent = "READ ME";
        isEnvelopeOpen = true;
    }else{
        holderImage.style.display = "none";
        happyContainer.style.display = "none";
        readMe.style.display = "none";
        closedEnv.style.display = "none";
        console.log("Read the letter now");
        letter.style.display = "block";
        letterBG.style.display = "flex";


    }

})