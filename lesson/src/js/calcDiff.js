import {isBefore, intervalToDuration} from "date-fns";

export  default function calcDiff(dateFromString, dateToString){
	if (isBefore(new Date(dateFromString), new Date(dateToString))){
		[dateToString,dateFromString] = [dateFromString, dateToString];
	}

	const dateTo = new Date(dateToString);
	const dateFrom = new Date(dateFromString);

	return intervalToDuration({
		start: dateFrom,
		end: dateTo
	});

}
