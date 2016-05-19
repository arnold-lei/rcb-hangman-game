(function(global,$){

    // 'new' an object
    var Game = function() {
        return new Game.init();   
    },

    Game.prototype = {
      random: function(){
        console.log('ddd');
      }
    }
    Greetr.init = function(){

    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Game.init.prototype = Game.prototype;
    
    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Game = global.G$ = Game;

}(window, jQuery));
