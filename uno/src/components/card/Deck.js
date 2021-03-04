import React from 'react';
// import ReactCardFlip from "react-card-flip";

export var deck = new Array();

var color = ["red", "yellow", "green", "blue"];
var values_1 = ["0", "Wild", "Wild Draw Four"];      //appears once per color
var values_2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Skip", "Draw Two", "Reverse"]; //appears twice per color

class Card {
  constructor(color, value) {
    this.color = color;
    this.value = value;

    // this.compare = function() {
    //   return; 
    // }
  }
}

function setup() {
  for (let i = 0; i < color.length; i++) {
    for (let j = 0; j < values_2.length; j++) {
      let card = new Card(color[i], values_2[j]);
      let card_2 = new Card(color[i], values_2[j]);

      deck.push(card);
      deck.push(card_2);
    }
  }

  for (let i = 0; i < color.length; i++) {
    for (let j = 0; j < values_1.length; j++) {
      let card = new Card(color[i], values_1[j]);
      deck.push(card);
    }
  }
}

export function shuffle(deck) {
  /* swap every card in random locations 1000 times. might not be optimal, but should be okay for now */
  for (let i = 0; i < 1000; i++) {
    var location1 = Math.floor((Math.random() * deck.length));
    var location2 = Math.floor((Math.random() * deck.length));
    var temp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = temp;
  }
}

export function getDeck() {
  return deck;
}

export function draw() {
  let temp = deck.pop();
  return temp;
}

// function renderDeck(deck)
// /* iterate through each card object in the deck Array and create the DOM elements using the createElement function */
// {
//       document.getElementById("deck").innerHTML = "";

// 	for (let i = 0; i < deck.length; i++)
// 	{
// 		let card = document.createElement("div");
// 		let value = document.createElement("div");
// 		let color = document.createElement("div");
// 		card.className = "card";
// 		value.className = "value";
// 		color.className = "color " + deck[i].Color;

// 		value.innerHTML = deck[i].Value;
// 		card.appendChild(value);
// 		card.appendChild(color);

// 		document.getElementById("deck").appendChild(card);
// 	}
// }

const Deck = () => {

  console.log("RUN");
  setup();

  return (
    <p>BUG</p>
  );
};



// const Deck = ({ id, isFlipped, handleClick, cardNumber }) => (

//   <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1} >
//     <button id={id} className={`card card-front ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="front">

//     </button>

//     <button id={id} className={`card card-back ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="back">
//       { cardNumber }
//     </button>
//   </ReactCardFlip>
// );
export default Deck;