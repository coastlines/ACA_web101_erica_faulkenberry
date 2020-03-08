// set number of rain drops
var numberOfRaindrops = 500;
var showerPower = 0;

// hide bonus cactus and rain
$('.cactus-1, .cactus-3, #rain, .h1-end').hide();

$('audio#music')[0].play();

// generate a random number within a range
function randomNumInRange( min, max ) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

// create rain drops
function createRain() {
	for( i = 1 ; i < numberOfRaindrops ; i++ ) {
	  var dropLeft = randomNumInRange(40,340);
	  var dropTop = randomNumInRange(-900,120);

    $('#rain').append('<div class="drop" id="drop'+i+'"></div>');
	  $('#drop'+i).css('left', dropLeft);
	  $('#drop'+i).css('top', dropTop);
	}
}

// cactus animation

$('.cactus-container').click(function () {
  $('.cactus-2').addClass('pulse');
    $('.cactus-2').on(
      "webkitAnimationEnd oanimationend msAnimationEnd animationend",
      function() {
          $(this).removeClass('pulse', 'faster');
      }
    );
});

// rain animation
$(".cactus-container").click(function() {
  showerPower++;
});

$(".cactus-container").click(function () {
  $('#rain').show();
    if (showerPower > 15) {
      $('#rain').hide();
      $('.puff-6').css({
        transform: "scale(6.5)"
        });
      $('.h1-intro').hide();
      $('.h1-end').show();
      $('.puff').css({
      background: "-webkit-gradient(linear, left top, left bottom, from(#DACA17), to(#DA7714))"
      })

    } else if (showerPower > 14) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#c71d6f), to(#d09693))"
      })

    } else if (showerPower > 13) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#d558c8), to(#24d292))"
      })

    } else if (showerPower > 12) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#f83600), to(#f9d423))"
      })

    } else if (showerPower > 11) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#ff0844), to(#ffb199))"
      })

    } else if (showerPower > 10) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#1a2a6c), to(#b21f1f))"
      })

    } else if (showerPower > 9) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#b92b27), to(#1565C0))"
      })

    } else if (showerPower > 8) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#FC466B), to(#3F5EFB))"
      })

    } else if (showerPower > 7) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#E55D87), to(#5FC3E4))"
      })

    } else if (showerPower > 6) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#de6161), to(#2657eb))"
      })

    } else if (showerPower > 5) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#D38312), to(#A83279))"
      })

    } else if (showerPower > 4) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#a80077), to(#66ff00))"
      })
      
    } else if (showerPower > 3) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#16BFFD), to(#CB3066))"
      })

    } else if (showerPower > 2) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#59C173), to(#5D26C1))"
      })

    } else if (showerPower > 1) {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#1FA2FF), to(#A6FFCB))"
      })

    } else {
      $('.puff').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(#43cea2), to(#185a9d))"
    });
  }
});

$(".cactus-container").click(function () {
  if (showerPower > 15) {
    $('.cactus-3').show();
  } else if (showerPower > 10) {
      $('.cactus-1').show();
    } else {
      $('.cactus-1').hide();
      $('.cactus-3').hide();
    }
});

$(".cactus-container").click(function () {
  if (showerPower > 15) {
    $('.img-container').addClass('pulse');
      $('.img-container').on(
        "webkitAnimationEnd oanimationend msAnimationEnd animationend",
        function() {
            $(this).removeClass('pulse', 'faster');
        }
      );
  } else if (showerPower > 10) {
      $('.cactus-1',).addClass('pulse');
      $('.cactus-1').on(
        "webkitAnimationEnd oanimationend msAnimationEnd animationend",
        function() {
            $(this).removeClass('pulse', 'faster');
        }
      );
  }
});


$(".cactus-container").click(function () {
  $('#rain').slideDown()
});



// create the rain
createRain();


