console.log('Howdy!');

///////////////////////////////////
///////////////////////////////////
//////////alle constanten//////////
///////////////////////////////////
///////////////////////////////////
const tubesList = document.querySelector('main ol');
const tubes = document.querySelectorAll('main ol li:not(:last-of-type) button.buis');
const bag = document.querySelector('main ol li:last-of-type');
let hasSelected = false;


const redCloseButton = document.querySelector("main ol li:nth-of-type(1) dialog button");
const redDialog = document.querySelector("main ol li:nth-of-type(1) dialog");

const yellowCloseButton = document.querySelector("main ol li:nth-of-type(2) dialog button");
const yellowDialog = document.querySelector("main ol li:nth-of-type(2) dialog");

const orangeCloseButton = document.querySelector("main ol li:nth-of-type(3) dialog button");
const orangeDialog = document.querySelector("main ol li:nth-of-type(3) dialog");

const blueCloseButton = document.querySelector("main ol li:nth-of-type(4) dialog button");
const blueDialog = document.querySelector("main ol li:nth-of-type(4) dialog");

const greenCloseButton = document.querySelector("main ol li:nth-of-type(5) dialog button");
const greenDialog = document.querySelector("main ol li:nth-of-type(5) dialog");

const brownCloseButton = document.querySelector("main ol li:nth-of-type(6) dialog button");
const brownDialog = document.querySelector("main ol li:nth-of-type(6) dialog");

const purpleCloseButton = document.querySelector("main ol li:nth-of-type(7) dialog button");
const purpleDialog = document.querySelector("main ol li:nth-of-type(7) dialog");



const logoButton = document.querySelector('body header img');









///////////////////////////////////
///////////////////////////////////
//////functie zak laten staan//////
///////////////////////////////////
///////////////////////////////////
function tubeClick (e) {
    // als bruis als is geklikt dan stopt de functie
    if (hasSelected == true) {
        return;
    }

    hasSelected = true;
    const listItem = e.currentTarget.parentElement;
    const fallingImage = listItem.querySelector('img');
    const dialog = listItem.querySelector('dialog');

    // lock de buizen om dubbel klikken te voorkomen
    tubesList.classList.add('locked');
    listItem.classList.add('selected');
    bag.classList.add('fixed');
    // m&m's vallen
    fallingImage.classList.add('fall');

    // als de m&m's gevallen zijn dialog openen
    fallingImage.addEventListener("animationend", () => {
        dialog.showModal();

        // en alles weer resetten
        // dan hoeft de pagina niet herladen te worden als de dialog sluit
        hasSelected = false;
        tubesList.classList.remove('locked');
        listItem.classList.remove('selected');
        bag.classList.remove('fixed');
        fallingImage.classList.remove('fall');
    });

}

// alle tubes krijgen de functie, maar het werkt alleen op de gene die je klikt
tubes.forEach(tube => {
    tube.addEventListener('click', tubeClick);
})











///////////////////////////////////
///////////////////////////////////
////functie oranje achtergrond/////
///////////////////////////////////
///////////////////////////////////
// https://www.youtube.com/watch?v=E6J2fosujWQ
function play(){
    const audio = document.createElement("audio");
    audio.src = "assets/bankzitters-fart.mp3";
    audio.play();
}

logoButton.addEventListener('dblclick', () => {
    document.body.style.backgroundImage = "url('images/MMs-buis-oranje.svg')";
    play();
});










///////////////////////////////////
///////////////////////////////////
///////functie sluiten dialog//////
///////////////////////////////////
///////////////////////////////////
// Herladen pagina anders hoor je de video nog op de achtergrond afspelen
function closeRedDialog() {
    redDialog.close();
    window.location.reload()
}

function closeYellowDialog() {
    yellowDialog.close();
    window.location.reload()
}

function closeOrangeDialog() {
    orangeDialog.close();
    window.location.reload()
}

function closeBlueDialog() {
    blueDialog.close();
    window.location.reload()
}

function closeGreenDialog() {
    greenDialog.close();
    window.location.reload()
}

function closeBrownDialog() {
    brownDialog.close();
    window.location.reload()
}

function closePurpleDialog() {
    purpleDialog.close();
    window.location.reload()
}

// alle eventlisteners sluiten dialog
redCloseButton.addEventListener("click", closeRedDialog);

yellowCloseButton.addEventListener("click", closeYellowDialog);

orangeCloseButton.addEventListener("click", closeOrangeDialog);

blueCloseButton.addEventListener("click", closeBlueDialog);

greenCloseButton.addEventListener("click", closeGreenDialog);

brownCloseButton.addEventListener("click", closeBrownDialog);

purpleCloseButton.addEventListener("click", closePurpleDialog);