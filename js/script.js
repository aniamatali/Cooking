var convGallon = function(gallon) {
  return gallon * 3.78;
};

var gallon = parseInt(prompt("Enter Gallons to be convereted to Liters:"));
var result = convGallon(gallon);
alert(result+" Liters");

var convMl = function(millileter) {
  return millileter / 3785.41;
};

var millileter = parseInt(prompt("Enter Millileters to be converted to Gallons:"));
var result = convMl(millileter);
alert(result+" Gallons");

var convMl = function(liters) {
  return liters * 1000;
};

var liters = parseInt(prompt("Enter Liters to be converted to Millileters:"));
var result = convMl(liters);
alert(result + " Millileters");
