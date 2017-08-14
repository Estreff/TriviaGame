$(function() {


var questions = [
	{
		question:'In 1986, What Billboard Hot 100 Number One was sung by the Bengals?',
		answers:["Walk like an Eqyptian", "Human", "Amanda", "Sledgehammer"],
		correctAnswer:"Walk like an Eqyptian",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nbQ4GsLxbVnUNmORJkBsUJjM8hhRL5Z6KZScImUXngSE0ca5",
		audio: "assets/sounds/egyptian.mp3" 
	},

	{
		question:'"Bette Davis Eyes" topped the Billboard Hot 100 chart in 1981. Who sang it?'	,
		answers:["Eddie Rabbitt", "Sheena Easton", "Kim Carnes", "Blondie"],
		correctAnswer:"Kim Carnes",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshbG3AdSuhW8iI0Xa8stxTepMPz72TBHoYR0yLcbOYY33TXxA" ,
		audio: "assets/sounds/Bette_Davis_Eyes.mp3"
	},
	{
		question:'"Straight Up" was a US Billboard Hot 100 number one hit for Paula Abdul in which year?',
		answers:["1985", "1989", "1982", "1987"],
		correctAnswer:"1989",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oqXOFsiLDoDeKbOkfvH6d8tM_wKLDezVkLG9FYFFWGXmLGw0Ew",
		audio: "assets/sounds/Straight_Up.mp3"
	},
	{
		question:'Duran Duran had a Billboard Hot 100 number one hit in 1984. Which song was it?',
		answers:["The Reflex", "Hello", "Missing You", "Help"],
		correctAnswer:"The Reflex",
		image: "https://upload.wikimedia.org/wikipedia/en/7/7c/The_Reflex.jpg",
		audio: "assets/sounds/Duran_Reflex.mp3"
	},
	{
		question:'In which year were "Call Me," "Magic," and "Lady" number one hits on the Billboard Hot 100?',
		answers:["1982", "1983", "1988", "1980"],
		correctAnswer:"1980",
		image: "",
		audio: ""
	},
	{
		question:'On the Billboard Hot 100 in 1985, who had a number one hit with "I Want To Know What Love Is"?',
		answers:["Foreigner", "Tears for Fears", "Bryan Adams", "Mr. Mister"],
		correctAnswer:"Foreigner",
		image: "",
		audio: ""
	},
	{
		question:'In which year did Daryl Hall and John Oates have "I Can\'t Go For That (No Can Do)" and "Maneater" as two Billboard Hot 100 number one songs?',
		answers:["1987", "1984", "1982", "1981"],
		correctAnswer:"1982",
		image: "",
		audio: ""
	},
	{
		question:'"Say Say Say" was a Billboard Hot 100 number one song in 1983 for which duo or group?',
		answers:["Kenny Rogers & Dolly Parton", "Paul McCartney & Michael Jackson", "Patti Austin & James Ingram", "Men at Work"],
		correctAnswer:"Paul McCartney & Michael Jackson",
		image: "",
		audio: ""
	},
	{
		question:'In which year were "Look Away," "Could\'ve Been," "The Flame," and "Together Forever" number one songs on the Billboard Hot 100?',
		answers:["1985", "1988", "1989", "1983"],
		correctAnswer:"1988",
		image: "",
		audio: ""
	},
	{
		question:'Madonna and U2 both had TWO number one songs on the Billboard Hot 100 in 1987. Which of these songs (by a different artist) was NOT one of them?',
		answers:["Open Your Heart", "Lean On Me", "With Or Without You", "Who's That Girl"],
		correctAnswer:"Lean On Me",
		image: "",
		audio: ""
	}
]

var correctAnswers = 0;
var incorrectAnswers = 0;
var questionsAnswered;
var guess = "";
var selectedAnswer = "";
var counter = 15;
var intervalId;


var correctSound = new Audio('assets/sounds/correct.mp3');
var incorrectSound = new Audio('assets/sounds/incorrect.mp3');
var runAudio = new Audio('assets/sounds/Egyptian.mp3');

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
		
		if(questionsAnswered + 1 < questions.length) {
			correctAnswers ++;
			$('#correct').html(correctAnswers);
			$('#popup').css('visibility', 'visible')
			$('#winLossComment').html('Congratulations, you selected the correct Answer!!!');
			$('ul').addClass('disable');
			timerStop();
			displayWinningImage();
			console.log('Correct', correctSound);
			correctSound.play();
			winningAudio();
			// runAudio.play();
			console.log('Audio File: ', runAudio);

			
		} else {
			correctAnswers ++;
			$('#correct').html(correctAnswers);
			$('#popup').css('visibility', 'visible')
			$('#winLossComment').html('Congratulations, you selected the correct Answer!!!');
			$('ul').addClass('disable');
			timerStop();
			displayWinningImage();
			correctSound.play();
			winningAudio();
			// runAudio.play();
			$('#next').html('See Results');
			
		}
		
	} else {

		if(questionsAnswered + 1 < questions.length) {
			console.log('Questions Answered: ', questionsAnswered);
			console.log('Question Array Length: ', questions.length);
			incorrectAnswers ++;
			$('#wrong').html(incorrectAnswers);
			$('#popup').css('visibility', 'visible')
			$('#winLossComment').html('Sorry, that answer is Incorrect<br /><br />' + 'Correct Answer: ' + questions[questionsAnswered].correctAnswer);
			$('ul').addClass('disable');
			timerStop();
			$('#winningImage').html("<img src=>").attr('class', 'img-responsive');
			incorrectSound.play();
		
		} else {
			$('#wrong').html(incorrectAnswers);
			$('#popup').css('visibility', 'visible')
			$('#winLossComment').html('Sorry, that answer is Incorrect<br /><br />' + 'Correct Answer: ' + questions[questionsAnswered].correctAnswer);
			$('ul').addClass('disable');
			timerStop();
			$('#winningImage').html("<img src=>").attr('class', 'img-responsive');	
			$('#next').html('See Results');
			incorrectSound.play();
		}
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
		

		$('#timer').html(counter).css({'color': 'black', 'font-weight': 'normal', 'font-size': '50px'});
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
		$('#next').html('Next Question');
		runAudio.pause();

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
		$('#winningImage').html("<img src=" + questions[questionsAnswered].image + ">").attr('class', 'img-responsive');
	}	

// Play audio if you select the correct answer 
	function winningAudio() {
		runAudio = new Audio(questions[questionsAnswered].audio); 
		runAudio.play();
	}
// Next Question button

	var nextQuestion = $('#next').click(function() {
		$('#popup').css('visibility', 'hidden');
		$('#timer').html(counter).css({'color': 'black', 'font-weight': 'normal', 'font-size': '50px'});
		
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
			$('#winningImage').html("<img src=" + "" +">").attr('class', 'img-responsive');
			questionSelect();	
			$('ul').removeClass('disable');
			runAudio.pause();
			timer();
		}
	});

	
});

