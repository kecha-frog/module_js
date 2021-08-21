export  default function createCalcDate () {
	const dateDiffForm = document.getElementById("dateDiffForm");

	const labelDateFrom =document.createElement("label");
	labelDateFrom.id = "labelDateFrom";
	labelDateFrom.for = "dateFrom";
	labelDateFrom.innerText = "Первая дата: ";

	const labelDateTo =document.createElement("label");
	labelDateTo.id = "labelDateTo";
	labelDateTo.for = "dateTo";
	labelDateTo.innerText = "Вторая дата: ";

	const inputDateFrom = document.createElement("input");
	inputDateFrom.type = "date";
	inputDateFrom.name = "dateFrom";
	inputDateFrom.id = "dateFrom";

	const inputDateTo = document.createElement("input");
	inputDateTo.type = "date";
	inputDateTo.name = "dateTo";
	inputDateTo.id = "dateTo";

	const buttonSubmit = document.createElement("button");
	buttonSubmit.type = "submit";
	buttonSubmit.id = "buttonForm";
	buttonSubmit.textContent = "Рассчитать промежуток";


	dateDiffForm.append(labelDateFrom);
	labelDateFrom.append(inputDateFrom);
	dateDiffForm.append(labelDateTo);
	labelDateTo.append(inputDateTo);
	dateDiffForm.append(buttonSubmit);
}

