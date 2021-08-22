import {writeDiffOutput, writeOutput} from "./output.js";
import calcDiff from "./calcDiff.js";
import timer from "./timer.js";

const form = document.getElementById("dateDiffForm");

export default function formEvent () {
	form.onsubmit = (event) => {
		event.preventDefault(); // Не обновляет страницу при выполнение формы

		const formData = new FormData(event.target);

		if (!formData.get("timer")){
			const dateFrom = formData.get("dateFrom");

			const dateTo= formData.get("dateTo");

			if(!dateTo || !dateFrom){
				writeOutput("Установите значение!");
			}else {
				writeDiffOutput(calcDiff(dateFrom, dateTo), false);
			}
		}else {
			const timerUser = formData.get("timer");
			timer(timerUser, true);
		}
	};
}
