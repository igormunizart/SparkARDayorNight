const s = require("Scene");
const p = require("Patches");
const Locale = require('Locale');
const languageAndTerritory = Locale.fromDevice;


var d = new Date();
  var n = d.getHours();


// retorna Scalar Value 


p.setScalarValue("numero", +n);


	