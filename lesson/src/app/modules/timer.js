import {createOutput} from "./output.js";
import calcDiff from "./calcDiff.js";
import {add} from "date-fns";
import soundPlay from "./playSound.js";


export default function timer(timerUser) {
	let dateNow = new Date().toString();

	const timeParsing = timerUser.split(":");
	const timeUser = add(new Date(), {
		hours: timeParsing[0],
		minutes: timeParsing[1],
		seconds: timeParsing[2],
	}).toString();

	const outputParagraph = document.getElementById("outputParagraph");
	const buttonStart = document.getElementById("buttonStart");
	const buttonStop = document.getElementById("buttonStop");
	buttonStart.hidden = true;
	buttonStop.hidden = false;
	buttonStop.onclick = () => timerStops(false);

	const startInterval = setInterval(() => {
		dateNow = new Date().toString();
		const objTimer = calcDiff(timeUser, dateNow);
		createOutput(objTimer, true);
		checkTimerEnd(objTimer);
	}, 1000);

	function checkTimerEnd(obj){
		if (!obj.hours && !obj.minutes && obj.seconds <= 0){
			soundPlay();
			timerStops(true);
		}
	}

	function timerStops(isTimerEnd) {
		clearInterval(startInterval);
		buttonStart.hidden = false;
		buttonStop.hidden = true;

		if(isTimerEnd){
			outputParagraph.innerText = "Время вышло";
		}else {
			outputParagraph.innerText = "Таймер остановлен";
		}
	}
}

