import React from 'react';
import {shuffle, deck, draw} from '../card/Deck';

var pile = new Array();

class Player {
    constructor() {
        var hand = new Array();
        var score = 0;
        var wincon = false;
        
        for (let index = 0; index < 7; index++) {
            hand.push(draw());
        }
        console.log(hand);

        this.drawFromDeck = function() {
            hand.push(draw());
        }

        this.deal = function() {
            pile.push(hand.pop());
            console.log(hand);
            console.log(pile);
        }

        this.getHand = function() {
            return hand;
        }

        this.addScore = function() {
            score+=1;
            console.log(score);
        }

        this.subtractScore = function() {
            score-=1;
            console.log(score);
        }

        this.getScore = function() {
            return score;
        }

        this.win = function() {
            if (hand.isEmpty()) {
                wincon = true;
            }
            return wincon;
        }
    }
}

const Game = () => {
    shuffle(deck);
    console.log(deck);
    var p1 = new Player();
    p1.drawFromDeck();
    console.log(p1.getHand());
    p1.deal();
    p1.addScore();
    p1.subtractScore();
    p1.addScore();
    p1.addScore();
    console.log("Score: " + p1.getScore());

    return (
        <p>test</p>
      );
    // Loop each Player, if (Player.win()) then end Game.
}

export default Game;