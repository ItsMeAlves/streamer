var audio = document.querySelector("#audio");
var source = document.querySelector("#source");

socket.on("blob", updateSource);

function updateSource(data) {
    source.src = data;
    audio.load();
    audio.play();
}
