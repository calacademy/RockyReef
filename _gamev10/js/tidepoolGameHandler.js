//
// California Rocky Reefs Tidepool Interactive.
//
//   coded by Jon Britton
//         AV&EE, California Academy of Sciences
//	
// If you can read this, try swiping the Konami Code on this interactive
// next time you're at the museum!
//

var tidepoolGameHandler = function() {
	
	// Vars used across functions


	// DOM and objects
	var domvidz 	   = document.getElementById("vid"); 
	var domattractvid  = document.getElementById("attractvid");
	var domgameselect1 = document.getElementById("gameselect1");
	var domgameselect2 = document.getElementById("gameselect2");
	var domgameselect3 = document.getElementById("gameselect3");

	var attractScreen = {
		// Attract screen, intro video, game select, etc.
		"start" : function() {
			domvidz.addEventListener('click', function(){ attractScreen.gameselect(); }, true);
			domgameselect1.addEventListener('click', function(){ attractScreen.gamechosen(1); }, true);
			domgameselect2.addEventListener('click', function(){ attractScreen.gamechosen(2); }, true);
			domgameselect3.addEventListener('click', function(){ attractScreen.gamechosen(3); }, true);
		},

		"gameselect" : function() {
			setTimeout(function() { $('#gameselect1').fadeIn(300); }, 200);
			setTimeout(function() { $('#gameselect2').fadeIn(300); }, 100);
			$('#gameselect3').fadeIn(300);
		},

		"gamechosen" : function(whichWasSelected) {
			attractScreen.cleanup();
			switch (whichWasSelected) {
				case 1:
					var tpGameplay = new tidepoolGamePlay(1, 0, 2);
					break;
				case 2:
					var tpGameplay = new tidepoolGamePlay(2, 0, 2);
					break;
				case 3:
					var tpGameplay = new tidepoolGamePlay(3, 0, 2);
					break;
			}
			$('#gameselect1').fadeIn().animate({left: -1000}, 1100);
			$('#gameselect2').fadeIn().animate({left: -1000}, 1000);
			$('#gameselect3').fadeIn().animate({left:  1930}, 1000);
			tpGameplay.initialize();
		},

		"cleanup" : function() {
			$('#vid').fadeOut(500);
			// domattractvid.css({src: ""});
			$('#attractvid').attr({src: ""});
		}
	};
	
	this.initialize = function() {
		$('#vid').fadeIn(500);
		$('#attractvid').attr({src: "reefer/tpcIntro.mp4"});
		attractScreen.start();
	};
}