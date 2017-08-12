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
		$('#winLossComment').html('Congratulations, you selected the correct Answer!!!');
		$('ul').addClass('disable');
		timerStop();
		displayWinningImage();
		
	} else {
		incorrectAnswers ++;
		$('#wrong').html(incorrectAnswers);
		$('#popup').css('visibility', 'visible')
		$('#winLossComment').html('Sorry, that answer is Incorrect<br /><br />' + 'Correct Answer: ' + questions[questionsAnswered].correctAnswer);
		$('ul').addClass('disable');
		timerStop();
		$('#winningImage').html("<img src=>").attr('class', 'img-responsive');
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
				$('#winLossComment').html('Sorry, you took too much time!!!<br />' + 'Correct Answer: ' + questions[questionsAnswered].correctAnswer);
				
				clearInterval(intervalId);
			}
		},1000);
	}

// Start Questions	
	function startTest() {
		$('#startGame').addClass('disable');
		$('#resetGame').removeClass('disable');
		$('ul').removeClass('disable');
		questionSelect();
		timer();
		
	}

// On click of Start Game execute startTest
		$('#startGame').click(startTest);



// Reset Game function
	function resetGame() {
		timerStop();

		counter = 15;
		correctAnswers = 0;
		incorrectAnswers = 0;
		questionsAnswered = 0;
		console.log('Reset Game: ',questionsAnswered)
		

		$('#timer').html(counter).css({'color': 'black', 'font-weight': 'normal'});
		$('#correct').html(correctAnswers);
		$('#wrong').html(incorrectAnswers);

		$('#question').html("");
		$('#questionTitle').css({'min-height': '125px'});
		$('#answerTitle').css({'min-height': '125px'});
		$('#answer1').html("");
		$('#answer2').html("");
		$('#answer3').html("");
		$('#answer4').html("");
		$('li').css({'border':'none', 'background-color': 'lightgray', 'min-height': '0px'});

		$('#startGame').removeClass('disable');
		$('#resetGame').addClass('disable');
		$('#finalPopup').css('visibility','hidden');
		$('#popup').css('visibility','hidden');

	}	

// Reset Button on right as well on final page.
		$('#resetGame').click(resetGame);
		$('#startOver').click(resetGame);

	
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
			if(incorrectAnswers === 0) {
				$('#finalComment').html('You are a know it all!! <br /><br /> Total Questions: ' + questionsAnswered + '<br /> Correct Answers: ' + correctAnswers + '<br /> Incorrect Answers: ' + incorrectAnswers);
			} else if (correctAnswers > incorrectAnswers) {
				$('#finalComment').html('You have a higher than average knowledge of topic!! <br /><br /> Total Questions: ' + questionsAnswered + '<br /> Correct Answers: ' + correctAnswers + '<br /> Incorrect Answers: ' + incorrectAnswers);
			} else {
				$('#finalComment').html('Study Up, you have a lower than average knowledge of this topic!! <br /><br /> Total Questions: ' + questionsAnswered + '<br /> Correct Answers: ' + correctAnswers + '<br /> Incorrect Answers: ' + incorrectAnswers);
			}
		} else { 
			$('#winningImage').html("<img src=" + "" + " width='70%'>").attr('class', 'img-responsive');
			questionSelect();	
			$('ul').removeClass('disable');
			timer();
		}
	});
});

