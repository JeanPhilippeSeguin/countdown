
let christmasDate = new Date('2021-12-25T00:00:01').getTime();
let timerItems = document.getElementsByClassName("timer-items");


var x = setInterval(function(){
    let currentDate = new Date().getTime();
    var distance = christmasDate - currentDate;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(christmasDate);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "Merry Christmas"
        document.getElementById("hours").innerHTML = "";
        document.getElementById("minutes").innerHTML = "";
        document.getElementById("seconds").innerHTML = "";
    }
},1000);



function darkMode(){
document.body.style.setProperty('--textcolor',"#fff");
document.body.style.setProperty('background',"linear-gradient(0deg,#00000088 30%, #ffffff44 100%), url(snowNight.jpg)")
}

function lightMode(){
document.body.style.setProperty('--textcolor',"#000");
document.body.style.setProperty('background',"linear-gradient(0deg,#00000088 30%, #ffffff44 100%),url(snow1.jpg)")
}
