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
if (avs.length > 0) {
	var select = document.createElement('select');
	var option = document.createElement('option');
	select.onchange = function(ev){ var i = this.options[this.selectedIndex].value; avs[i].setAttribute('preload','metadata'); avs[i].setAttribute('x-webkit-airplay','allow'); avs[i].webkitShowPlaybackTargetPicker(); };
	select.setAttribute('style', "z-index:999999");
	var option = document.createElement('option');
	option.setAttribute('value', "-1");
	option.textContent = "[select media]";
	select.appendChild(option);
	for (i = 0; i < avs.length; i++) {
		var option = document.createElement('option');
		option.setAttribute('value', i);
		option.textContent = (avs[i].src) ? avs[i].src.substr(0,32) : 'unknown';
		select.appendChild(option);
	}
	document.body.insertBefore(select, document.body.firstChild)
}
}());
