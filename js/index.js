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
	
});

class WheelFortune {
	constructor() {
		this.words = [{word: 'happy', hint: 'When you\'re " " and you know it!'}, {word: 'dirt', hint: 'Done " " cheap'}, {word: 'fortune', hint: '" " favors the bold'}];
	}



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
}