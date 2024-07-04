// Scroll dengan lambat

$(document).ready(function(){
    // Tambahkan selector untuk tombol yang ingin diaktifkan smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);
  
      // Animasi scroll
      $('html, body').animate({
        'scrollTop': $target.offset().top
      }, 1000, 'swing', function () {
        window.location.hash = target;
      });
    });
  });


  // Swipper

