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
  // why must the cases be in string format?
  case "kelvin":
   let kelvinToCelcius = parsedTemp - 273.15 + " °C";
   let kevlinToFarenheit = (parsedTemp - 273.15) * (9 / 5) + 32 + " °F";
   tempDisplayTop.innerHTML = kelvinToCelcius;
   tempDisplayBottom.innerHTML = kevlinToFarenheit;
    break;

  case "farenheit":
   let farenheitToCelcius = (parsedTemp - 32) * (5/9) + " °C";
   let farenheitToKelvin = (parsedTemp - 32) * (5/9) + 273.15 + " °K";
   tempDisplayTop.innerHTML = farenheitToCelcius;
   tempDisplayBottom.innerHTML = farenheitToKelvin;
    break;

  case "celcius":
   let celiusToKelvin = parsedTemp + 273.15 + " °K";
   let celciusToFarenheit = parsedTemp * (9 / 5) + 32 + " °F";
   tempDisplayTop.innerHTML = celiusToKelvin;
   tempDisplayBottom.innerHTML = celciusToFarenheit;
    break;
 
  default:
   break;
 }
};




