// setTimeout(2)
var body = document.getElementById("funny")
body.style.display = 'none'

function hideBody() {
    body.style.display = 'block'
}

function playAudio() {
    var audio = new Audio('./scream.mp3');
    audio.play();
    audio.play();
    audio.play();
    audio.play();
    audio.play();
    audio.play();
    audio.play();
    audio.play();
    audio.play();

}

setTimeout("hideBody()", 3000)
setTimeout('playAudio()', 2200)