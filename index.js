document.getElementById("units").addEventListener("change", getSelectedValue);
/** added an onChange event listener to selection */

function getSelectedValue() {
 var selectedValue = document.getElementById("units").value;
 console.log(selectedValue);
}
//** created a function that gives the value of selection */

document.getElementById
("number-input").addEventListener("blur", getTemperatureValue);

function getTemperatureValue() {
 var temperatureValue = document.getElementById("number-input").value;
 console.log(temperatureValue);
}

const buttonPress = document.getElementById("convert-button");

buttonPress.addEventListener("click", convertFunction);

function convertFunction() {
 getTemperatureValue();
 getSelectedValue();

};




