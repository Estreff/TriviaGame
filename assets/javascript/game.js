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
var questionsAnswered;
var guess = "";
var selectedAnswer = "";
var counter = 15;
var intervalId;

function totalQuestions() {
	questionsAnswered = correctAnswers + incorrectAnswers;
}

function questionSelect() {
	totalQuestions();
	$('#questionTitle').css('min-height', '200px');

	$('#question').html(questions[questionsAnswered].question);

	$('#answers li').css({
		'background-color':'red',
		'border':'2px solid gray',
		'border-radius':'5px',
		'min-height':'80px'});

	$('#answer1').html(questions[questionsAnswered].answers[0]);
	$('#answer2').html(questions[questionsAnswered].answers[1]);
	$('#answer3').html(questions[questionsAnswered].answers[2]);
	$('#answer4').html(questions[questionsAnswered].answers[3]);

	selectedAnswer = questions[questionsAnswered].correctAnswer;
}

// Question will populate one into the Question field one at a time
// Multiple choice answers in the Answer field for question answered
// On Click of answer or Radio Buttons
$('li').click(function() {
	guess = $(event.currentTarget).text();
	if( guess === selectedAnswer) {

		correctAnswers ++;
		$('#correct').html(correctAnswers);
		$('#popup').css('visibility', 'visible')
		$('#winLossComment').html('Congratulations, you selected the correct Answer');
		timerStop();
		displayWinningImage();
		
	} else {
		incorrectAnswers ++;
		$('#wrong').html(incorrectAnswers);
		$('#popup').css('visibility', 'visible')
		$('#winLossComment').html('Sorry, that answer is Incorrect<br />' + 'Correct Answer: ' + questions[questionsAnswered].correctAnswer);
		timerStop();
	}
});

// Shows the correct Answer with Image and delays for 5 seconds

// Timer
	function timer() {
		$('#timer').html(15).css({'color': 'black', 'font-weight': 'normal'});
		counter = 15;
		intervalId = setInterval(function() {
			counter--;
			if(counter >= 0) {
				$('#timer').text(counter);
			}

			if(counter <= 10) {
				$('#timer').css({'color': 'orange',  'font-size':'64px', 'font-weight': 'bold'});
			}

			if(counter <= 5) {
				$('#timer').css({'color': 'red',  'font-size':'72px', 'font-weight': 'bolder'});
			}

			if(counter === 0) {
				incorrectAnswers ++;
				$('#wrong').html(incorrectAnswers);
				$('#popup').css('visibility', 'visible')
				$('#winLossComment').html('Sorry, you took too mucch time!!!<br />' + 'Correct Answer: ' + questions[questionsAnswered].correctAnswer);
				
				clearInterval(intervalId);
			}
		},1000);
	}

// Start Questions	
	function startTest() {
		questionSelect();
		timer();
		$('#startGame').attr("disabled", "true");
	}

// On click of Start Game execute startTest
		$('#startGame').click(startTest);

// Reset Game function
	function resetGame() {
		var correctAnswers = 0;
		$('#correct').html(0);
		var incorrectAnswers = 0;
		$('#wrong').html(0);
		var counter = 15;
		$('#timer').html(counter);

		$('#questions').html("");
		$('#answer1').html("");
		$('#answer2').html("");
		$('#answer3').html("");
		$('#answer4').html("");

		$('#startGame').attr("disabled", "false");
		$('#resetGame').attr("disabled", "true");
	}

// Reset Button on right as well on final page.
		$('#resetGame').click(resetGame);

	
// Stop timer
	function timerStop() {
		clearInterval(intervalId);
	}

// Display image if you select the correct answer
	function displayWinningImage() {
		$('#winningImage').html("<img src=" + questions[questionsAnswered].image + " width='70%'>").attr('class', 'img-responsive');
	}	

// Next Question button

	var nextQuestion = $('#next').click(function() {
		$('#popup').css('visibility', 'hidden');
		
		totalQuestions()
		if(questionsAnswered === questions.length) {
			$('#finalPopup').css('visibility', 'visible');
		} else {
			$('#winningImage').html("<img src=" + "" + " width='70%'>").attr('class', 'img-responsive');
			questionSelect();	
			timer();
		}
	});
});

