document.getElementById("units").addEventListener("change", getSelectedValue);
/** added an onChange event listener to selection */

function getSelectedValue() {
 var selectedValue = document.getElementById("units").value;
 console.log(selectedValue);
}
//** created a function that gives the value of selection */

getSelectedValue();



const buttonPress = document.getElementById("convert-button");

buttonPress.addEventListener("click", convertFunction);

function convertFunction() {
 getSelectedValue();
};




