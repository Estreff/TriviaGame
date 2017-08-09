$(document).ready(function() {

$('.pick').click(function() {
	alert('pick clicked');
	// guess = $(event.currentTarget);
	// console.log(guess);
	// if( guess === questions[i].correctAnswer) {
	// 	correctAnswers ++;
	// } else {
	// 	incorrectAnswers ++;
	// }

	// console.log('Correct Answers: ', correctAnswers);
	// console.log('Incorrect Answers: ', incorrectAnswers);

});

var questions = [
	{
		question:"What NFL team is located in Denver?",
		answers:["Eagles", "Seahawks", "Bears", "Broncos"],
		correctAnswer:"Broncos",
		image: "http://cdn.shopify.com/s/files/1/0817/3919/t/16/assets/nfl-logo-2.png?6275502595806424217"

	},
	{
		question:"What NFL team is located in Philadelphia?",
		answers:["Eagles", "Seahawks", "Bears", "Broncos"],
		correctAnswer:"Eagles",
		image: "http://www.vectorsland.com/imgd/l12508-philadelphia-eagles-logo-52932.png"

	},
	{
		question:"What NFL team is located in Chicago?",
		answers:["Eagles", "Seahawks", "Bears", "Broncos"],
		correctAnswer:"Bears",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chicago_Bears_logo.svg/1000px-Chicago_Bears_logo.svg.png"

	}

]

var correctAnswers = 0;
var incorrectAnswers = 0;
var guess = "";

// Instructions
// Start Game
// Question selected
function questionSelection() {
	for(var i = 0; i < questions.length; i++) {
		// use jQuerty to create a question div
		var question = $('<div class = "question">');
		$('#root').append(question);

		//use jquery to append the title in a title <h1> to the question div
		question.append('<h4>' + questions[i].question + '</h4>');
	
		//use jquery to append the ansers ul and li's underneath the question 
		var ul = $('<ul>');
		question.append(ul);
			for(var j = 0; j < questions[i].answers.length; j++) {
				var li = $('<li>');
				li.attr('class', 'pick');
				li.append(questions[i].answers[j]);
				ul.append(li);
			}
	}
}







// Question will populate one into the Question field one at a time
// Multiple choice answers in the Answer field for question answered
// On Click of answer or Radio Buttons
// Shows the correct Answer with Image and delays for 5 seconds
// Will populate next question 

// 
// Show Results with Correct and Incorrect quantities
// Restart Game button

questionSelection();

});