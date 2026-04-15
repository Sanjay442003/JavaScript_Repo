
var name = "javascript string method"
var split = name.split(" ")
var show = "";
for (i = 0; i < split.length; i++) {
    var firstletter = split[i].charAt(0);
    var cap = firstletter.toUpperCase();
    var slice = split[i].slice(0);
    var joint = cap + slice;
    show = show + " " + joint;
}
document.getElementById("display").innerHTML = show;