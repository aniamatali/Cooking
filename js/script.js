var conversion = function(gallon) {
  return gallon * 3.78;
};

var gallon = parseInt(prompt("Enter Gallons:"));
var result = conversion(gallon);
alert(result);
