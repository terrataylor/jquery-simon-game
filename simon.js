// This file contains the game logic.
// All the event-listening should happen in buttons.js 
let options = ["green", "red", "yellow", "blue"];
let comp = [options[Math.floor(Math.random() * 4)]];
let round = 1;
let i = 0;

function startGame() {
    setTimeout(lightUp, 1000);
}

function checkPlayer() {
    console.log(moves, comp)
    if (moves.length === comp.length) {
        if (JSON.stringify(moves) == JSON.stringify(comp)) {
            //comp move
            generateNextColor();
            i = 0;
            setTimeout(lightUp, 1000);

        } else {
            $(".fail").show();
            $(".simon-button").off("click");
        }
    }
}

function generateNextColor() {
    round++;
    $("#round").html(round);
    comp.push(options[Math.floor(Math.random() * 4)]);
    moves = [];
}

function lightUp() {
    setTimeout(clearColor, 1000)
    if (i < comp.length) {
        $(`.${comp[i]}`).toggleClass("light-up", true);
        switch (comp[i]) {
            case "red":
                let sound1 = red.cloneNode();
                sound1.play();
                break;
            case "green":
                let sound2 = green.cloneNode();
                sound2.play();
                break;
            case "blue":
                let sound3 = blue.cloneNode();
                sound3.play();
                break;
            case "yellow":
                let sound4 = yellow.cloneNode();
                sound4.play();
                break;
            default:
                console.log("?");
        }
        setTimeout(lightUp, 2000);
    } else {
        clearColor();
    }
    i++;
}

function clearColor() {
    $(".simon-button").toggleClass("light-up", false);
}

function reset() {
    location.reload();
}