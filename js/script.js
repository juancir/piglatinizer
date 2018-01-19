// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
	$("button").click(turnToPig);

	function turnToPig() {
		var str = $("input").val();
		var words = str.split(" ");
		console.log(words);
		var answers = [];
		for (var i = 0; i < words.length; i++) {
			console.log(words[i])
			answers.push(latinizeWord(words[i]));
		}
		$("#newSentence").html(answers.join(" "));
	}

	function latinizeWord(word) {
		var vowels = ["a", "e", "i", "o", "u"];
		var firstLetter = word[0];
		var indexOf = vowels.indexOf(firstLetter);
		var beginsWithVowel = indexOf > -1;
		if (beginsWithVowel) {
			return word + "yay";
		}
		else {
			return word.slice(1) + firstLetter + "ay";
		}
       
	}




});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance