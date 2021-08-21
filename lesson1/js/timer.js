import {DateTime} from "./luxon.js";
import {writeDiffOutput} from "./output.js";
import calcDiff from "./calcDiff.js";
/*import {sound} from "./playSound.js";*/


export default function timer(timerUser) {
	const timerArray = timerUser.split(":");
	let dateNow = DateTime.local();
	const dateOff = dateNow.plus({hours: timerArray[0],  minutes:timerArray[1], seconds:  timerArray[2]});

	const outputParagraph = document.getElementById("outputParagraph");
	const buttonStart = document.getElementById("buttonStart");
	const buttonStop = document.getElementById("buttonStop");
	buttonStart.hidden = true;
	buttonStop.hidden = false;
	buttonStop.onclick = () => timerStops(false);

	const startInterval = setInterval(() => {
		dateNow = DateTime.local();
		const objTimer = calcDiff(dateOff, dateNow, true);
		writeDiffOutput(objTimer);
		checkTimerEnd(objTimer);
	}, 1000);



	function checkTimerEnd(obj){
		if (!obj.hours && !obj.minutes && obj.seconds <= 0){
			console.log("end");
			/*sound.play()*/
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

