// ----------------------------------------
// View
// ----------------------------------------

var JC = JC || {};

JC.view = (function($){
  var init = function(onClick){
    this.$game = $('#game');
    this.$squares = $('.square');
    this.$score = $('#score');
    this.$squares.each(function(index, element) {
      var $element = $(element);
      $element.attr('data-id', index);
    });
    this.clickListen();
  };

  var clickListen = function(){
    $('#game').click('.square', function(e) {
      var $square = $(e.target);
      if ($square.hasClass('active')) {
        $square.removeClass('active');
        JC.controller.click(parseInt($(e.target).data('id')));
      }
    });
  };



  var updateSquares = function(dataSquares){
    $.each(dataSquares, function(index, sqr){
      if (sqr === 1){
        $('*[data-id="' + index + '"]').addClass('active');
      }
    });
  };

  var updateScore = function(points){
    this.$score.text(points);
  };

  return {
    clickListen: clickListen,
    init: init,
    updateSquares: updateSquares,
    updateScore: updateScore
  };

})($);
