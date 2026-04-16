var cityes = ["chennai", "mumbai", "delhi", "westbengal", "cochi", "nakpur", "bangalur", "kolkata", "pune", "bopal"];
var fruits = ["bannana", "orenge", "pineapple", "lime", "lemon", "jackfruit", "anola", "kiwi", "peach", "plum"];
var cars = ["susuki", "tata", "bmw", "ferari", "bentley", "tesla", "toyata", "skooda", "ambassador", "mahindra"]


var Cardettails = [
    {name:"susuki", colour:"black", model:"brezza", no_seat:5, price:1200000},
    {name:"tata", colour:"green",model:"nexon", no_seat:5, price:1400000},
    {name:"bmw", colour:"grey",model:"m2", no_seat:5, price:5000000},
    {name:"ferari", colour:"red",model:"testerossa", no_seat:2, price:8000000},
    {name:"bentley", colour:"silver",model:"continentalgt", no_seat:5, price:40000000},
    {name:"tesla", colour:"white",model:"v6", no_seat:5, price:8000000},
    {name:"toyata", colour:"white",model:"lacruiser", no_seat:7, price:2000000},
    {name:"skooda", colour:"gold",model:"octavia", no_seat:5, price:2500000},
    {name:"ambassador", colour:"brown",model:"nova", no_seat:5, price:1000000},
    {name:"mahindra", colour:"blue",model:"xuv700", no_seat:5, price:1500000}
]
document.getElementById("display").innerHTML = Cardettails[2].price;