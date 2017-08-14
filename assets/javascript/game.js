$(function() {


var questions = [
	{
		question:'In 1986, What Billboard Hot 100 Number One was sung by the Bengals?',
		answers:["Walk like an Eqyptian", "Human", "Amanda", "Sledgehammer"],
		correctAnswer:"Walk like an Eqyptian",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nbQ4GsLxbVnUNmORJkBsUJjM8hhRL5Z6KZScImUXngSE0ca5",
		audio: "assets/sounds/Egyptian.mp3" 
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
		audio: "assets/sounds/Reflex.mp3"
	},
	{
		question:'In which year were "Call Me," "Magic," and "Lady" number one hits on the Billboard Hot 100?',
		answers:["1982", "1983", "1988", "1980"],
		correctAnswer:"1980",
		image: "https://img.discogs.com/MRGWxt38NHn-ub_5qvLFQ7j4FbE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-786322-1295749293.jpeg.jpg",
		audio: "assets/sounds/Call_Me.mp3"
	},
	{
		question:'On the Billboard Hot 100 in 1985, who had a number one hit with "I Want To Know What Love Is"?',
		answers:["Foreigner", "Tears for Fears", "Bryan Adams", "Mr. Mister"],
		correctAnswer:"Foreigner",
		image: "http://streamd.hitparade.ch/cdimages/foreigner-i_want_to_know_what_love_is_s_3.jpg",
		audio: "assets/sounds/Foreigner.mp3"
	},
	{
		question:'In which year did Daryl Hall and John Oates have "I Can\'t Go For That (No Can Do)" and "Maneater" as two Billboard Hot 100 number one songs?',
		answers:["1987", "1984", "1982", "1981"],
		correctAnswer:"1982",
		image: "https://images.genius.com/84253852d43a67952dab88c1b92e2e60.220x220x1.jpg",
		audio: "assets/sounds/maneater.mp3"
	},
	{
		question:'"Say Say Say" was a Billboard Hot 100 number one song in 1983 for which duo or group?',
		answers:["Kenny Rogers & Dolly Parton", "Paul McCartney & Michael Jackson", "Patti Austin & James Ingram", "Men at Work"],
		correctAnswer:"Paul McCartney & Michael Jackson",
		image: "http://alwaysjudging.com/media/Dragon-Suplex.jpg",
		audio: "assets/sounds/SaySaySay.mp3"
	},
	{
		question:'In which year were "Look Away," "Could\'ve Been," "The Flame," and "Together Forever" number one songs on the Billboard Hot 100?',
		answers:["1985", "1988", "1989", "1983"],
		correctAnswer:"1988",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/TFRick.jpg/220px-TFRick.jpg",
		audio: "assets/sounds/Together_Forever.mp3"
	},
	{
		question:'Madonna and U2 both had TWO number one songs on the Billboard Hot 100 in 1987. Which of these songs (by a different artist) was NOT one of them?',
		answers:["Open Your Heart", "Lean On Me", "With Or Without You", "Who's That Girl"],
		correctAnswer:"Lean On Me",
		image: "data:image/jpeg;base64,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",
		audio: "assets/sounds/lean_on_me.mp3"
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
			$('#winLossComment').html('Sorry, that answer is Incorrect<br /><br />' + 'Correct Answer: <br />' + questions[questionsAnswered].correctAnswer);
			$('ul').addClass('disable');
			timerStop();
			$('#winningImage').html("<img src=>").attr('class', 'img-responsive');
			incorrectSound.play();
		
		} else {
			incorrectAnswers ++;
			$('#wrong').html(incorrectAnswers);
			$('#popup').css('visibility', 'visible')
			$('#winLossComment').html('Sorry, that answer is Incorrect<br /><br />' + 'Correct Answer: <br />' + questions[questionsAnswered].correctAnswer);
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
				$('#winLossComment').html('Sorry, you took too much time!!!<br />' + 'Correct Answer:<br /> ' + questions[questionsAnswered].correctAnswer);
				$('ul').addClass('disable');
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
		console.log(questionsAnswered);
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
	
