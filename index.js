

const buttonPress = document.getElementById("convert-button");

buttonPress.addEventListener("click", convertFunction);

function convertFunction() {
 var tempDisplayTop = document.getElementById("temperature-1");

 var tempDisplayBottom = document.getElementById("temperature-2"); 

 var selectedValue = document.getElementById("units").value;
 // console.log(selectedValue);

 var temperatureValue = document.getElementById("number-input").value;
 // console.log(temperatureValue);

 let parsedTemp = parseInt(temperatureValue);

 switch (selectedValue) {
  // Is the selectedValue read as a string when converted into a value?
  case "kelvin":
   console.log("switch kelvin")
   let kelvinToCelcius = parsedTemp - 273.15;
   let kevlinToFarenheit = (parsedTemp - 273.15) * (9/5) + 32;
   break;

  case "farenheit":
    console.log("switch farenheit");
   let farenheitToCelcius = (parsedTemp - 32) * (5/9) + " °C";
   let farenheitToKelvin = (parsedTemp - 32) * (5/9) + 273.15 + " °K";
   console.log(farenheitToCelcius);
    break;

  case "celcius":
    console.log("switch celcius");
    let celiusToKelvin = parsedTemp + 273.15;
    let celciusToFarenheit = parsedTemp * (9/5) + 32;
    console.log(celiusToKelvin);
    console.log(celciusToFarenheit);
    break;
 
  default:
   break;
 }
};




