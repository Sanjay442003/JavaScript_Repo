var games = ["COC", "MLBB", "COD", "PUBD", "BGMI"]
var len = games.length;

var Text = "";
for (var i = 0; i < len; i++) {
    Text += "<div>" + games[i] + i + "- My Games" + "</div>"
}
document.getElementById("data").innerHTML = Text;





function eligeblity() {
    var age = document.getElementById("age").value;
    var text = "";
    if (age == "") {
        text = "Please enter your age!"
    }
    else if (age >= 18) {
        text = "You can drive"
    }
    else {
        text = "you can't drive"
    }
    document.getElementById("demo").innerHTML = text
}
