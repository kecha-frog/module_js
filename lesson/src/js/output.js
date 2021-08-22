const paragraph = document.getElementById("outputParagraph");

export function writeOutput(outputValue) {
	paragraph.innerText = outputValue;
}

export function writeDiffOutput(obj, isTimer) {
	if(!isTimer){
		writeOutput(
			`Лет: ${obj.years} Месяцев: ${obj.months} Дней: ${obj.days}`
		);
	}else if(isTimer){
		writeOutput(
			`${obj.hours} : ${obj.minutes}  : ${obj.seconds.toFixed()}`
		);
	}

}
