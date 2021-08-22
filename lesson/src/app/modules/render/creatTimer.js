export default function creatTimer(){
	const dateDiffForm = document.getElementById("dateDiffForm");
	const labelTimer = document.createElement("label");
	labelTimer.id = "labelDateFrom";
	labelTimer.for = "timer";
	labelTimer.innerText = "Выберите время таймера:  ";

	const chooseTimer = document.createElement("input");
	chooseTimer.type = "time";
	chooseTimer.step = "1";
	chooseTimer.id = "timer";
	chooseTimer.name = "timer";

	const buttonStart = document.createElement("button");
	buttonStart.type = "submit";
	buttonStart.textContent = "Start";
	buttonStart.id = "buttonStart";

	const buttonStop = document.createElement("button");
	buttonStop.type = "button";
	buttonStop.textContent = "Stop";
	buttonStop.id = "buttonStop";
	buttonStop.hidden = true;

	dateDiffForm.append(labelTimer);
	labelTimer.append(chooseTimer);
	dateDiffForm.append(buttonStart);
	dateDiffForm.append(buttonStop);
}
