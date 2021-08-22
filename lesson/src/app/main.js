import createCalcDate from "./modules/render/createCalcDate.js";
import creatTimer from "./modules/render/creatTimer.js";
import clearBox from "./modules/clearDiv.js";
import formEvent from "./modules/formEvent.js";
import pic from "../static/pic/test.png";

import "../style/main.css";
import "../style/main.scss";

console.log(pic);

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

