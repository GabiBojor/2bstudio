  $(document).ready(function(){
    $(".type-wrap").typed({
      strings: ["Website?", "Logo?", "orice alt design?","Website?", "Logo?", "orice alt design?", "Website?"],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      shuffle: false,
      backDelay: 2000,
      fadeOut: false,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 1500, 
      loop: false,
      loopCount: false,
      showCursor: true,
      cursorChar: "|",
      attr: null,
      contentType: 'html'
    });
  })
  $(window).scroll(function(){
    if($(window).scrollTop() > 200) {
      $('.container-top').addClass('scrolled-top');
    }
    else{
      $('.container-top').removeClass('scrolled-top');
    }
  });


     function getOrder() { 

      var home_param = document.getElementById('order-input').value;
      var link = 'about-us.html'
      // window.location.search += `about-us.html${home_param}`
    //   // var loc = window.location.pathname
    // window.location.search += "&my_param=foobar"
     // var newLink = `about-us.html ?&${home_param}`
     location.pathname = link;
    }