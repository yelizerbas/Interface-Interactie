// JavaScript Document
console.log("Howdy!");

const tubesList = document.querySelector('main ol');
const tubes = document.querySelectorAll('main ol li:not(:last-of-type) button');
const bag = document.querySelector('main ol li:last-of-type');

let hasSelected = false;

function tubeClick (e) {
    if (hasSelected == true) {
        return;
    }

    hasSelected = true;
    const listItem = e.currentTarget.parentElement;
    tubesList.classList.add('locked');
    listItem.classList.add('selected');
    bag.classList.add('fixed');
}

tubes.forEach(tube => {
    tube.addEventListener('click', tubeClick);
})