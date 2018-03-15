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
	var game = new Game();
	game.startgame();
	$('.guessible').click(function () {
		game.guessletter($(this).text().toLowerCase());
	});

	$('#solvebutton').click(function() {
		game.solve($('#solveword').val());
	})
});



class Game {
	constructor(){
		this.phraseArray = [{phrase: 'dirt', clue: 'Done **** Cheap'}, {phrase: 'happy', clue: 'When you\'re ***** and you know it!'}, {phrase: 'fortune', clue: '******* favors the bold!'}];
		this.roundCounter = 0;
    this.phrase = this.phraseArray[this.roundCounter];
    this.correctLetters = [];
    this.incorrectLetters = [];
  }

  startgame() {
  	$('#phrase-display').empty();
  	for (var i = 0; i < this.phrase.phrase.length; i++) {
  		$('#phrase-display').append('<div class="letter" data-letter="'+this.phrase.phrase[i]+'"></div>');
  	}
  	$('#cluebox').text(this.phrase.clue);
  }

  guessletter(letter) {
  	if (this.phrase.phrase.includes(letter)) {
  		$('.letter').each(function() {
  			if ($(this).data('letter') == letter) {
  				$(this).text(letter);
  			}
  		});
	  	this.didWin();
  	};
  }

  didWin() {
  	var won = true;
  	$('.letter').each(function() {
			if ($(this).data('letter') !== '' && $(this).text() == '') {
				won = false;
			}
		});
		if (won) {
			alert('Yay you won!!!');
			this.roundCounter++;
			this.phrase = this.phraseArray[this.roundCounter];
			this.startgame();
		}
  }

  solve(guess) {
  	if (guess.toLowerCase() === this.phrase.phrase) {
			alert('Yay you won!!!');
			this.roundCounter++;
			this.phrase = this.phraseArray[this.roundCounter];
			this.startgame();
			$('#solveword').val('');
		}
  }
}          
