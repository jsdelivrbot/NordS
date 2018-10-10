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

var pigGender = "Gild";
var pigAge = "8 months";
let allPigs = [pig1, pig2, pig3, pig4];

let weaponOn = false;
var rifle = new Audio("./audio/Rifle.wav");
$(document).ready(function () {
    console.log(allPigs.length);
    /*
        //////////////////////////////////////////////////////////
    COMMENT OUT TO FORCE APP TO START ON slaughtermode
        ////////////////////////////////////////////////////////
        */
    $('#tutorial').click(function () {

    $('.pigs').removeClass('hidden');
    $('#appFrame').removeClass('step0');
    $('#appFrame').addClass('step1');
    $('nav').addClass('hidden');
    $('nav').addClass('hidden');
    $('.logo').addClass('hidden');

    setTimeout(function () {
        $('.instruction').addClass('fade-in');
        $('.instruction').removeClass('hidden');

    }, 1000);
    

    });
    //////////////////////////////////////////////////

    $('#pig0').on('mouseenter', function () {

        $('.pigInfo').removeClass('hidden');
        $(".pigInfo").append('<p id="t"></p>');
        console.log("t added");
        showPigStats(0);
    });

    $('#pig1').on('mouseenter', function () {

        $('.pigInfo').removeClass('hidden');
        $(".pigInfo").append('<p id="t"></p>');
        console.log("t added");
        showPigStats(1);
    });

    $('#pig2').on('mouseenter', function () {

        $('.pigInfo').removeClass('hidden');
        $(".pigInfo").append('<p id="t"></p>');
        console.log("t added");
        showPigStats(2);
    });


    $('#pig3').on('mouseenter', function () {

        $('.pigInfo').removeClass('hidden');
        $(".pigInfo").append('<p id="t"></p>');
        console.log("t added");
        showPigStats(3);
    });

    $('.pig').on('mouseout', function () {
        $('.pigInfo').addClass('hidden');

        $('#t').remove();
        console.log("t removed!");

    });



    function showPigStats(whichPig) {
        $('.instruction').addClass('hide');

        switch (whichPig) {
            case 0:
                $('#t').t(`
                Age: 7 months<br/>
                Weight:90kg <br/>
                Gender: female<br/>
                Health: anxious`);
                break;



            case 1:
                $('#t').t(`
                Age: 8 months<br/>
                Weight: 70kg <br/>
                Gender: male<br/>
                Health: healthy`);
                break;

            case 2:
                $('#t').t(`
                Age: 11 months<br/>
                Weight: 80kg <br/>
                Gender: female<br/>
                Health: frightened`);
                break;

            case 3:
                $('#t').t(`
                 Age: 6 months<br/>
                 Weight: 90kg <br/>
                 Gender: male<br/>
                 Health: healthy`);
                break;
        }

        setTimeout(function () {
            $('.instruction').text('drag your selection to Workstation 2');

            $('.instruction').addClass('show');

        }, 3000);
    }



    $(function () {
        $(".draggable").draggable({
            axis: "x",
            delay: 100,
            scrollSpeed: 10,
            revert: false
        });
    });

    $("#processing").droppable({
        drop: function () {
            //  alert("dropped");
            var thisPig = ($(event.target).attr("id"));

            var pigId = thisPig.slice(3);
            console.log(pigId);
            allPigs.splice(pigId, 1);

            console.log(allPigs.length, thisPig);
            confirmSelection();
        }
    });

    function confirmSelection() {
        $('.confirmation-panel').removeClass('hidden');
        console.log("confirmation panel should be visible")
        $('.panel-message').html(`good choice! <br/> 
You have selected a medium sized ${pigGender}, ${pigAge}, suitable for slaughter.<br />
Continue?`);


        $('.confirmy').click(function () {


            startSlaughtermode();
            $(event.target).removeClass('fade-out');
            $('.confirmation-panel').addClass('fade-out');

        });

        $('.confirmn').click(function () {
            //  $(function () {
            //it would be nice if selected pig returned to original position...

            // $(".draggable").draggable({
            //     revert: true
            // }); 
            //});



            $('.confirmation-panel').addClass('fade-out');
        });



    }


    function startSlaughtermode() {

        //     fade-out other pigs

        $('.instruction').removeClass('hidden');
        $('.instruction').css({
            "top": "-8%"
        });
        $('.instruction').html('Select a weapon');
        $('#pig1').addClass('fade-out');
        $('confirmation-panel').addClass('fade-out');
        $('#pig2').addClass('fade-out');
        $('#pig3').addClass('fade-out');
        $('#pig0').addClass('fade-out');
        $('nav').addClass('hidden');
        $('.logo').addClass('hidden');


        console.log("starting slaughter mode");
        $('.slaughterView').removeClass1('hidden');
        var $nigiri = $('.nigiri');
        $nigiri.makisu({
            selector: 'dd',
            overlap: 0.85,
            speed: 1.7
        });

        $('.list').makisu('open');

        $('#bolt').click(function () {
            weaponChosen(bolt)
        });
        $('#stun').click(function () {
            weaponChosen(stun)
        });
        $('#shot').click(function () {
            weaponChosen(shot)
        });

    }


    //     center and zoom selected pig

    //     good choice!
    //     or 
    //     This pig is small. It is not an economical choice. We recommend that you choose a larger animal. Continue anyway? y/n
    //     or
    //     This pig is a little big for your first slaughter. A bigger animal has more fatty tissue and may be a greater challenge.
    //     This could get messy. Continue?


    //     Step 1: A Humane kill:

    //     Tie (gender) hind legs together, as rapidly as possible. Hook the rope to the pully.
    //         pully hoist red button. If user pushes the button, the pig is hoisted screaming and thrashing.
    //         lower the pig immediately! 5 second timer if lowered:
    //         A conscious pig should never be hoisted.
    //         Stun or kill the animal, first.

    //      Select stungun shotgut or boltgun

    //     Aim at the forehead to shoot the brain.
    //     if (killshot){
    //     Good job!
    //     Now hoist and we'll get a nice bleed.

    //     hoist swinnging pig. high enough so that (gender) front legs are just off the ground.

    //     Niiiiccceeee....

    //     stickThePig();

    // if(shotgun || boltgun)    Disrgard the spasms: these are common. The pig is effectively unconscious. 
    //     stickThePig();

    // if(stungun){}
    //     }
    //     else{

    //         bad shot. try again.
    //         5 bad shots.
    //         Sorry, you have failed. 
    //     }



























    $('.pig-portrait1').click(function () {
        if (weaponOn) {
            console.log("bang");
            $('.instruction').html('');
            $('.pig-portrait2').addClass('fade-out');
            setTimeout(function () {
                $('.slaughterView').addClass('hidden');
                $('.bleedView').removeClass('hidden');
                $('.instruction').html('Now bleed the pig.');
                             hoistPig();
            }, 1000);


        }
        else{
            console.log("select weapon")
        }
    });


});

function weaponChosen(weapon) {
    $('.list').makisu('close');
    setTimeout(function () {
        $('.list').addClass('fade-out');


    }, 1000);
    $('.instruction').html('Aim at the forehead to shoot the brain.');
    weaponOn = true;
    console.log('weapon ready');
}


function hoistPig (){
    console.log('pig hoisting...');
}