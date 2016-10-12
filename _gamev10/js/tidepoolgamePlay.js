//
// California Rocky Reefs Tidepool Interactive.
//
//   coded by Jon Britton
//         AV&EE, California Academy of Sciences
//	
// If you can read this, try swiping the Konami Code on this interactive
// next time you're at the museum!
//

var tidepoolGamePlay = function(theGame, playNumber, otherVar) {

	// DOM and objects
	var domvidz = document.getElementById("vid");   // attract video container
	var domattractvid = document.getElementById("attractvid");   // attract video
	var howTwo = document.getElementById("howToPlay2");
	var youDone = document.getElementById("youDone");
	var canz = document.getElementById("rrCanvas"); // the canvas
	var magz = document.getElementById("maggie");   // the magnifier
	var domhowtoplay = document.getElementById("howToPlay");
	var helpMe = document.getElementById("help");   // the help button
	var titlez = document.getElementById("title");   // the main menu button
	var playagain = document.getElementById("playAgain");   // the main menu button
	
	var timerVar = 1;
	var _thetop=1;
	var _toplocation=500;
	var onMainScreen=1;
	var blockTimeout=0;
	var critArr = [];// ["spec1", "spec2", "spec3", "spec4", "spec5"];
	
	// Canvas and display elements
	var gamebg; // the background image.
	var gamebg_blue;
	var winner;
	var lastScreen = (function () {
			var timer; // variable persisted here
			return function () {
			window.clearTimeout(timer);
			timer = window.setTimeout(function(){
						window.location.href = "?attract=1";},20000); 
			};
		})();
	var emailTimeout ;
	// Critters
	var obj1xpos = 1350; // findable objects
	var obj1ypos = 850; // findable objects
	var obj2xpos = 1250; // findable objects
	var obj2ypos = 250; // findable objects
	var obj3xpos = 500; // findable objects
	var obj3ypos = 500; // findable objects
	var obj4xpos = 500; // findable objects
	var obj4ypos = 935; // findable objects
	var obj5xpos = -51; // findable objects
	var obj5ypos = -51; // findable objects
	var obj6xpos = -51; // findable objects
	var obj6ypos = -51; // findable objects
	var npc1xpos = -51; // non-player characters
	var npc1ypos = -51; // non-player characters
	var npc2xpos = -51; // non-player characters
	var npc2ypos = -51; // non-player characters
	var npc3xpos = -51; // non-player characters
	var npc3ypos = -51; // non-player characters
	var npc4xpos = -51; // non-player characters
	var npc4ypos = -51; // non-player characters
	var objSize = 50;   // findable area 
	
	var critterCount = 0; // How many did you find?
	var numCritters = 0;  // How many critters are there in this game?
	var differ;

	var critter; // the big image of the found species.
	var matchA1; // the first "select which thing this is" image.
	var matchA1name; // the familiar name for the matcher
	var matchA1latin; // the latin name for the matcher 
	var matchB1; // the first "select which thing this is" image.
	var matchB1name; // the familiar name for the matcher
	var matchB1latin; // the latin name for the matcher 
	var matchC1; // the first "select which thing this is" image.
	var matchC1name; // the familiar name for the first matcher
	var matchC1latin; // the latin name for the matcher 
	var matchD1; // the first "select which thing this is" image.
	var matchD1name; // the familiar name for the matcher
	var matchD1latin; // the latin name for the matcher 
	var matchE1; // the first "select which thing this is" image.
	var matchE1name; // the familiar name for the matcher
	var matchE1latin; // the latin name for the matcher 
	var matchA2; // the second "select which thing this is" image.
	var matchA2name; // the familiar name for the matcher
	var matchA2latin; // the latin name for the matcher 
	var matchB2; // the second "select which thing this is" image.
	var matchB2name; // the familiar name for the matcher
	var matchB2latin; // the latin name for the matcher 
	var matchC2; // the second "select which thing this is" image.
	var matchC2name; // the familiar name for the first matcher
	var matchC2latin; // the latin name for the matcher 
	var matchD2; // the second "select which thing this is" image.
	var matchD2name; // the familiar name for the matcher
	var matchD2latin; // the latin name for the matcher 
	var matchE2; // the second "select which thing this is" image.
	var matchE2name; // the familiar name for the matcher
	var matchE2latin; // the latin name for the matcher 
	var matchA3; // the third "select which thing this is" image.
	var matchA3name; // the familiar name for the matcher
	var matchA3latin; // the latin name for the matcher 
	var matchB3; // the third "select which thing this is" image.
	var matchB3name; // the familiar name for the matcher
	var matchB3latin; // the latin name for the matcher 
	var matchC3; // the third "select which thing this is" image.
	var matchC3name; // the familiar name for the first matcher
	var matchC3latin; // the latin name for the matcher 
	var matchD3; // the third "select which thing this is" image.
	var matchD3name; // the familiar name for the matcher
	var matchD3latin; // the latin name for the matcher 
	var matchE3; // the third "select which thing this is" image.
	var matchE3name; // the familiar name for the matcher
	var matchE3latin; // the latin name for the matcher 
	var matchF3; // the third "select which thing this is" image.
	var matchF3name; // the familiar name for the matcher
	var matchF3latin; // the latin name for the matcher 

	var spec1Found = 0; // was it already found?
    var spec2Found = 0; // was it already found?
    var spec3Found = 0; // was it already found?
    var spec4Found = 0; // was it already found?
    var spec5Found = 0; // was it already found?
    var spec6Found = 0; // was it already found?
	var npc1Found = 0;
	var npc2Found = 0;
	var npc3Found = 0;
	var npc4Found = 0;

	var tp = new tidepoolGameHandler();
	
	// Event Listeners
	$(document).bind("touchmove", function(e){ e.preventDefault();});
	$(document).bind("click", function(e){ 
	});
	magz.addEventListener('touchmove', touchmover, true);
	magz.addEventListener('touchstart', touchdowns, true);
	magz.addEventListener('mousedown', touchdowns, true);
	magz.addEventListener('touchend', touchender, true);
	magz.addEventListener('mousemove', touchmover, true);
	titlez.addEventListener('click', backtotitle, true);
	// playagain.addEventListener('click', backtotitle, true);

	helpMe.addEventListener('click', function(){ 
			$('#howToPlay').fadeIn(300); 
			$('#glass').show().animate({left: 210, top: 350 }, 800);
			$('#glass').animate({left: 210, top: 340 }, 800);
			$('#glass').animate({left: 1085, top: 27 }, 300);
			$('#glass').animate({left: 1095, top: 28 }, 300);
			$('#glass').animate({left: 1225, top: 775  }, 500);
			$('#glass').animate({left: 1190, top: 775 }, 500);
			$('#glass').animate({left: 350, top: 800 }, 500);
			$('#glass').animate({left: 345, top: 790 }, 500);
			domhowtoplay.addEventListener('click', function() {
                setTimeout(function(){
					$('#howToPlay').fadeOut();
					$('#glass').hide();
                }, 500);
			}, false);
			setTimeout(function(){
				$('#glass').hide();
				$('#howToPlay').fadeOut(300); 
			}, 3000)
		}, true);

	function touchender() {
		$('#lens').css('background', 'url("reefer/mag_arrows.png")');
	}
	function touchdowns() {
		$('#lens').css('background', 'url("reefer/mag_ontouch.png")');
		createjs.Sound.play("magtouch");
		onMainScreen=1;
	}
	function backtotitle() {
		timerVar = 0;
		theGame="";
		window.location.href = "?attract=0";
		$('#youDone').hide();
		$('#iNatTicTacs').hide();
		$('#iNatTicTacs2').hide();
		$('#matchScreen').hide();
		$('#resultsScreen').hide();
		$('#glass').hide();
		$('#introName').animate({top: 260});
		$('#lens').css('background', 'url("reefer/mag_arrows.png")');
		$('#gameselect1').fadeIn().animate({left:  1}, 700);
		$('#gameselect2').fadeIn().animate({left: 640}, 700);
		$('#gameselect3').fadeIn().animate({left: 1280}, 800);
		$('#spec1').fadeOut().css({"z-index": "56"}, 100);
		$('#spec2').fadeOut().css({"z-index": "56"}, 100);
		$('#spec3').fadeOut().css({"z-index": "56"}, 100);
		$('#spec4').fadeOut().css({"z-index": "56"}, 100);
		$('#spec5').fadeOut().css({"z-index": "56"}, 100);
		$('#spec6').fadeOut().css({"z-index": "56"}, 100);
	}

	function touchmover(e) {
	
		// createjs.Sound.play("magmove");
		e.touches = [{clientX: e.clientX, clientY: e.clientY}];
		var theXpos = (e.touches[0].clientX) ;
		var theYpos = (e.touches[0].clientY) ;
		var rx = (theXpos > 125) ? (Math.round(theXpos*1.5))-125 : theXpos;
		var ry = (theYpos > 125) ? (Math.round(theYpos*1.5))-125 : theYpos;

		 (theXpos < 120 || theYpos < 120 ) ? $('#maggieBG').css('backgroundPosition', ' -' + rx+125 + 'px -' + ry+125 + 'px') : $('#maggieBG').css('backgroundPosition', ' -' + rx + 'px -' + ry + 'px');
		 (theXpos > 1800 || theYpos > 900 ) ? $('#maggieBG').css('backgroundPosition', ' -' + rx-125 + 'px -' + ry-125 + 'px') : $('#maggieBG').css('backgroundPosition', ' -' + rx + 'px -' + ry + 'px');
		 (theXpos > 1820 || theXpos < 130 ) ? console.log() : $('#maggie').css('left', theXpos-247);
		 (theYpos < 100 || theYpos > 980 )  ? console.log() : $('#maggie').css('top',	 theYpos-247);
		 (theYpos < 100 || theYpos > 980 )  ? console.log() : $('#maggieBG').css('backgroundPosition', ' -' + rx + 'px -' + ry + 'px')
		//$('#lens').css('background', 'url("reefer/mag_ontouch.png")');
		if (theXpos > obj1xpos-objSize && theXpos < obj1xpos+objSize && theYpos > obj1ypos-objSize && theYpos < obj1ypos+objSize && spec1Found==0 && onMainScreen==1) {
			onMainScreen=0;
			
			gameboard.matchscreen(1);
			spec1Found = 1;
		} else if (theXpos > obj2xpos-objSize && theXpos < obj2xpos+objSize && theYpos > obj2ypos-objSize && theYpos < obj2ypos+objSize && spec2Found==0 && onMainScreen==1) {
			onMainScreen=0;
			gameboard.matchscreen(2);
			spec2Found = 1;
		} else if (theXpos > obj3xpos-objSize && theXpos < obj3xpos+objSize && theYpos > obj3ypos-objSize && theYpos < obj3ypos+objSize && spec3Found==0 && onMainScreen==1) {
			onMainScreen=0;
			gameboard.matchscreen(3);
			spec3Found = 1;
		} else if (theXpos > obj4xpos-objSize && theXpos < obj4xpos+objSize && theYpos > obj4ypos-objSize && theYpos < obj4ypos+objSize && spec4Found==0 && onMainScreen==1) {
			onMainScreen=0;
			gameboard.matchscreen(4);
			spec4Found = 1;
		} else if (theXpos > obj5xpos-objSize && theXpos < obj5xpos+objSize && theYpos > obj5ypos-objSize && theYpos < obj5ypos+objSize && spec5Found==0 && onMainScreen==1) {
			onMainScreen=0;
			gameboard.matchscreen(5);
			spec5Found = 1;
		} else if (theXpos > obj6xpos-objSize && theXpos < obj6xpos+objSize && theYpos > obj6ypos-objSize && theYpos < obj6ypos+objSize && spec6Found==0 && onMainScreen==1) {
			onMainScreen=0;
			gameboard.matchscreen(6);
			spec6Found = 1;
		} else if (theXpos > npc1xpos-objSize && theXpos < npc1xpos+objSize && theYpos > npc1ypos-objSize && theYpos < npc1ypos+objSize && npc1Found==0 && onMainScreen==1) {
			onMainScreen=0;
			gameboard.npcscreen(1);
			npc1Found = 1;
		} else if (theXpos > npc2xpos-objSize && theXpos < npc2xpos+objSize && theYpos > npc2ypos-objSize && theYpos < npc2ypos+objSize && npc2Found==0 && onMainScreen==1) {
			onMainScreen=0;
			gameboard.npcscreen(2);
			npc2Found = 1;
		} else if (theXpos > npc3xpos-objSize && theXpos < npc3xpos+objSize && theYpos > npc3ypos-objSize && theYpos < npc3ypos+objSize && npc3Found==0 && onMainScreen==1) {
			onMainScreen=0;
			gameboard.npcscreen(3);
			npc3Found = 1;
		} else if (theXpos > npc4xpos-objSize && theXpos < npc4xpos+objSize && theYpos > npc4ypos-objSize && theYpos < npc4ypos+objSize && npc4Found==0 && onMainScreen==1) {
			onMainScreen=0;
			gameboard.npcscreen(4);
			npc4Found = 1;
		}
	}

	var gamesetup = {
		// Setting up variables
		"loadvars" : function(whichGame) {
			switch(whichGame) {
					case 1:
						gamebg = "game1_final.png";
						gamename = "Search for Snails";
						numCritters = 5;
						critterType = "Snails";
						gamebg_blue = "reefer/game1_blue.png";
						$('#timesUp').css('background', 'url("reefer/game1_blue.png")');
						$('#matchscreen').css('background', 'url("reefer/game1_blue.png")');
						$('#rightanswer').css('background', 'url("reefer/game1_blue.png")');
						$('#wronganswer').css('background', 'url("reefer/game1_blue.png")');
						$('#npcanswer').css('background', 'url("reefer/game1_blue.png")');
						$('#resultsScreen').css('background', 'url("reefer/game1_blue.png")');
						$('#videotimesUp').attr('src', "reefer/RR_game1_waveTransition_01.mov");
						$('#howToPlay').css({"background": "url('reefer/Game1_Intro.png')"});
						$('#matchtext').text("Look closely — which of these snails did you find?");
						$('#blurb').text("Compare the shell’s patterns and shape. Which one matches?");
						$('#iNatHead').text("Take a Simple Step");
						$('#iNatExpos').text("Join the team!  Your discoveries, combined with the work of other volunteers, will help build a better picture of our coastal ecosystem.");
						_thetop=1;
						_toplocation=500;
						obj1xpos = 950; // Black Turban
						obj1ypos = 760; // 
						obj2xpos = 590; // Blue Top
						obj2ypos = 295; // 
						obj3xpos = 1565; // Brown Turban
						obj3ypos = 668; // 
						obj4xpos = 465; // Rough Limpet
						obj4ypos = 475; // 
						obj5xpos = 270; // Angular Unicorn
						obj5ypos = 615; // 
						npc1xpos = 392; // non-player characters
						npc1ypos = 100; // non-player characters
						npc2xpos = 1270; // non-player characters
						npc2ypos = 260; // non-player characters
						npc3xpos = 350; // non-player characters
						npc3ypos = 611; // non-player characters
						$('#spec1').attr('src', "reefer/BlackTurban.png").css({"left": obj1xpos-40,
																			  "top": obj1ypos-20});
						$('#spec2').attr('src', "reefer/BlueTop.png").css({"left": obj2xpos-40,
																			  "top": obj2ypos-10});
						$('#spec3').attr('src', "reefer/BrownTurban.png").css({"left": obj3xpos-40,
																			  "top": obj3ypos-10});
						$('#spec4').attr('src', "reefer/RoughLimpet.png").css({"left": obj4xpos-40,
																			  "top": obj4ypos-10});
						$('#spec5').attr('src', "reefer/AngularUnicorn.png").css({"left": obj5xpos-40,
																			  "top": obj5ypos-10});
						$('#nameOfGame').text(gamename);
						youSpottedSome = "Great! You spotted a lot of snails";
						youSpottedLots = "Excellent! You're a skilled spotter";
						endingTitle = "You’re Good at Searching for Snails! ";
						crittersSalut = "Snails found!"
						
						npc1text = "That's not a snail!";
						npc1expos = "Try again, that's a hermit crab";
						npc1image = "reefer/BrownHermitCrab.png";
						npc2text = "That's not a snail!";
						npc2expos = "Try again, that's a hermit crab";
						npc2image = "reefer/YellowHermitCrab.png";
						npc3text = "That's not a snail!";
						npc3expos = "Try again, that's a sea star";
						npc3image = "reefer/DwarfMoltedStar.png";

						$('#badge').attr('src', "reefer/TC_BadgeLockup_Snail_TranspBkgd_200x200_140605.png");
						window.history.replaceState('page2', 'Title', '/_gamev10/?G=3');
						
						// Black Turban
						matchA1   = critterList[0][1];
						matchA1name   = critterList[0][0];
						matchA1latin   = critterList[0][2];
						matchA1right   = critterList[0][3];
						matchAblurb = speciesList[0][3]; // the "you're right" text
						matchA2   = critterList[1][1];
						matchA2name   = critterList[1][0];
						matchA2latin   = critterList[1][2];
						matchA2right   = critterList[1][3];
						matchA3   = critterList[4][1];
						matchA3name   = critterList[4][0];
						matchA3latin   = critterList[4][2];
						matchA3right   = critterList[4][3];
						// Blue Top
						matchB1   = critterList[6][1];
						matchB1name   = critterList[6][0];
						matchB1latin   = critterList[6][2];
						matchB1right   = critterList[6][3];
						matchB2   = critterList[9][1];
						matchB2name   = critterList[9][0];
						matchB2latin   = critterList[9][2];
						matchB2right   = critterList[9][3];
						matchB3   = critterList[2][1];
						matchB3name   = critterList[2][0];
						matchB3latin   = critterList[2][2];
						matchB3right   = critterList[2][3];
						matchBblurb = speciesList[2][3]; // the "you're right" text
						// Brown Turban
						matchC1   = critterList[11][1];
						matchC1name   = critterList[11][0];
						matchC1latin   = critterList[11][2];
						matchC1right   = critterList[11][3];
						matchC2   = critterList[5][1];
						matchC2name   = critterList[5][0];
						matchC2latin   = critterList[5][2];
						matchC2right   = critterList[5][3];
						matchCblurb = speciesList[1][3]; // the "you're right" text
						matchC3   = critterList[32][1];
						matchC3name   = critterList[32][0];
						matchC3latin   = critterList[32][2];
						matchC3right   = critterList[32][3];
						// Rough Limpet
						matchD1   = critterList[9][1];
						matchD1name   = critterList[9][0];
						matchD1latin   = critterList[9][2];
						matchD1right   = critterList[9][3];
						matchDblurb = speciesList[4][3]; // the "you're right" text
						matchD2   = critterList[3][1];
						matchD2name   = critterList[3][0];
						matchD2latin   = critterList[3][2];
						matchD2right   = critterList[3][3];
						matchD3   = critterList[2][1];
						matchD3name   = critterList[2][0];
						matchD3latin   = critterList[2][2];
						matchD3right   = critterList[2][3];
						// Dog Whelk
						matchE1   = critterList[11][1];
						matchE1name   = critterList[11][0];
						matchE1latin   = critterList[11][2];
						matchE1right   = critterList[11][3];
						matchE2   = critterList[0][1];
						matchE2name   = critterList[0][0];
						matchE2latin   = critterList[0][2];
						matchE2right   = critterList[0][3];
						matchEblurb = speciesList[15][3]; // the "you're right" text
						matchE3   = critterList[34][1];
						matchE3name   = critterList[34][0];
						matchE3latin   = critterList[34][2];
						matchE3right   = critterList[34][3];
						break;
					case 2:
						gamebg = "game2_final.png";
						gamename = "Look for Sea Stars";
						critterType = "Sea Stars";
						numCritters = 4;
						$('#videotimesUp').attr('src', "reefer/RR_game2_waveTransition_01.mov");
						$('#maggieBG').css({background: "url(game2_zoom.png)" });
						$('#timesUp').css('background', 'url("reefer/game2_blue.png")');
						$('#matchscreen').css('background', 'url("reefer/game2_blue.png")');
						$('#rightanswer').css('background', 'url("reefer/game2_blue.png")');
						$('#wronganswer').css('background', 'url("reefer/game2_blue.png")');
						$('#npcanswer').css('background', 'url("reefer/game2_blue.png")');
						$('#resultsScreen').css('background', 'url("reefer/game2_blue.png")');
						$('#matchtext').text("Look closely — which of these sea stars did you find?");
						$('#howToPlay').css({"background": "url('reefer/Game2_Intro.png')"});
						$('#blurb').text("Compare the sea star’s size and texture. Which one matches?");
						$('#iNatHead').text("Join the Team");
						$('#iNatExpos').text("Exploring tidepools is fun! Do it on your own, or join a group.  Your work, along with that of other volunteers, will help document our tidepool species diversity. ");
						var _thetop=1;
						var _toplocation=500;
						obj1xpos = 1140; // findable objects
						obj1ypos = 827; // findable objects
						obj2xpos = 1090; // findable objects
						obj2ypos = 315; // findable objects
						obj3xpos = 585; // findable objects
						obj3ypos = 747; // findable objects
						obj4xpos = 1477; // findable objects
						obj4ypos = 633; // findable objects
						obj5xpos = -51; // findable objects
						obj5ypos = -51; // findable objects

						npc1xpos = 605; // non-player characters
						npc1ypos = 248; // non-player characters
						npc2xpos = 716; // non-player characters
						npc2ypos = 857; // non-player characters
						npc3xpos = 452; // non-player characters
						npc3ypos = 712; // non-player characters
						npc4xpos = 762; // non-player characters
						npc4ypos = 392; // non-player characters
						npc1text = "That's not a sea star!";
						npc1expos = "Try again. This is a sea urchin.";
						npc1image = "reefer/Urchin.png";
						npc2text = "That's not a sea star!";
						npc2expos = "Try again, that's a green anemone";
						npc2image = "reefer/GreenAnemone.png";
						npc3text = "That's not a sea star!";
						npc3expos = "Try again, that's a kelp crab";
						npc3image = "reefer/KelpCrab.png";
						npc4text = "That's not a sea star!";
						npc4expos = "Try again, that's a hermit crab";
						npc4image = "reefer/BrownHermitCrab.png";
						
						$('#badge').attr('src', "reefer/TC_BadgeLockup_SeaStar_TranspBkgd_200x200_140605.png");

						window.history.replaceState('page2', 'Title', '/_gamev10/?G=1');
						
						$('#spec1').attr('src', "reefer/DwarfMoltedStar.png").css({"left": obj1xpos-40,
																			  "top": obj1ypos-20});
						$('#spec2').attr('src', "reefer/LeatherStar.png").css({"left": obj2xpos-40,
																			  "top": obj2ypos-10});
						$('#spec3').attr('src', "reefer/JuvenileOchreStar.png").css({"left": obj3xpos-40,
																			  "top": obj3ypos-10});
						$('#spec4').attr('src', "reefer/OchreStar.png").css({"left": obj4xpos-40,
																			  "top": obj4ypos-10});
						$('#spec5').hide();
						$('#nameOfGame').text(gamename);
						youSpottedSome = "Great!  You spotted a lot of sea stars";
						youSpottedLots = "Excellent! You're a skilled spotter";
						endingTitle = "You’re Great at Spotting Sea Stars!";
						crittersSalut = "Sea stars spotted!"
						matchA1   = critterList[16][1];
						matchA1name   = critterList[16][0];
						matchA1latin   = critterList[16][2];
						matchA1right   = critterList[16][3];
						matchAblurb = speciesList[6][3]; // the "you're right" text
						matchA2   = critterList[15][1];
						matchA2name   = critterList[15][0];
						matchA2latin   = critterList[15][2];
						matchA2right   = critterList[15][3];
						matchA3   = critterList[17][1];
						matchA3name   = critterList[17][0];
						matchA3latin   = critterList[17][2];
						matchA3right   = critterList[17][3];
						// Leather Star
						matchB1   = critterList[13][1];
						matchB1name   = critterList[13][0];
						matchB1latin   = critterList[13][2];
						matchB1right   = critterList[13][3];
						matchB2   = critterList[14][1];
						matchB2name   = critterList[14][0];
						matchB2latin   = critterList[14][2];
						matchB2right   = critterList[14][3];
						matchB3   = critterList[12][1];
						matchB3name   = critterList[12][0];
						matchB3latin   = critterList[12][2];
						matchB3right   = critterList[12][3];
						matchBblurb = speciesList[5][3]; // the "you're right" text
						// Juv Ochre Star
						matchC1   = critterList[18][1];
						matchC1name   = critterList[18][0];
						matchC1latin   = critterList[18][2];
						matchC1right   = critterList[18][3];
						matchC2   = critterList[19][1];
						matchC2name   = critterList[19][0];
						matchC2latin   = critterList[19][2];
						matchC2right   = critterList[19][3];
						matchCblurb = speciesList[8][3]; // the "you're right" text
						matchC3   = critterList[17][1];
						matchC3name   = critterList[17][0];
						matchC3latin   = critterList[17][2];
						matchC3right   = critterList[17][3];
						// Ochre Star
						matchD1   = critterList[16][1];
						matchD1name   = critterList[16][0];
						matchD1latin   = critterList[16][2];
						matchD1right   = critterList[16][3];
						matchDblurb = speciesList[7][3]; // the "you're right" text
						matchD2   = critterList[13][1];
						matchD2name   = critterList[13][0];
						matchD2latin   = critterList[13][2];
						matchD2right   = critterList[13][3];
						matchD3   = critterList[20][1];
						matchD3name   = critterList[20][0];
						matchD3latin   = critterList[20][2];
						matchD3right   = critterList[20][3];
						// nothin
						matchE1   = critterList[0][1];
						matchE1name   = critterList[0][0];
						matchE1latin   = critterList[0][2];
						matchE1right   = critterList[0][3];
						matchE2   = critterList[2][1];
						matchE2name   = critterList[2][0];
						matchE2latin   = critterList[2][2];
						matchE2right   = critterList[2][3];
						matchEblurb = speciesList[4][3]; // the "you're right" text
						matchE3   = critterList[1][1];
						matchE3name   = critterList[1][0];
						matchE3latin   = critterList[1][2];
						matchE3right   = critterList[1][3];
						break;
					case 3:
						gamebg = "game3_final.png";
						gamename = "Discover Sea Slugs";
						critterType = "Sea Slugs";
						crittersSalut = "Sea slugs discovered!"
						numCritters = 6;
						$('#maggieBG').css({background: "url(game3_zoom.png)" });
						$('#videotimesUp').attr('src', "reefer/RR_game3_waveTransition_01.mov");
						$('#maggieBG').css({background: "url(game3_zoom.png)" });
						$('#timesUp').css('background', 'url("reefer/game3_blue.png")');
						$('#matchscreen').css('background', 'url("reefer/game3_blue.png")');
						$('#rightanswer').css('background', 'url("reefer/game3_blue.png")');
						$('#wronganswer').css('background', 'url("reefer/game3_blue.png")');
						$('#npcanswer').css('background', 'url("reefer/game1_blue.png")');
						$('#resultsScreen').css('background', 'url("reefer/game3_blue.png")');
						$('#matchtext').text("Look closely — which of these sea slugs did you find?");
						$('#howToPlay').css({"background": "url('reefer/Game3_Intro.png')"});
						$('#blurb').text("Compare the sea slug’s color and patterns. Which one matches?");
						
						$('#iNatHead').text("An Easy Way to Help ");
						$('#iNatExpos').text("Your discoveries, shared with a supportive online community, can help build a better understanding of a changing ecosystem.");
						var _thetop=1;
						var _toplocation=500;
						obj1xpos = 860; // findable objects
						obj1ypos = 385; // findable objects
						obj2xpos = 1090; // findable objects
						obj2ypos = 685; // findable objects
						obj3xpos = 406; // findable objects
						obj3ypos = 782; // findable objects
						obj4xpos = 530; // findable objects
						obj4ypos = 610; // findable objects
						obj5xpos = 1326; // findable objects
						obj5ypos = 187; // findable objects
						obj6xpos = 300; // findable objects
						obj6ypos = 450; // findable objects
						
						npc1xpos = 1135; // non-player characters
						npc1ypos = 479; // non-player characters
						npc2xpos = 659; // non-player characters
						npc2ypos = 915; // non-player characters
						npc3xpos = -51; // non-player characters
						npc3ypos = -51; // non-player characters
						npc4xpos = -51; // non-player characters
						npc4ypos = -51; // non-player characters
						npc1text = "That's not a sea slug!";
						npc1expos = "Try again. This is a sea urchin.";
						npc1image = "reefer/Urchin.png";
						npc2text = "That's not a sea star!";
						npc2expos = "Try again, that's a yellow hermit crab";
						npc2image = "reefer/YellowHermitCrab.png";
						npc3text = "That's not a sea star!";
						npc3expos = "Try again, that's a kelp crab";
						npc3image = "reefer/KelpCrab.png";
						npc4text = "That's not a sea star!";
						npc4expos = "Try again, that's a hermit crab";
						npc4image = "reefer/BrownHermitCrab.png";
						
						$('#badge').attr('src', "reefer/TC_BadgeLockup_Slug_TranspBkgd_200x200_140605.png");
						
						window.history.replaceState('page2', 'Title', '/_gamev10/?G=2');

						
						$('#spec1').attr('src', "reefer/SpottedDorid.png").css({"left": obj1xpos-40,
																			  "top": obj1ypos-20});
						$('#spec2').attr('src', "reefer/SeaClown.png").css({"left": obj2xpos-40,
																			  "top": obj2ypos-10});
						$('#spec3').attr('src', "reefer/HopkinsRose.png").css({"left": obj3xpos-40,
																			  "top": obj3ypos-10});
						$('#spec4').attr('src', "reefer/OpalNudi.png").css({"left": obj4xpos-40,
																			  "top": obj4ypos-10});
						$('#spec5').attr('src', "reefer/SeaLemon.png").css({"left": obj5xpos-40,
																			  "top": obj5ypos-10});
						$('#spec6').attr('src', "reefer/SanDiegoDorid.png").css({"left": obj6xpos-40,
																			  "top": obj6ypos-10});
						$('#nameOfGame').text(gamename);
						youSpottedSome = "Great! You spotted a lot of sea slugs";
						youSpottedLots = "Excellent! You're a skilled spotter";
						endingTitle = "You’re a Natural at Discovering Sea Slugs! ";
						matchA1   = critterList[23][1];
						matchA1name   = critterList[23][0];
						matchA1latin   = critterList[23][2];
						matchA1right   = critterList[23][3];
						matchAblurb = speciesList[9][3]; // the "you're right" text
						matchA2   = critterList[21][1];
						matchA2name   = critterList[21][0];
						matchA2latin   = critterList[21][2];
						matchA2right   = critterList[21][3];
						matchA3   = critterList[22][1];
						matchA3name   = critterList[22][0];
						matchA3latin   = critterList[22][2];
						matchA3right   = critterList[22][3];
						// Sea Clown
						matchB1   = critterList[26][1];
						matchB1name   = critterList[26][0];
						matchB1latin   = critterList[26][2];
						matchB1right   = critterList[26][3];
						matchB2   = critterList[24][1];
						matchB2name   = critterList[24][0];
						matchB2latin   = critterList[24][2];
						matchB2right   = critterList[24][3];
						matchB3   = critterList[25][1];
						matchB3name   = critterList[25][0];
						matchB3latin   = critterList[25][2];
						matchB3right   = critterList[25][3];
						matchBblurb = speciesList[10][3]; // the "you're right" text
						// Hopkin's Rose
						matchC1   = critterList[27][1];
						matchC1name   = critterList[27][0];
						matchC1latin   = critterList[27][2];
						matchC1right   = critterList[27][3];
						matchC2   = critterList[22][1];
						matchC2name   = critterList[22][0];
						matchC2latin   = critterList[22][2];
						matchC2right   = critterList[22][3];
						matchCblurb = speciesList[11][3]; // the "you're right" text
						matchC3   = critterList[28][1];
						matchC3name   = critterList[28][0];
						matchC3latin   = critterList[28][2];
						matchC3right   = critterList[28][3];
						// Opal Nudi
						matchD1   = critterList[25][1];
						matchD1name   = critterList[25][0];
						matchD1latin   = critterList[25][2];
						matchD1right   = critterList[25][3];
						matchDblurb = speciesList[12][3]; // the "you're right" text
						matchD2   = critterList[23][1];
						matchD2name   = critterList[23][0];
						matchD2latin   = critterList[23][2];
						matchD2right   = critterList[23][3];
						matchD3   = critterList[29][1];
						matchD3name   = critterList[29][0];
						matchD3latin   = critterList[29][2];
						matchD3right   = critterList[29][3];
						// SeaLemon
						matchE1   = critterList[23][1];
						matchE1name   = critterList[23][0];
						matchE1latin   = critterList[23][2];
						matchE1right   = critterList[23][3];
						matchE2   = critterList[33][1];
						matchE2name   = critterList[33][0];
						matchE2latin   = critterList[33][2];
						matchE2right   = critterList[33][3];
						matchEblurb = speciesList[14][3]; // the "you're right" text
						matchE3   = critterList[25][1];
						matchE3name   = critterList[25][0];
						matchE3latin   = critterList[25][2];
						matchE3right   = critterList[25][3];
						// San Diego
						matchF1   = critterList[30][1];
						matchF1name   = critterList[30][0];
						matchF1latin   = critterList[30][2];
						matchF1right   = critterList[30][3];
						matchF2   = critterList[25][1];
						matchF2name   = critterList[25][0];
						matchF2latin   = critterList[25][2];
						matchF2right   = critterList[25][3];
						matchFblurb = speciesList[13][3]; // the "you're right" text
						matchF3   = critterList[22][1];
						matchF3name   = critterList[22][0];
						matchF3latin   = critterList[22][2];
						matchF3right   = critterList[22][3];
						break;
			}

			intro.getstarted();	
		}
	}

	var intro = {
		// The how to play screen.
		"getstarted" : function() {
			// add text/images
			// animate helpscreen

			$('#introName').text(gamename);
			$('#introName').fadeIn(300).css({"opacity": "1"});
			$('#howToPlay').fadeIn(300); 
			$('#glass').fadeIn().animate({left: 210, top: 350 }, 800);
			$('#glass').animate({left: 210, top: 340 }, 1000);
			$('#glass').animate({left: 1085, top: 27 }, 800);
			$('#glass').animate({left: 1095, top: 28 }, 800);
			$('#glass').animate({left: 1225, top: 775  }, 800);
			$('#glass').animate({left: 1190, top: 775 }, 800);
			$('#glass').animate({left: 350, top: 800 }, 900);
			$('#glass').animate({left: 345, top: 790 }, 900);
			domhowtoplay.addEventListener('click', function() {
				gameboard.playit(); 
                setTimeout(function(){
				$('#introName').animate({ top: -200, opacity: 0 }, 700);
				$('#maggie').animate({left: 765, top: 325}, 500);
				$('#howToPlay').hide();
				$('#glass').hide();
				$('#attract').hide();
                }, 500);
			}, false);
		}
	};

	var gameboard = {
		// The main gameplay
		"playit" : function() {

			$('#maggieBG').css('backgroundPosition', ' 1170px 560px');
			critterCount = 0;
			
			

			var stage = new createjs.Stage("rrCanvas");
			createjs.Touch.enable(stage);
			createjs.Sound.registerSound({id:"bzzt", src:"snd/Answer_Wrong.wav"});
			createjs.Sound.registerSound({id:"ding", src:"snd/Answer_Right.wav"});
			createjs.Sound.registerSound({id:"bloop", src:"snd/whoosh.wav"});
			createjs.Sound.registerSound({id:"splash", src:"snd/wooshwave.wav"});
			createjs.Sound.registerSound({id:"ambient", src:"snd/Ambient_Underwater.wav"});
			createjs.Sound.registerSound({id:"magin", src:"snd/Magnifier_In.wav"});
			createjs.Sound.registerSound({id:"magtouch", src:"snd/Magnifier_Press.wav"});
			createjs.Sound.registerSound({id:"magmove", src:"snd/Magnifier_Scan.wav"});
			createjs.Sound.registerSound({id:"intro", src:"snd/Tranisition_Wave_Into_Game.wav"});
			createjs.Sound.registerSound({id:"countingitems", src:"snd/Counting_Items_Found.wav"});
			createjs.Sound.registerSound({id:"choose", src:"snd/Answer_Selection_PressV3.wav"});

			var xpo;
			var ypo;
			var bg  = new createjs.Bitmap(gamebg);

			// The "pie timer" countdown deal.
			var g = new createjs.Graphics();
			g.setStrokeStyle(6, "round"); 
			g.beginStroke('#FFFFFF');
			var circ = new createjs.Shape(g);
			circ.x = 1690;
			circ.y = 38;
			circ.graphics.arc(5, 20, 50, -1.5, 4.75);

			var gg = new createjs.Graphics();
			gg.setStrokeStyle(12, "round"); 
			gg.beginStroke('#737373');
			var gcirc = new createjs.Shape(gg);
			gcirc.x = 1690;
			gcirc.y = 38;
			gcirc.graphics.arc(6, 20, 50, -1.5, 4.65);

			var og = new createjs.Graphics();
			og.setStrokeStyle(6, "round"); 
			og.beginStroke('#a3a3a3');
			var ocirc = new createjs.Shape(og);
			ocirc.x = 1690;
			ocirc.y = 38;
			ocirc.graphics.arc(5, 20, 50, -1.5, -1);

			var rg = new createjs.Graphics();
			rg.setStrokeStyle(6, "round"); 
			rg.beginStroke('#FF0F0F');
			var rcirc = new createjs.Shape(rg);
			rcirc.x = 1690;
			rcirc.y = 38;
			rcirc.graphics.arc(5, 20, 50, -1.5, 3.55);

			// The timer text / numbers
			var txt = new createjs.Text("45", "46px Arial", "#ffffff");
			txt.text = "45";
			txt.x = 1670;
			txt.y = 38;
			var timetxt = new createjs.Text("Time", "14px Whitney-Medium", "#ffffff");
			timetxt.text = "Time";
			timetxt.x = 1682;
			timetxt.y = 29;

			// Add canvas elements
			stage.addChild(bg);
			stage.addChild(gcirc);
			stage.addChild(circ);
			stage.addChild(ocirc);
			stage.addChild(txt);
			stage.addChild(timetxt);

			
			createjs.Sound.play("ambient");

			createjs.Ticker.addEventListener("tick", handleTick);
			$('#title').fadeIn(600);
			$('#nameOfGame').fadeIn(600);
			$('#help').fadeIn(600);

			var starttime = new Date().getTime();
			var nowtime = new Date().getTime();
			var elapsed ;
			var dur = 45;  //DURATION
			var arcthing = -1;
			var newsource = -1.5;

			// The heartbeat of the main gameplay
			function handleTick(event) {
				if (timerVar == 0) {
					dur = txt.text;
					starttime =  new Date().getTime();
				} else if((txt.text < 1) && (timerVar == 1)) {
					// Time's up, bring in the wave
					timerVar = 0;
					transitions.wavewipeout(1);
					//createjs.Bitmap(gamebg_blue);
					//stage.addChild(bg);
				} else if ((txt.text < 10) && (timerVar == 1)) {
					// Time's running down, it's all glowing urgent
					nowtime = new Date().getTime();
					elapsed = dur - (Math.ceil((nowtime - starttime)/1000));
					stage.addChild(rcirc);
					og.beginStroke('#FF0F0F');
					txt.x = 1684;
					txt.color = '#FF0F0F';
					timetxt.color = '#FF0F0F';
					txt.text = elapsed;
					newsource = arcthing;
					arcthing += .0075;
					ocirc.graphics.arc(5, 20, 50, newsource, arcthing);
				} else if ((txt.text > 0) && (timerVar == 1)) {
					nowtime = new Date().getTime();
					elapsed = dur - (Math.ceil((nowtime - starttime)/1000));
					txt.text = elapsed;
					newsource = arcthing;
					arcthing += .0067;
					ocirc.graphics.arc(5, 20, 50, newsource, arcthing);
				}
				stage.update();
			}
			stage.update();
		},

		"findtheobjects" : function() {
			// zoomy text
			// add sprites
			// sprite animate
			// sprite size/positions
			// detect collisions

		},

		"npcscreen" : function(whichnpc) {
			// Non-player character
			$('#npcanswer').show(300);
			switch(whichnpc) {
				case 1:
					//
					$('#npcTitle').text(npc1text);
					$('#npcExpos').text(npc1expos);
					$('#npcImage').attr({"src": npc1image });
					break;
				case 2:
					//
					$('#npcTitle').text(npc2text);
					$('#npcExpos').text(npc2expos);
					$('#npcImage').attr({"src":  npc2image });
					break;
				case 3:
					//
					$('#npcTitle').text(npc3text);
					$('#npcExpos').text(npc3expos);
					$('#npcImage').attr({"src":  npc3image});
					break;
				case 4:
					//
					$('#npcTitle').text(npc4text);
					$('#npcExpos').text(npc4expos);
					$('#npcImage').attr({"src":  npc4image});
					break;
			}
			
			setTimeout(function() {
				$('#npcanswer').fadeOut(300);
				onMainScreen=1;
			}, 2250);
		},
		"matchscreen" : function(whichun) {
			//
			$('#matchscreen').fadeIn(1000);
			timerVar = 0 ;

			switch(whichun) {
					case 1:
						critter = '#spec1';
						matchright1 = matchA1right;
						matchright2 = matchA2right; 
						matchright3 = matchA3right; 
						name = matchA1name;
						lat = matchA1latin;
						blurb = matchAblurb;
						$('#crit1').attr('src', matchA1).animate({opacity: 1});
						$('#crit1DName').text(matchA1name);
						$('#crit1LName').text(matchA1latin);
						$('#crit2').attr('src', matchA2).animate({opacity: 1});
						$('#crit2DName').text(matchA2name);
						$('#crit2LName').text(matchA2latin);
						$('#crit3').attr('src', matchA3).animate({opacity: 1});
						$('#crit3DName').text(matchA3name);
						$('#crit3LName').text(matchA3latin);
						break;
					case 2:
						critter = '#spec2';
						matchright1 = matchB1right;
						matchright2 = matchB2right; 
						matchright3 = matchB3right; 
						name = matchB3name;
						lat = matchB3latin;
						blurb = matchBblurb;
						$('#crit1').attr('src', matchB1).animate({opacity: 1});
						$('#crit1DName').text(matchB1name);
						$('#crit1LName').text(matchB1latin);
						$('#crit2').attr('src', matchB2).animate({opacity: 1});
						$('#crit2DName').text(matchB2name);
						$('#crit2LName').text(matchB2latin);
						$('#crit3').attr('src', matchB3).animate({opacity: 1});
						$('#crit3DName').text(matchB3name);
						$('#crit3LName').text(matchB3latin);
						break;
					case 3:
						critter = '#spec3';
						matchright1 = matchC1right;
						matchright2 = matchC2right; 
						matchright3 = matchC3right; 
						name = matchC2name;
						lat = matchC2latin;
						blurb = matchCblurb;
						$('#crit1').attr('src', matchC1).animate({opacity: 1});
						$('#crit1DName').text(matchC1name);
						$('#crit1LName').text(matchC1latin);
						$('#crit2').attr('src', matchC2).animate({opacity: 1});
						$('#crit2DName').text(matchC2name);
						$('#crit2LName').text(matchC2latin);
						$('#crit3').attr('src', matchC3).animate({opacity: 1});
						$('#crit3DName').text(matchC3name);
						$('#crit3LName').text(matchC3latin);
						break;
					case 4:
						critter = '#spec4';
						matchright1 = matchD1right;
						matchright2 = matchD2right; 
						matchright3 = matchD3right; 
						name = matchD1name;
						lat = matchD1latin;
						blurb = matchDblurb;
						$('#crit1').attr('src', matchD1).animate('opacity', "1");
						$('#crit1DName').text(matchD1name);
						$('#crit1LName').text(matchD1latin);
						$('#crit2').attr('src', matchD2).animate('opacity', "1");
						$('#crit2DName').text(matchD2name);
						$('#crit2LName').text(matchD2latin);
						$('#crit3').attr('src', matchD3).animate('opacity', "1");
						$('#crit3DName').text(matchD3name);
						$('#crit3LName').text(matchD3latin);
						break;
					case 5:
						critter = '#spec5';
						matchright1 = matchE1right;
						matchright2 = matchE2right;
						matchright3 = matchE3right;
						name = matchE2name;
						lat = matchE2latin;
						blurb = matchEblurb;
						$('#crit1').attr('src', matchE1).animate('opacity', "1");
						$('#crit1DName').text(matchE1name);
						$('#crit1LName').text(matchE1latin);
						$('#crit2').attr('src', matchE2).animate('opacity', "1");
						$('#crit2DName').text(matchE2name);
						$('#crit2LName').text(matchE2latin);
						$('#crit3').attr('src', matchE3).animate('opacity', "1");
						$('#crit3DName').text(matchE3name);
						$('#crit3LName').text(matchE3latin);
						break;
					case 6:
						critter = '#spec6';
						matchright1 = matchF1right;
						matchright2 = matchF2right;
						matchright3 = matchF3right;
						name = matchF2name;
						lat = matchF2latin;
						blurb = matchFblurb;
						$('#crit1').attr('src', matchF1).animate('opacity', "1");
						$('#crit1DName').text(matchF1name);
						$('#crit1LName').text(matchF1latin);
						$('#crit2').attr('src', matchF2).animate('opacity', "1");
						$('#crit2DName').text(matchF2name);
						$('#crit2LName').text(matchF2latin);
						$('#crit3').attr('src', matchF3).animate('opacity', "1");
						$('#crit3DName').text(matchF3name);
						$('#crit3LName').text(matchF3latin);
						break;
			}

			$(critter).fadeIn().animate({
						left: 200, 
						top: 300,
						width: 650,
						height: 650,
						opacity: 0.8});
						
			$('#blueCircle').show();

			createjs.Sound.play("bloop");

			$('#crit1').bind("click", function(){
													createjs.Sound.play("choose");
													$('#crit1').animate({ width: 265, height: 265 }, 300);
													setTimeout(function(){
														gameboard.rightOrWrong(matchright1, name, lat, blurb, crit1, critter, 1000, 200);
													}, 300);
									});
			$('#crit2').bind("click", function(){
													createjs.Sound.play("choose");
													$('#crit2').animate({ width: 265, height: 265 }, 300);
													setTimeout(function(){
														gameboard.rightOrWrong(matchright2, name, lat, blurb, crit2, critter, 1075, 500);
													}, 300);
									});
			$('#crit3').bind("click", function(){
													createjs.Sound.play("choose");
													$('#crit3').animate({ width: 265, height: 265 }, 300);
													setTimeout(function(){
														gameboard.rightOrWrong(matchright3, name, lat, blurb, crit3, critter, 1000, 800);
													}, 300);
									});
			$('#crit1').fadeIn().animate({ left: 1000,   top: 200   }, 700, 'easeOutBack' );
			$('#crit2').fadeIn().animate({ left: 1075,   top: 500   }, 500, 'easeOutBack' );
			$('#crit3').fadeIn().animate({ left: 1000,   top: 800   }, 300, 'easeOutBack' );
			$('#crit1Dox').fadeIn();
			$('#crit2Dox').fadeIn();
			$('#crit3Dox').fadeIn();
		},

		"rightOrWrong" : function(right, name, lat, blurb, crit, spec, leftPos, topPos) {
			if (right == 1) {
				critterCount += 1;
				$(spec).animate({
					top: 200,
					left: 100,
					width: 665,
					height: 665,
					opacity: 1
				}).css("z-index", "101");
				$(crit).css("z-index", "100").animate({
					top: 300,
					left: 475,
					width: 425,
					height: 425,
					opacity: 1
				});
				$('#notebook').show();
				$('#rightName').text(blurb);
				$('#rightLatin').text(lat);
				$('#rightanswer').show();
				createjs.Sound.play("ding");
				timerVar = 1;
				$('#crit1').unbind("click");
				$('#crit2').unbind("click");
				$('#crit3').unbind("click");
				switch(_thetop) {
					case 1:
						_toplocation = 1575;
						_thetop = 2;
						$('#notebook1').show();
						break;
					case 2:
						_toplocation = 1500;
						_thetop = 3;
						$('#notebook2').show();
						break;
					case 3:
						_toplocation = 1425;
						_thetop = 4;
						$('#notebook3').show();
						break;
					case 4:
						_toplocation = 1350;
						_thetop = 5;
						$('#notebook4').show();
						break;
					case 5:
						_toplocation = 1275;
						_thetop = 6;
						$('#notebook5').show();
						break;
					case 6:
						_toplocation = 1200;
						_thetop = 7;
						$('#notebook6').show();
						break;
					};
				// add Critter to the array
				critArr.push(crit);
				$('#blueCircle').hide();
				if (critterCount == numCritters) {
					setTimeout(function() {
						transitions.wavewipeout(0);
					}, 2500);
				}
				setTimeout(function(){
						$('#rightanswer').fadeOut();
						$('#matchscreen').fadeOut();
						$('#crit1').fadeOut().animate({
							top: -300,
							width: 250,
							height: 250,
							opacity: 1 }).css("z-index", "55");
						$('#crit2').fadeOut().animate({
							top: -300,
							width: 250,
							height: 250,
							opacity: 1 }).css("z-index", "55");
						$('#crit3').fadeOut().animate({
							top: -300,
							width: 250,
							height: 250,
							opacity: 1 }).css("z-index", "55");
						$('#crit1Dox').fadeOut();
						$('#crit2Dox').fadeOut();
						$('#crit3Dox').fadeOut();
						
						$(spec).animate({
							top: 25,
							left: _toplocation,
							width: 60,
							height: 60,
							opacity: 1
						}).css("z-index", "20");
					}, '3200');
			} else {
					$('#wronganswer').fadeIn(300);
					$(crit).css("z-index", "101").animate({
						top: 375,
						left: 450,
						width: 400,
						height: 400,
						opacity: 1
					});
					createjs.Sound.play("bzzt");
					setTimeout(function(){
						$('#wronganswer').fadeOut(300);
						$(crit).animate({
							top: topPos,
							left: leftPos,
							width: 250,
							height: 250,
							opacity: 0.55
						}).css("z-index", "55");
					}, '2800');
			}
		},

		"helpMe" : function() {
			// intro help screen
		},

		"backToMain" : function() {
			//
		}
	};

	var transitions = {
		// Transition screens
		"wavewipeout" : function(timesout) {
			$('#maggie').animate({left: 790, top: 1540}, 900); 
			createjs.Sound.play("splash");
			$('#videotimesUp').show();
			document.getElementById('videotimesUp').play();
			// go to results screen
			if (timesout == 1) {
				setTimeout(function() {
					// document.getElementById('videotimesUp').pause();
					transitions.timesUpscreen();
				}, 6100);
			} else {
				timerVar = 0;
				setTimeout(function() {
					transitions.resultsscreen();
				}, 5750);
			}
		},

		"timesUpscreen" : function() {
			// timesUp
			$('#timesUp').fadeIn(100);
            $('#videotimesUp').fadeOut(100, function() {
				$('#videotimesUp').css({"src": ""});
			});
			$('#timesUpHead').animate({fontSize:'150px'}, 100);
			setTimeout(function() {
				transitions.resultsscreen();
			}, 2250);
		},

		"resultsscreen" : function() {
			$('#timesUp').fadeOut(300);
            $('#videotimesUp').fadeOut(100, function() {
				$('#videotimesUp').css({"src": ""});
			});
			//
			$('#resultsScreen').fadeIn(200);
			$('#youFoundThisMany').text(critterCount);
			$('#youFoundThisSentence').text(crittersSalut);
			/* 
			for (var i = 1; i < 6; i++) {
				differ = Math.floor((Math.random() * 40) + 3);
				winner = document.getElementById(spec + i);
				winner.style.zIndex="108";
				winner.style.left=500+differ;
				winner.style.top=350+differ;
				winner.style.width=350;
				winner.style.height=350;
				winner = "";
				if (i == (critArr.length)) { break; }
				// switch to %
			}*/

			createjs.Sound.play("countingitems");
			$('#spec1').animate({left: 450, top: 275, opacity: 1, width: 400, height: 400 }, 300).css("z-index", "108");
			$('#spec2').animate({left: 450, top: 275, opacity: 1, width: 400, height: 400 }, 300).css("z-index", "108");
			$('#spec3').animate({left: 450, top: 275, opacity: 1, width: 400, height: 400 }, 300).css("z-index", "108");
			$('#spec4').animate({left: 450, top: 275, opacity: 1, width: 400, height: 400 }, 300).css("z-index", "108");
			$('#bigWhite').show();
			// $('#spec5').animate({left: 445, top: 270, opacity: 1, width: 400, height: 400 }, 300).css("z-index", "108");

			setTimeout(function() {
				$('#xcheat').fadeOut();
				perCent = Math.floor(critterCount/numCritters*100);
				$('#youFoundThisMany').fadeOut(330, function() {
					$('#youFoundThisMany').fadeIn(330).text(perCent + "%" );
					if (critterCount < 2) {
						$('#youFoundThisSentence').text("Nice! A few went uncounted");
					} else if (critterCount > 3){
						$('#youFoundThisSentence').text(youSpottedSome);
					}
					else {
						$('#youFoundThisSentence').text(youSpottedLots);
					}
				});
			}, 2600);

			setTimeout(function() {
				transitions.finalscreen();
			}, 5000);
		},

		"finalscreen" : function() {
			var lastScreen = setTimeout(function() {
				window.location.href = "?attract=1";
			}, 15000);
			$('#endingTitle').text(endingTitle);
			$('#bigWhite').hide();
			$('#youDone').fadeIn(800);

			// iNat

			setTimeout(function() {
				 $('#iNatTicTacs').css({"left": iNatList[0][3],
										"top": iNatList[0][4] });
				$('#iNatImage').css({"src": iNatList[0][1]});
				$('#iNatID').text(iNatList[0][0]);
				$('#iNatTTExpos').text(iNatList[0][2]);
				$('#iNatTicTacs').fadeIn(1100, function() {
					$('#iNatTicTacs').fadeOut(2000);
				}); 
			}, 1000);

			setTimeout(function() {
				$('#iNatTicTacs2').css({"left": iNatList[1][3],
										"top": iNatList[1][4]  });
				$('#iNatImage2').css({"src": iNatList[1][1]});
				$('#iNatID2').text(iNatList[1][0]);
				$('#iNatTTExpos2').text(iNatList[1][2]);
				$('#iNatTicTacs2').fadeIn(1100, function() {
					$('#iNatTicTacs2').fadeOut(2000);
				}); 
			}, 2000);

			setTimeout(function() {
				 $('#iNatTicTacs').css({"left": iNatList[2][3],
										"top": iNatList[2][4]  });
				$('#iNatImage').css({"src": iNatList[2][1]});
				$('#iNatID').text(iNatList[2][0]);
				$('#iNatTTExpos').text(iNatList[2][2]);
				$('#iNatTicTacs').fadeIn(1100, function() {
					$('#iNatTicTacs').fadeOut(2000);
				}); 
			}, 4500);

			setTimeout(function() {
				$('#iNatTicTacs2').css({"left": iNatList[3][3],
										"top": iNatList[3][4] });
				$('#iNatImage2').css({"src": iNatList[3][1]});
				$('#iNatID2').text(iNatList[3][0]);
				$('#iNatTTExpos2').text(iNatList[3][2]);
				$('#iNatTicTacs2').fadeIn(1100, function() {
					$('#iNatTicTacs2').fadeOut(2000);
				}); 
			}, 6000);

			setTimeout(function() {
				 $('#iNatTicTacs').css({"left": iNatList[4][3],
										"top": iNatList[4][4]  });
				$('#iNatImage').attr({"src": iNatList[4][1]});
				$('#iNatID').text(iNatList[4][0]);
				$('#iNatTTExpos').text(iNatList[4][2]);
				$('#iNatTicTacs').fadeIn(1100, function() {
					$('#iNatTicTacs').fadeOut(2000);
				}); 
			}, 8000);

			setTimeout(function() {
				$('#iNatTicTacs2').css({"left": iNatList[5][3],
										"top": iNatList[5][4]  });
				$('#iNatImage2').attr({"src": iNatList[5][1]});
				$('#iNatID2').text(iNatList[5][0]);
				$('#iNatTTExpos2').text(iNatList[5][2]);
				$('#iNatTicTacs2').fadeIn(1100, function() {
					$('#iNatTicTacs2').fadeOut(2000);
				}); 
			}, 9000);
	
			// go to signup
        	$('#endingClaim').click(function() {
				clearTimeout(lastScreen);
				lastScreen = setTimeout(function() {
					window.location.href = "?attract=1";
				}, 30000);  
				
				MktoForms2.loadForm("http://app-sjp.marketo.com", "945-SMH-086", 1053, function(form){
					//Add an onSuccess handler
					form.onSuccess(function(values, followUpUrl){
						$('#emailHeader').text("Success!  Your reward is on its way!");
						$('#emailSubTitle').hide();
						//get the form's jQuery element and hide it
						form.getFormElem().hide();
						//return false to prevent the submission handler from taking the lead to the follow up url.
						return false;
					});
				});

				$('#emailz').fadeIn(800);
				jsKeyboard.currentElement = $('#Email');
				jsKeyboard.show();
					$('#Email').on("focus", "jsKeyboard.focus('#Email');");
					jsKeyboard.focus("#Email");
				
			$('#emailz').click(function(){ 
					clearTimeout(lastScreen);
					clearTimeout(emailTimeout);
					$('#Email').on("focus", "jsKeyboard.focus('#Email');");
					jsKeyboard.focus("#Email");
					$('#Email').focus();
					emailTimeout = setTimeout(function(){
						window.location.href = "?attract=1";
					}, 7000 );
				});
				
			});

			
			$('#playAgain').click(function() {
				window.location.href = "?attract=0";
			});



		}
	};

	this.initialize = function() {

		gamesetup.loadvars(theGame);

	};

}