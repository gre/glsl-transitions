
var transitions = require("./index.js");

if (!(transitions instanceof Array)) throw new Error("transitions is not an Array.");

if (transitions.length === 0) throw new Error("transitions is empty.");

