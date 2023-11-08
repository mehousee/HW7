var video = document.querySelector(".video");

// loading
window.addEventListener("load", function() {
	autoplay = "false";
	loop = "false";
});

// play
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = 100 * video.volume + "%";
});

// pause
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

// slow down
document.querySelector("#slower").addEventListener("click", function(){
	if (video.playbackRate > 0) {
		video.playbackRate *= 0.9;
	}
	console.log("New playback rate = " + video.playbackRate)
});

// speed up
document.querySelector("#faster").addEventListener("click", function(){
	if (video.playbackRate < 1) {
		video.playbackRate /= 0.9;
	}
	console.log("New playback rate = " + video.playbackRate)
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime <= video.duration - 10) {
		video.currentTime += 10;	
	}
	if (video.currentTime >= video.duration - 10) {
		video.currentTime = 0;
	}
	console.log("Current location: " + video.currentTime);
});

// mute
document.querySelector("#mute").addEventListener("click", function(){
	if (!video.muted) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}

	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

// volume slider
document.querySelector("#slider").addEventListener("change", function(){
	currentVolume = document.querySelector("#slider").value;

	video.volume = currentVolume/100;

	document.querySelector("#volume").innerHTML = 100 * video.volume + "%";
});

// styled: add class
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

// original: remove class
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});