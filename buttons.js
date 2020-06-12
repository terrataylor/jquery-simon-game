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
    let audio = $("#green")[0];
    green.play();
    checkPlayer();
  });

  $('.simon-button.blue').on('click', function () {
    moves.push("blue");
    let audio = $("#blue")[0];
    blue.play();
    checkPlayer();
  });

  $('.simon-button.yellow').on('click', function () {
    moves.push("yellow");
    let audio = $("#yellow")[0];
    yellow.play();
    checkPlayer();
  });

  $('.simon-button.red').on('click', function () {
    moves.push("red");
    let audio = $("#red")[0];
    red.play();
    checkPlayer();
  });
});

$('#reset').on('click', function () {

  reset();
});