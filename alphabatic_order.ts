
function orderAlphabet(characters: string): string {
    return characters.split("").sort().join(" ")
}

let result = orderAlphabet("laxmi");
console.log(result);
