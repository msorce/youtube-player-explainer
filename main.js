

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: ($( window ).width() / 2),
        width: $( window ).width(),
        videoId: '8MKds5coPVQ',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'enablejsapi': 1,
            'fs': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

}

var playerReady = false;
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    playerReady = true;
    alert("Player is ready");

}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
function onPlayerStateChange(event) {
    if (event.data === 1){
    alert("player event occured: playing");
    }
    else if (event.data === 2){
    alert("player event occured: paused");
    }
    else if (event.data === 3){
    alert("player event occured: time slider position change");
    }
    else if (event.data ===0) {
        alert('player event occured: done');

    }
}
//loads the video into the player according to the buttons attribute vidid
$(".button").on("click", function() {
    var vid = $(this).attr('vidid');
    player.loadVideoById(vid, 0, "default");
    alert("video loaded | " + "video id = " + vid);
});
//play the video when the play button is pushed and show the iframe
$('.button').on('click', function(){
  $('.youtube-player-container').fadeIn("slow");
	player.playVideo();
});
//hide the video when the play button is pushed and hide the iframe
$('#close').on('click', function(){
  $('.youtube-player-container').fadeOut("slow");
	player.pauseVideo();
});
