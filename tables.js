/*
 * Project:     Tables
 * Description: Education web mobile app that lets user practice his/her
 *              multiplication table skills.
 * Website:     http://ezraezraezra.com/class/woaa/class5/tables
 * 
 * Original Author:      Ezra Velazquez
 * 
 * Website:     http://ezraezraezra.com
 * Date:        October 2011 (Originally developed February 2011)
 * 
 */
/** Holds functionality for the multiplication table */

var the_stoptest


(function () {
	var num1;
	var num2;

	var right = 0;
	var wrong = 0;
	var min = 6;
	var max = 9;
	var miliseconds = 60000

	var $the_answer;
	var $submit;
	var $score_left;
	var $score_right;
	var $math_container;
	var $result;

	$(document).ready(function () {
		$the_answer = $("#the_answer");
		$submit = $("#submit");
		$score_left = $("#score_left");
		$score_right = $("#score_right");
		$math_container = $("#math_container");
		$the_min = $("#the_min");
		$the_max = $("#the_max")

		algorithm();
		$the_answer.focus();

		$submit.click(function () {
			checkAnswer();
		});

		$(window).keypress(function () {
			// Capture Enter Key
			if (event.keyCode == 13) {
				checkAnswer();
			}
		});
	});

	/**
	 * Check user input
	 */
	function checkAnswer() {
		if (num1 * num2 == parseInt($the_answer.val())) {
			algorithm();
			right++;
			updateScore(1);
		}
		else {
			algorithm();
			wrong++;
			updateScore(0);
		}
		$the_answer.val("");
		$the_answer.focus();
	}

	function StopTest() {

		//document.body.innerHTML = "";
		alert("You got " + right + " correct and you got " + wrong + " incorrect");
		right = 0;
		wrong = 0;
		$score_left.html("C: " + right);
		$score_right.html("W: " + wrong);
	}
	the_stoptest = StopTest;

	/**
	 * Randomly generate table
	 */
	function algorithm() {
		num1 = Math.floor(Math.random() * (max - min + 1) + min);
		num2 = Math.floor(Math.random() * (10 - 1) + 1);
		$math_container.html(num1 + " x " + num2);
	}

	/**
	 * Update visual score
	 * @param {int} 1 for correct, 0 for incorrect
	 */
	function updateScore(x) {
		if (x == 1) {
			$score_left.html("C: " + right);
		}
		else
			if (x === 0) {
				$score_right.html("W: " + wrong);
			}
	}
	window.setTimeout(StopTest, miliseconds);
})();
