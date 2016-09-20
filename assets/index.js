var audio = document.querySelector("#audio");
var source = document.querySelector("#source");
// var context = new AudioContext();


function updateSource(data) {
    source.src = "http://localhost:3000/samples/the-offspring.mp3";
    audio.load();
}
