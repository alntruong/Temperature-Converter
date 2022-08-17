document.getElementById("units").addEventListener("change", convertFunction);
/** added an onChange event listener to selection and linked it to convertFunction */

document.getElementById
("number-input").addEventListener("blur", convertFunction);

const buttonPress = document.getElementById("convert-button");

buttonPress.addEventListener("click", convertFunction);

function convertFunction() {
 var selectedValue = document.getElementById("units").value;
 console.log(selectedValue);

 var temperatureValue = document.getElementById("number-input").value;
 console.log(temperatureValue);
};




