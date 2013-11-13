var player;
var slideTarget = document.getElementById('landing');
var loadTarget  = document.getElementById('container');

function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    width: '800',
    height: '450',
    videoId: 'bAlZMspFIRQ',
    showinfo: '0',
    autohide: '1'
  });
}


function fadeIn(fadeInTarget) {
  fadeInTarget.style.opacity = 1;
  fadeInTarget.style.filter  = "alpha(opacity=100)";
}


function fadeOut(fadeOutTarget) {
  fadeOutTarget.style.opacity = 0;
  fadeOutTarget.style.filter  = "alpha(opacity=0)";
}


function pageLoad() {
  fadeIn(loadTarget);
}


function swapVid(bool) {
  if(bool) {
    playerId = 'bAlZMspFIRQ';
  } else {
    playerId = 'OHo2_YWfJXc';
  }
  player.loadVideoById(playerId);
}


function slide(dir, position) {
  player.pauseVideo();
  //Slide that shizz
  if(dir)  slideTarget.style.marginTop  = (450 * position) + 'px';
  if(!dir) slideTarget.style.marginLeft = (920 * position) + 'px';
}


$(document).ready( function () {
    var loadLandingFrame = true;

    $('nav li, .load').click( function (e) {
        e.preventDefault();
    });

    // Load the fit guide
    $('.load').on('click', function () {
      player.pauseVideo();
      if(loadLandingFrame) {
          $('#container').removeClass('show');
          $('#title, #loadContainer').addClass('show');
      } else {
          $('#title, #loadContainer').removeClass('show');
          $('#container').addClass('show');
      }
      loadLandingFrame = !loadLandingFrame;
    });
});