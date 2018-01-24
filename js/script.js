$(document).ready(function() {
	$("button").click(function() {
		var sentence = $("input").val();
		var newSentence = sentenceToPigLatin(sentence);
		$("#newSentence").html(newSentence);
	});

	function sentenceToPigLatin(sentence) {
		var words = sentence.split(" ");
		var answers = [];
		for (var i = 0; i < words.length; i++) {
			answers.push(wordToPigLatin(words[i]));
		}
		return answers.join(" ");
	}
	function indexOfFirstVowel(word) {   // "strip" -> 3
		for (var i=0; i<word.length;i++){
			// is the character at this index a vowel?
			var letter = word[i];
			var letterIsVowel = isVowel(letter);
			
			// if yes,
			if(letterIsVowel == true){
				return i;
			}
		}
	}
	
	function isVowel(letter) {
		var vowels = ["a", "e", "i", "o", "u"];
		return vowels.indexOf(letter) > -1;
	}

	function wordToPigLatin(word) {
		var firstLetter = word.slice(0, 1);
		var beginsWithVowel = isVowel(firstLetter);

		if (beginsWithVowel) {
			return word + "yay";
		}
		else {
			var i = indexOfFirstVowel(word);
		    var consonantCluster = word.slice(0,i);
			return word.slice(i) + consonantCluster + "ay";
		}

	}

});