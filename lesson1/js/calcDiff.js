import {DateTime} from "./luxon.js";


export  default function calcDiff(dateFromString, dateToString, isTimer){


	if (dateToString < dateToString){
		[dateToString,dateFromString] = [dateFromString, dateToString];
	}
	const dateTo = DateTime.fromISO(dateToString);
	const dateFrom = DateTime.fromISO(dateFromString);

	if (isTimer){
		return dateFrom.diff(dateTo, ["hours", "minutes", "seconds"]).toObject();
	}

	return dateFrom.diff(dateTo, ["years", "months", "days"]).toObject();

}
