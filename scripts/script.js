// JavaScript Document
console.log('Howdy!');



// alle variabelen
const tubesList = document.querySelector('main ol');
const tubes = document.querySelectorAll('main ol li:not(:last-of-type) button.buis');
const bag = document.querySelector('main ol li:last-of-type');
let hasSelected = false;


const redOpenButton = document.querySelector("main ol li:first-of-type button.buis");
// const redCloseButton = document.querySelector("main ol li:nth-of-type(1) dialog > button");
const redDialog = document.querySelector("main ol li:nth-of-type(1) dialog");

const yellowOpenButton = document.querySelector("main ol li:nth-of-type(2) button.buis");
const yellowCloseButton = document.querySelector("main ol li:nth-of-type(2) dialog > button");
const yellowDialog = document.querySelector("main ol li:nth-of-type(2) dialog");

const orangeOpenButton = document.querySelector("main ol li:nth-of-type(3) button.buis");
const orangeCloseButton = document.querySelector("main ol li:nth-of-type(3) dialog > button");
const orangeDialog = document.querySelector("main ol li:nth-of-type(3) dialog");

const blueOpenButton = document.querySelector("main ol li:nth-of-type(4) button.buis");
const blueCloseButton = document.querySelector("main ol li:nth-of-type(4) dialog > button");
const blueDialog = document.querySelector("main ol li:nth-of-type(4) dialog");

const greenOpenButton = document.querySelector("main ol li:nth-of-type(5) button.buis");
const greenCloseButton = document.querySelector("main ol li:nth-of-type(5) dialog > button");
const greenDialog = document.querySelector("main ol li:nth-of-type(5) dialog");

const brownOpenButton = document.querySelector("main ol li:nth-of-type(6) button.buis");
const brownCloseButton = document.querySelector("main ol li:nth-of-type(6) dialog > button");
const brownDialog = document.querySelector("main ol li:nth-of-type(6) dialog");

const purpleOpenButton = document.querySelector("main ol li:nth-of-type(7) button.buis");
const purpleCloseButton = document.querySelector("main ol li:nth-of-type(7) dialog > button");
const purpleDialog = document.querySelector("main ol li:nth-of-type(7) dialog");

// function zakje op zelfde plek laten staan
function tubeClick (e) {
    if (hasSelected == true) {
        return;
    }

    hasSelected = true;
    const listItem = e.currentTarget.parentElement;
    const fallingImage = listItem.querySelector('img');
    tubesList.classList.add('locked');
    listItem.classList.add('selected');
    bag.classList.add('fixed');
    fallingImage.classList.add('fall');
}

tubes.forEach(tube => {
    tube.addEventListener('click', tubeClick);
})


// function achtergrond oranje m&ms maken
// https://www.youtube.com/watch?v=E6J2fosujWQ
const logoButton = document.querySelector('body header img');

function play(){
    const audio = document.createElement("audio");
    audio.src = "assets/bankzitters-fart.mp3";
    audio.play();
}

logoButton.addEventListener('dblclick', () => {
document.body.style.backgroundImage = "url('images/MMs-buis-oranje.svg')";

play();
});



// https://www.aspsnippets.com/Articles/Open-jQuery-UI-Dialog-Modal-Popup-after-some-delay.aspx
// setTimeout (function openRedDialog()  {
//     redDialog.showModal();
// }, 3100);

// function openRedDialog()  {
//     redDialog.showModal();
// }

function openRedDialog() {
    setTimeout(() => {
    redDialog.showModal()
    }, 3000);
}

function openYellowDialog() {
    setTimeout(() => {
    yellowDialog.showModal()
    }, 3000);
}

function openOrangeDialog() {
    setTimeout(() => {
    orangeDialog.showModal()
    }, 3000);
}


function openBlueDialog() {
    setTimeout(() => {
    blueDialog.showModal()
    }, 3000);
}

function openGreenDialog() {
    setTimeout(() => {
    greenDialog.showModal()
    }, 3000);
}

function openBrownDialog() {
    setTimeout(() => {
    brownDialog.showModal()
    }, 3000);
}

function openPurpleDialog() {
    setTimeout(() => {
    prupleDialog.showModal()
    }, 3000);
}



// function closeRedDialog() {
//     redDialog.close();
//     window.location.reload()
// }

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



redOpenButton.addEventListener("click", openRedDialog);
// redCloseButton.addEventListener("click", closeRedDialog);

yellowOpenButton.addEventListener("click", openYellowDialog);
yellowCloseButton.addEventListener("click", closeYellowDialog);

orangeOpenButton.addEventListener("click", openOrangeDialog);
orangeCloseButton.addEventListener("click", closeOrangeDialog);

blueOpenButton.addEventListener("click", openBlueDialog);
blueCloseButton.addEventListener("click", closeBlueDialog);

greenOpenButton.addEventListener("click", openGreenDialog);
greenCloseButton.addEventListener("click", closeGreenDialog);

brownOpenButton.addEventListener("click", openBrownDialog);
brownCloseButton.addEventListener("click", closeBrownDialog);

purpleOpenButton.addEventListener("click", openPurpleDialog);
purpleCloseButton.addEventListener("click", closePurpleDialog);
