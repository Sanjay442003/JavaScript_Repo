var title = "javascript string method";
var output = title.split(" ");
var len = output.length;

var result = "";
for (i = 0; i < len; i++) {
    if (output[i].length > result.length) {
        result = output[i]
    }
}
document.getElementById("display").innerHTML = result;