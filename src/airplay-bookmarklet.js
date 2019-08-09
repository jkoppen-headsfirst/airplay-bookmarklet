javascript:(function(){
/* airplay-bookmarklet - util for casting from Safari to your AppleTV
 * Copyright 2019+ Janroel Koppen
 */
var avs = [];
var i;
var videos = document.getElementsByTagName('video');
for (i = 0; i < videos.length; i++) {
	var video = videos[i];
	if (video && video.webkitShowPlaybackTargetPicker) {
		avs.push(video);
	}
}
var audios = document.getElementsByTagName('audio');
for (i = 0; i < audios.length; i++) {
	var audio = audios[i];
	if (audio && audio.webkitShowPlaybackTargetPicker) {
		avs.push(audio);
	}
}
var av = avs[0]; /* default to first */
for (i = 0; i < avs.length; i++) {
	if (!avs[i].paused) { av = avs[i]; break; } /* prefer first playing */
}
if (av && av.webkitShowPlaybackTargetPicker) { 
	av.setAttribute('preload','metadata');
	av.setAttribute('x-webkit-airplay','allow');
	av.webkitShowPlaybackTargetPicker();
}
}());
