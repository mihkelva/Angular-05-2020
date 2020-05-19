
var kuudEestikeelsed = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
var weekdays = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev"];
var time = document.getElementById("time");
var timeDate = document.getElementById("date");
window.setInterval(updateClock, 1000);

function updateClock(){
    var date = new Date();
    var year = date.getFullYear();
    var kuu = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    if (minute < 10) {
       minute = "0" + minute;
    }
    var second = date.getSeconds();
    if (second < 10) {
        second = "0" + second;
     }
    var weekday = date.getDay();
    time.innerHTML = hour + ":" + minute + ":" + second;
    timeDate.innerHTML = weekdays[weekday] + ", " + day + ". " + kuudEestikeelsed[kuu] + " " + year;
}