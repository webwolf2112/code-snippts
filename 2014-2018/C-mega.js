
jQuery(document).ready(function($){

 
    //getting the measurements for the border

    $('#mm-women').css('display', 'block');
    var boxHeight1 = $('#height2').height();
    var boxHeight2 = $('#height1').height();
    $('#mm-women').css('display', 'none');

    //setting the box height for the border to be the same size

    if(boxHeight1 > boxHeight2){
      $('.inner-box').css('height', boxHeight1);

      } else{

    $('.inner-box').css('height', boxHeight2);
      }

    
 
  //hover image states nav with text
  $('#menu .icon-color').hover(function(){


    // Change the featured menu image, link, and path
    var linkTitle = $(this).data('title');
    var linkAddress = $(this).attr('href');
    var imgPath =  $(this).data('img-path');
    
    var featuredImage = $('<img src="' + imgPath + '" />');
    featuredImage.load(function() {
      // Center the featured image
      var imgHeight = this.height;
      var contHeight = 279;
      var padding = (contHeight - imgHeight)/2;
      $('.image-change').attr({
        src: imgPath,
        alt: linkTitle,
      });
      $('.shoe-img-holder img').css('margin-top', padding + "px");
    });

    $('.image-link').attr({
      href: linkAddress
    });

     $('.right-link').attr({
      href: linkAddress
    })

    $('.right-link').text(linkTitle);


    // Change link background image to green
    var regClass = $(this).data('hover-out');
    var hoverClass = $(this).data('hover-over');
    $(this).parent('li').removeClass(regClass).addClass(hoverClass);


  }, function(){

    // Change link background image back to grey
    var regClass = $(this).data('hover-out');
    var hoverClass = $(this).data('hover-over');
    $(this).parent('li').removeClass(hoverClass).addClass(regClass);
  });


  //hover over states colors and sizes


   $('#crocmenu .icon-circle').hover(function(){

    var regClass = $(this).data('hover-out');
    var hoverClass = $(this).data('hover-over');


    $(this).removeClass(regClass).addClass(hoverClass);


  }, function(){

    var regClass = $(this).data('hover-out');
    var hoverClass = $(this).data('hover-over');

    $(this).removeClass(hoverClass).addClass(regClass);
  });





}); // end $(document).ready(function(){



