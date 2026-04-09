function timesnow() {
    var time = document.getElementById("typetime").value;
    console.log(time)
    var hour = time.slice(0,2)
    var text =""
    if (hour < 24 && hour >= 20) {
        text = "Night";
    }
    else if (hour >= 0 && hour <= 12) {
        text = "Morning";
    }
    else if (hour > 12 && hour < 18) {
        text = "After noon"
    }
    else if (hour >= 18 && hour <= 20) {
        text = "Evening"
    }
    else {
        text = "Enter A valid hour"
    }
    document.getElementById("display").innerHTML = text;
}