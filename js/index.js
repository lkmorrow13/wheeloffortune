// Goal: click on the letter and update letter changes color, check if in word, give (or don't) points

// Get the letter clicked on
// check if in word
	// if in word add letter to word box
	// if in word, give points (100)
		// update the page's points
// if letter in word, then make green
// if not, then red

// words = [{'happy', 'When you're " " and you know it!}, {'dirt', 'Done " " cheap'}, {'fortune', '" " favors the bold'}]


$(function() {
	guessLetter() {
		if (this.letter = this.words[i]) {
			$('.letter').removeClass('unUsedLetter');
			$('.letter').addClass('rightLetter');
			// add 100pts to players score
			// add to word box
		}
		else {
			$('.letter').removeClass('unUsedLetter');  
			$('.letter').addClass('wrongLetter');
		}
	}
});

const phraseArray = [{phrase: 'Dirt', clue: 'Done **** Cheap'}, {phrase: 'Happy', clue: 'When you\'re ***** and you know it!'}, {phrase: 'Fortune', clue: '******* favors the bold!'}]

class Game {
	constructor(phraseArr){
		this.playerOne = {
			money: 0,
			name: 'Player One',
			turn: false
		};

		this.playerTwo = {
			money: 0,
			name: 'Player Two',
			turn: false
		};

		this.playerThree = {
			money: 0,
			name: 'Player Three',
			turn: false
		};

		this.roundCounter = 1;
    this.phraseArr = phraseArr[(Math.floor(Math.random() * phraseArr.length))];
    this.phrase = this.phraseArr.phrase.split('');
    this.noSpacePhrase =  this.phrase.filter(function(str) {
    return /\S/g.test(str);
    });
    this.correctLetters = [];
    this.incorrectLetters = [];
    this.abcArr = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    this.vowArr = ['a', 'e', 'i', 'o', 'u'];
    this.phraseLetters =  this.noSpacePhrase.filter(function(elem, index, self) 
    {
      return index == self.indexOf(elem);
    });

  }
}          
