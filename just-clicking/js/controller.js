// ----------------------------------------
// Controller
// ----------------------------------------

var JC = JC || {};

JC.controller = (function(JC){

  var init = function(){
    JC.view.init(click);
    JC.controller.gameLoop = (function(){
      setInterval(JC.controller.game, 1000);
    })();
  };

  var game = function(){
    JC.view.updateScore(JC.model.getScore());
    JC.model.activateRandomSquare();
    JC.view.updateSquares(JC.model.getSquares());
  };

  var click = function(e){
    console.log(e);
    JC.model.processSquareClick(e);
  };

  return {
    init: init,
    game: game,
    click: click,
  };
})(JC);
