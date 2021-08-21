import createCalcDate from "./render/createCalcDate.js";
import creatTimer from "./render/creatTimer.js";
import clearBox from "./clearDiv.js";
import formEvent from "./formEvent.js";

const calcDate = document.getElementById("linkCalcDate");
const timer = document.getElementById("linkTimer");

calcDate.addEventListener("click", () => {
	clearBox("dateDiffForm");
	createCalcDate();
});

timer.addEventListener("click", () => {
	clearBox("dateDiffForm");
	creatTimer();
});


formEvent();

