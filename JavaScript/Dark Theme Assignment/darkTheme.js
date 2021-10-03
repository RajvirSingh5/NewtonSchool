function swapTheme() {
    var div = document.getElementById("app");
    var button = document.getElementById("swap");
    if(div.className === "day") {
        div.className = "night";
        button.className = "button_night";
    }
    else {
        div.className = "day";
        button.className = "button_day";
    }
    
}