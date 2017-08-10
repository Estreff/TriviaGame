$(function() {


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
var questionsAnswered = correctAnswers + incorrectAnswers;
var guess = "";
var selectedAnswer = "";
var counter = 15;

console.log('Questions Answered: ', questionsAnswered);
// Instructions
// Start Game
// Question selected

function questionSelect() {
	$('#question').html(questions[questionsAnswered].question);

	$('#answer1').html(questions[questionsAnswered].answers[0]);
	$('#answer2').html(questions[questionsAnswered].answers[1]);
	$('#answer3').html(questions[questionsAnswered].answers[2]);
	$('#answer4').html(questions[questionsAnswered].answers[3]);

	selectedAnswer = questions[questionsAnswered].correctAnswer;



}

// function questionSelection() {
// 	for(var i = 0; i < questions.length; i++) {
// 		// use jQuerty to create a question div
// 		var question = $('<div>');
// 		$('#root').append(question);

// 		//use jquery to append the title in a title <h1> to the question div
// 		question.append('<h4>' + questions[i].question + '</h4>');
	
// 		//use jquery to append the ansers ul and li's underneath the question 
// 		var ul = $('<ul>');
// 		question.append(ul);
// 			for(var j = 0; j < questions[i].answers.length; j++) {
// 				var li = $('<li>');
// 				selectedAnswer=questions[i].correctAnswer;
// 				console.log(selectedAnswer);
// 				li.append(questions[i].answers[j]);
// 				ul.append(li);
// 			}
// 	}
// }






// Question will populate one into the Question field one at a time
// Multiple choice answers in the Answer field for question answered
// On Click of answer or Radio Buttons
$('li').click(function() {
	guess = $(event.currentTarget).text();
	console.log('Guess: ', guess);
	console.log('Answer: ', selectedAnswer);
	if( guess === selectedAnswer) {
		correctAnswers ++;
		questionSelect();
	} else {
		incorrectAnswers ++;
		questionSelect();
	}

	console.log('Correct Answers: ', correctAnswers);
	console.log('Incorrect Answers: ', incorrectAnswers);

});

// Shows the correct Answer with Image and delays for 5 seconds

// Timer
	function timer() {

		setInterval(function() {
			counter--;
			if(counter >= 0) {
				$('#timer').text(counter);
			}


			if(counter <= 10) {
				$('#timer').css({'color': 'yellow',  'font-size':'64px', 'font-weight': 'bold'});
			}

			if(counter <= 5) {
				$('#timer').css({'color': 'red',  'font-size':'72px', 'font-weight': 'bolder'});
			}

			if(counter === 0) {

				clearInterval(counter);
			}
		},1000);
	}

	timer();

// Will populate next question 

// 
// Show Results with Correct and Incorrect quantities


// Restart Game button

function restartGame() {

}

questionSelect();

});