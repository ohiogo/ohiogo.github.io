$(document).ready(function() {
    var countDownDate = new Date("Nov 18, 2019 12:00:00").getTime();

    var updateClock = setInterval(function() {
        var currentTime = new Date().getTime();
        var distance = countDownDate - currentTime;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);

    }, 1000);
});
