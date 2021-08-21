export default function clearBox(elementID)
{
	document.getElementById(elementID).innerHTML = null;
	document.getElementById("outputParagraph").innerText = null;
}
