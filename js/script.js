// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.

$(document).ready(function() {
	$("button").click(function() {
		var sentence = $("input").val();
		var newSentence = sentenceToPigLatin(sentence);
		$("#newSentence").html(newSentence);
	});
	
	function sentenceToPigLatin(sentence){
		var words = sentence.split(" ");
		var answers = [];
		for (var i = 0; i < words.length; i++) {
			answers.push(wordToPigLatin(words[i]));
		}
		return answers.join(" ");
	}
	
	function wordToPigLatin(word) {
		var vowels = ["a", "e", "i", "o", "u"];
		var firstLetter = word.slice(0, 1);
		var indexOf = vowels.indexOf(firstLetter);
		var beginsWithVowel = indexOf > -1;
		if (beginsWithVowel) {
			return word + "yay";
		} else {
			return word.slice(1) + firstLetter + "ay";
		}

	}
	
});

