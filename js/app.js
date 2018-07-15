var pig1 = document.getElementById('pig1');
var pig2 = document.getElementById('pig2');
var pig3 = document.getElementById('pig3');
var pig4 = document.getElementById('pig4');
var pigs = document.getElementById('pigs');
var tools = document.getElementById('tools');
var locker = document.getElementById('locker1');

var audio = new Audio("./audio/scottHappy.mp3");
var rShot = new Audio("./audio/RifleShot.wav");
var squeal1 = new Audio("./audio/PigSqueal.wav");

window.onload=function(){    audio.play();};
var rifle = new Audio("./audio/Rifle.wav");
let weaponOn = false;
pig1.onclick = function () {
    if (weaponOn) {
        console.log("bang!");
        audio.pause();
        rShot.play();
        squeal1.play();
        //flash
   
        pig2.style.display="none";
        pig3.style.display="none";
        pig4.style.display="none";

        window.setTimeout(endShow(), 2000);

    } else {
    document.getElementsByClassName("locker")[0].classList.remove("hidden");
    document.getElementsByClassName("pigInfo")[0].classList.remove("hidden");
    document.getElementsByClassName("pigInfo")[0].innerHTML = "";
    document.getElementsByClassName("locker")[0].classList.add("fade-in");
    document.getElementsByClassName("pigInfo")[0].innerHTML = `Age: 7 months
   Weight:90kg
   Gender: female 
   Health: healthy`;
    }

    // squeal.play();

};


pig2.onclick = function () {
    if (weaponOn) {
        console.log("bang!");
        console.log("bang!");
        audio.pause();
        rShot.play();
        squeal1.play();
        //flash
   
        pig1.style.display="none";
        pig3.style.display="none";
        pig4.style.display="none";

    } else {
    document.getElementsByClassName("locker")[0].classList.remove("hidden");
    document.getElementsByClassName("locker")[0].classList.add("fade-in");
    document.getElementsByClassName("pigInfo")[0].classList.remove("hidden");
    document.getElementsByClassName("pigInfo")[0].innerHTML = "";
    document.getElementsByClassName("pigInfo")[0].innerHTML =
        `Age: 11 months
    Weight:80kg
    Gender: Male 
    Health: healthy`;}
};

pig3.onclick = function () {

    if (weaponOn) {
        console.log("bang!");
        audio.pause();
        rShot.play();
        squeal1.play();
        //flash
   
        pig2.style.display="none";
        pig1.style.display="none";
        pig4.style.display="none";
        console.log("bang!");
    
    } else {
    document.getElementsByClassName("locker")[0].classList.remove("hidden");
    document.getElementsByClassName("locker")[0].classList.add("fade-in");
    document.getElementsByClassName("pigInfo")[0].classList.remove("hidden");
    document.getElementsByClassName("pigInfo")[0].innerHTML = "";
    document.getElementsByClassName("pigInfo")[0].innerHTML =
        `Age: 10 months
    Weight:84kg
    Gender: Male 
    Health: healthy`;}
};


pig4.onclick = function () {
    if (weaponOn) {
        console.log("bang!");
        audio.pause();
        rShot.play();
        squeal1.play();
        //flash
   
        pig2.style.display="none";
        pig3.style.display="none";
        pig1.style.display="none";
        console.log("bang!");

    } else {
        document.getElementsByClassName("locker")[0].classList.remove("hidden");
        document.getElementsByClassName("locker")[0].classList.add("fade-in");

        document.getElementsByClassName("pigInfo")[0].classList.remove("hidden");
        document.getElementsByClassName("pigInfo")[0].innerHTML = "";

        document.getElementsByClassName("pigInfo")[0].innerHTML =
            `Age: 9 months
    Weight:120kg
    Gender: female 
    Health: healthy`;
    }
};
document.getElementById('tutorial').addEventListener("click", function () {
    pigs.classList.remove("hidden");

    document.getElementsByTagName("body")[0].classList.remove("step0");
    document.getElementsByTagName("body")[0].classList.add("step1");

    document.getElementsByTagName("nav")[0].classList.add("hidden");

    document.getElementsByClassName("logo")[0].classList.add("hidden");

});


locker.onclick = function () {
    console.log("locker clicked");
    locker.style.border = "2px solid orange";
    document.getElementsByClassName("tools")[0].classList.remove("hidden");
    document.getElementsByClassName("tools")[0].classList.add("fade-in");
    document.getElementsByClassName("tools")[0].innerHTML = `Rifle<br />
    <br />
    Stun Gun
    <br /><br />
    Bolt Gun`;
    
};

tools.onclick = function () {

    document.getElementsByClassName("locker")[0].classList.add("hide");

    document.getElementsByClassName("pigInfo")[0].classList.add("hide");
    weaponOn = true;
    rifle.play();
}

function endShow(){

    document.getElementsByTagName("body")[0].classList.remove("step1");
    document.getElementsByTagName("body")[0].classList.add("step2");
    document.getElementsByClassName("tools")[0].classList.add("hidden");
    document.getElementsByClassName("pig1")[0].classList.add("hidden");
    
}