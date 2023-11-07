var video = document.querySelector(".video");

window.addEventListener("load", function() {
	autoplay = "false";
	loop = "false";
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = 100 * video.volume + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slider").addEventListener("change", function(){
	currentVolume = document.querySelector("#slider").value;
	console.log("Current slider value ", currentVolume);

	video.volume = currentVolume/100;

	document.querySelector("#volume").innerHTML = 100 * video.volume + "%";

})

