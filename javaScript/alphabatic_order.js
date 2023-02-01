"use strict";
function orderAlphabet(characters) {
    return characters.split("").sort().join(" ");
}
let result = orderAlphabet("laxmi");
console.log(result);
