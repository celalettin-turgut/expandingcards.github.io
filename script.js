'use strict';

//
const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');

//We define a function that removes all the active class from the cards through loop
const removeActiveClasses = () => {
    cards.forEach(card=>{
        card.classList.remove('active');
    })
};

//We define for each card a click event listener, whenever we click one of them, then we remove
//the active class and then we add to clicked item active class again
cards.forEach(card => {
	card.addEventListener('click', event => {
        removeActiveClasses();
        card.classList.add('active');
    });
});

//Below is the another way for doing the same thing...
// //function that defines the expanding
// const expand = event => {
//     event.preventDefault();
//     //event target ist the element we click inside the container class
//     const item = event.target;

//     //we add the class .active to the clicked element so that it expands
//     item.classList.add('active');

//     //We prevent the other element from expanding by removing the .active class
//         for (let i = 0; i < cards.length; i++){
//         if(cards[i]===item) continue;
//         cards[i].classList.remove('active');
//     }

// };

// //we add event listener to the container that triggers the card to expand
// container.addEventListener('click', expand);