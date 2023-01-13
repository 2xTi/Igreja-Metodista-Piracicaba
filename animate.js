$(function() {
    var $all_msg = $('#welcome_msg');
    var $wordList = $('#welcome_msg').text().split("");
    $('#welcome_msg').text("");
    $.each($wordList, function(idx, elem) {
      var newEL = $("<span/>").text(elem).css({
        opacity: 0
      });
      newEL.appendTo($all_msg);
      newEL.delay(idx * 20);
      newEL.animate({
        opacity: 1
      }, 1100);
    });
  
  });