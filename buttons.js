let moves = [];

let green = new Audio("sound1.mp3");
let blue = new Audio("sound2.mp3");
let yellow = new Audio("sound3.mp3");
let red = new Audio("sound4.mp3");

$('#start').on('click', function () {
  startGame();
  $(".fail").hide();


 $('.simon-button.green').on('click', function () {
    moves.push("green");
    let sound = green.cloneNode();
    sound.play();
    checkPlayer();
  });

  $('.simon-button.blue').on('click', function () {
    moves.push("blue");
    let sound = blue.cloneNode();
    sound.play();
    checkPlayer();
  });

  $('.simon-button.yellow').on('click', function () {
    moves.push("yellow");
    let sound = yellow.cloneNode();
    sound.play();
    checkPlayer();
  });

  $('.simon-button.red').on('click', function () {
    moves.push("red");
    let sound = red.cloneNode();
    sound.play();
    checkPlayer();
  });
});

$('#reset').on('click', function () {
  reset();
});