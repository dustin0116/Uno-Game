/* Reference to better understand the code: https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript */
var color = ["red", "yellow", "green", "blue"];
var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Skip", "Draw Two", "Reverse"];

function getDeck() {
    var deck = new Array();
    var card;
    
    for (let i = 0; i < color.length; i++) { //every value 2 times in each color
        for (let i = 0; i < (values.length * 2); i++) { 
        card = {Value: values[i], Color: color[i]};
        deck.push(card);
        }
    }

    for (let i = 0; i < color.length; i++) {
        card = {Value: "Wild", Color: color[i]};    //create one of these for each color
        card.push(card);
        card = {Value: "Wild Draw Four", Color: color[i]};  
        card.push(card);
        card = {Value: "0", Color: color[i]};
        card.push(card);
    }
}

function shuffle(deck) {
    /* swap every card in random locations 1000 times */
    for (let i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var temp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = temp;
    }
}

function renderDeck(deck)
/* iterate through each card object in the deck Array and create the DOM elements using the createElement function */
{
      document.getElementById("deck").innerHTML = "";

	for (let i = 0; i < deck.length; i++)
	{
		let card = document.createElement("div");
		let value = document.createElement("div");
		let color = document.createElement("div");
		card.className = "card";
		value.className = "value";
		color.className = "color " + deck[i].Color;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(color);

		document.getElementById("deck").appendChild(card);
	}
}
