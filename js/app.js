
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	// GAME LOGIC------------------------------
  	var secretNum;
  	var myGuess;
  	var prevGuesses = [];
  	var myCount = 0;
  	
  	var newGame = function () {
  		secretNum = Math.floor(Math.random() * 100) + 1;
  		$("#guessList").children().remove();
  		$("#count").text("0");
  		myCount = 0;
  		$("#feedback").text("Make your Guess!");
  		console.log("Secret number chosen: " + secretNum);
  	}
   	
  	var addFeedback = function (guess) {
  		var myMessage = "";
  		if (guess === secretNum) {
  			myMessage += "You got it!";
  		} else if (Math.abs(guess - secretNum) >= 50) {
  			myMessage += "Ice cold... ";
  		} else if (Math.abs(guess - secretNum) >= 30) {
  			myMessage += "Cold... ";
  		} else if (Math.abs(guess - secretNum) >= 20) {
  			myMessage += "Warm... ";
  		} else if (Math.abs(guess - secretNum) >= 10) {
  			myMessage += "Hot... ";
  		} else if (Math.abs(guess - secretNum) >= 1) {
  			myMessage += "Very hot... ";
  		}
  		if (guess > secretNum) {
  			myMessage += "Too high!";
  		} else if (guess < secretNum) {
  			myMessage += "Too low!";
  		}
  		$("#feedback").text(myMessage);
  	}

  	var addCount = function () {
  		myCount++;
  		$("#count").text(myCount);
  	}

  	var trackGuess = function (guess) {
  		$("#guessList").append("<li>" + guess + " </li>")
  	}

  	var isValid = function (guess) {
  		for (i = 0; i < prevGuesses.length; i++) {
  			if (prevGuesses[i] == guess) {
  				alert("You already guessed that number!");
  				return false;
  			}
  		};
  		if (isNaN(myGuess)) {
  			alert('Please enter a number between 1 - 100');
  			$("#userGuess").val("");
  			return false;
  		} else if (myGuess % 1 > 0) {
  			alert('Please enter an integer!');
  			$("#userGuess").val("");
  			return false;
  		} else if (myGuess > 100 || myGuess < 1) {
  			alert('Please enter a number between 1 - 100');
  			$("#userGuess").val("");
  			return false;
  		} else {
  			return true;
  		}
  	}

  	$("form").submit(function(event) {
  		event.preventDefault();
  		myGuess = $("#userGuess").val();
  		myGuess = +myGuess;
  		console.log(myGuess);
  		if (!isValid(myGuess)) {
  			return;
  		}
  		prevGuesses.push(myGuess);
  		console.log(prevGuesses);
  		addFeedback(myGuess);
  		addCount();
  		trackGuess(myGuess);
  		$("#userGuess").val("");
  	});

	$(".new").on("click", function () {
		newGame();
	}); 	


  	newGame();

});


