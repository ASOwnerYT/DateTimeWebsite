let date = new Date();

window.onload = function() {
    document.getElementById("date").innerHTML = date.toDateString();
}

window.setInterval(function(){
    date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
})
