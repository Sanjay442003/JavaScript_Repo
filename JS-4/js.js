var name = "Kavinraj Aero";
var initial = "R";

var findspace = name.indexOf(" ");
var name2 = name.substring(findspace + 1);

var name1 = name.substring(0,findspace);

var final = name1.concat(" " , initial , " " , name2);
document.getElementById("demo").innerHTML= final