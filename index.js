let date = new Date();
let dateTime = "";
console.log(dateTime);

window.onload = function() {
    document.getElementById("text").innerHTML = date.toLocaleString();
}

window.setInterval(function(){
    date = new Date();
    document.getElementById("date").innerHTML = date.toDateString();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
})