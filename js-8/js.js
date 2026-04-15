var name = "sanjayajayabisharmi"
var split = name.split("")
var len = split.length

var output = ""
var seen = [];
var duplicate = [];
for (i = 0; i < len; i++) {

    if (seen.includes(split[i]) && !duplicate.includes(split[i])) {
        duplicate.push(split[i])
    }
    else {
        seen.push(split[i])
    }

}
console.log(duplicate)