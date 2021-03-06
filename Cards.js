/* Reference to better understand the code: https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript */
var color = ["red", "yellow", "green", "blue"];   
var values_1 = ["0", "Wild", "Wild Draw Four"];      //appears once per color
var values_2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Skip", "Draw Two", "Reverse"]; //appears twice per color

function getDeck() {
    var deck = new Array();
    var card;
    
    /* every values_1 1 time in each color */
    for (let i = 0; i < color.length; i++) { 
        for (let i = 0; i < (value_1.length); i++) { 
            card = {Value: value_1[i], Color: color[i]};
            deck.push(card);
        }
    }

    /* every values_2 2 times in each color */
    for (let i = 0; i < color.length; i++) { 
        for (let i = 0; i < (values_2.length); i++) { 
            card = {Value: values_2[i], Color: color[i]};
            let card_2 = {Value: values_2[i], Color: color[i]};
            deck.push(card);
            deck.push(card_2);
        }
    }

}

function shuffle(deck) {
    /* swap every card in random locations 1000 times. might not be optimal, but should be okay for now */
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
