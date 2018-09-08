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

let weaponOn = false;
var rifle = new Audio("./audio/Rifle.wav");
$(document).ready(function () {

    // pigs.classList.remove("hidden");

    // document.getElementsByTagName("body")[0].classList.remove("step0");
    // document.getElementsByTagName("body")[0].classList.add("step1");

    // document.getElementsByTagName("nav")[0].classList.add("hidden");

    // document.getElementsByClassName("logo")[0].classList.add("hidden");
    /*
    //////////////////////////////////////////////////////////
    TEMPORARY FORCE APP TO START ON TUTORIAL STEP1
    ////////////////////////////////////////////////////////
    */
    $('.pigs').removeClass('hidden');
    $('#appFrame').removeClass('step0');
    $('#appFrame').addClass('step1');
    $('nav').addClass('hidden');
    $('.logo').addClass('hidden');
    //////////////////////////////////////////////////

    $('#pig1').on('mouseenter', function () {
        $('.pigInfo').removeClass('hidden');
        $( ".pigInfo" ).append('<p id="t"></p>'  );
        console.log("t added");
        showPigStats();
    });

    $('#pig1').on('mouseout', function () {
      $('.pigInfo').addClass('hidden');
  
    $('#t').remove();
    console.log("t removed!");
 
    });



    function showPigStats() {

        // document.getElementsByClassName("pigInfo")[0].classList.remove("hidden");
        // document.getElementsByClassName("pigInfo")[0].innerHTML = "";
        // document.getElementsByClassName("locker")[0].classList.add("fade-in");

        $('#t').t(`
       Age: 7 months<br/>
       Weight:90kg <br/>
       Gender: female<br/>
       Health: healthy`);
    }


});


// pig1.onclick = function () {
//     if (weaponOn) {
//         console.log("bang!");
//         audio.pause();
//         rShot.play();
//         squeal1.play();
//         //flash

//         pig2.style.display="none";
//         pig3.style.display="none";
//         pig4.style.display="none";

//         window.setTimeout(endShow(), 2000);

//     } else {
//     document.getElementsByClassName("locker")[0].classList.remove("hidden");


//     // squeal.play();

// };
// }


// document.getElementById('tutorial').addEventListener("click", function () {
//     pigs.classList.remove("hidden");

//     document.getElementsByTagName("body")[0].classList.remove("step0");
//     document.getElementsByTagName("body")[0].classList.add("step1");

//     document.getElementsByTagName("nav")[0].classList.add("hidden");

//     document.getElementsByClassName("logo")[0].classList.add("hidden");

// });


// locker.onclick = function () {
//     console.log("locker clicked");
//     locker.style.border = "2px solid orange";
//     document.getElementsByClassName("tools")[0].classList.remove("hidden");
//     document.getElementsByClassName("tools")[0].classList.add("fade-in");
//     document.getElementsByClassName("tools")[0].innerHTML = `Rifle<br />
//     <br />
//     Stun Gun
//     <br /><br />
//     Bolt Gun`;

// };

// tools.onclick = function () {

//     document.getElementsByClassName("locker")[0].classList.add("hide");

//     document.getElementsByClassName("pigInfo")[0].classList.add("hide");
//     weaponOn = true;
//     rifle.play();
// }