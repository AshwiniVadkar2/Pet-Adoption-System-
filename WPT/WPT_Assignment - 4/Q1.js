function toUpperCase(str) {
    return str.toUpperCase();
}

function processData(inputString, callback) {
    const result = callback(inputString);
    console.log(result);
}

processData("hello world", toUpperCase);
