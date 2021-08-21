const paragraph = document.getElementById("outputParagraph");

export function writeOutput(outputValue) {
	paragraph.innerText = outputValue;
}

export function writeDiffOutput(obj) {
	if(isFinite(obj.years)){
		writeOutput(
			`Лет: ${obj.years} Месяцев: ${obj.months} Дней: ${obj.days}`
		);
	}else if(isFinite(obj.hours)){
		writeOutput(
			`${obj.hours} : ${obj.minutes}  : ${obj.seconds.toFixed()}`
		);
	}

}
