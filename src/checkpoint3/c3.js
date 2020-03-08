$('.cactus-1, .cactus-3, #rain').hide();

var numberOfRaindrops = 500;

// generate a random number within a range
function randomNumInRange( min, max ) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}


function createRain() {
	for( i = 1 ; i < numberOfRaindrops ; i++ ) {
	  var dropLeft = randomNumInRange(40,340);
	  var dropTop = randomNumInRange(-900,120);

    $('#rain').append('<div class="drop" id="drop'+i+'"></div>');
	  $('#drop'+i).css('left', dropLeft);
	  $('#drop'+i).css('top', dropTop);
	}
}

// // create drops of rain

$(".cactus-2").click(function () {
  $(this).addClass('pulse');
    $('.cactus-2').on(
      "webkitAnimationEnd oanimationend msAnimationEnd animationend",
      function() {
          $(this).removeClass('pulse', 'faster');
      }
    );
});

$(".cactus-2").click(function () {
  $('#rain').show();
});

$(".cactus-2").click(function () {
  $('#rain').slideDown()
});

// create the rain at the start (it will be hidden at first)
createRain();


