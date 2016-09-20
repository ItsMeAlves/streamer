var audio = document.querySelector("#audio");
var source = document.querySelector("#source");

function updateSource() {
    source.src = "http://localhost:3000/samples/the-offspring.mp3";
    audio.load();
}

updateSource();
