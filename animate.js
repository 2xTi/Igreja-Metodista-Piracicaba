$(function() {
    //get the welcome msg element
    var $all_msg = $('#welcome_msg');
    //get a list of letters from the welcome text
    var $wordList = $('#welcome_msg').text().split("");
    //clear the welcome text msg
    $('#welcome_msg').text("");
    //loop through the letters in the $wordList array
    $.each($wordList, function(idx, elem) {
      //create a span for the letter and set opacity to 0
      var newEL = $("<span/>").text(elem).css({
        opacity: 0
      });
      //append it to the welcome message
      newEL.appendTo($all_msg);
      //set the delay on the animation for this element
      newEL.delay(idx * 20);
      //animate the opacity back to full 1
      newEL.animate({
        opacity: 1
      }, 1100);
    });
  
  });