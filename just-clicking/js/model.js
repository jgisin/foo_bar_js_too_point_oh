// ----------------------------------------
// Model
// ----------------------------------------

var JC = JC || {};

JC.model = (function(_){

  var _dataSquares = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];
  var _score = 0;

  var allFull = function(){
    var bool = true;
    for (var i=0; i < _dataSquares.length; i++){
      if (_dataSquares[i] === 0 ){
        bool = false;
      }
    }
    return bool;
  };

  return {
    getSquares: function(){
      return _dataSquares;
    },

    getScore: function(){
      return _score;
    },

    activateRandomSquare: function() {
      if (!allFull()){
        var index = Math.floor(Math.random() * _dataSquares.length);
          if (_dataSquares[index] === 0){
            _dataSquares[index] = 1;
          }
          else{
            this.activateRandomSquare();
          }
        }
      },


      processSquareClick: function(index){
        if (_dataSquares[index] === 1){
          _dataSquares[index] = 0;
          _score++;
        }
      },

  };
})(_);
