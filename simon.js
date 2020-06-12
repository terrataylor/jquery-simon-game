// This file contains the game logic.
// All the event-listening should happen in buttons.js 
let options = ["green", "red", "yellow", "blue"];
let comp = [options[Math.floor(Math.random() * 4)]];

let i = 0;
function checkPlayer() {
    console.log(moves, comp)
    if (moves.length === comp.length) {
        if (JSON.stringify(moves) == JSON.stringify(comp)) {
            if (moves.length == comp.length) {
                //comp move
                generateNextColor();
                i = 0;
                setTimeout(lightUp, 1000);
            }
        } else {
            $(".fail").show();
            $(".simon-button").off("click");
        }
    }
}


function startGame() {
    console.log(comp);
    setTimeout(lightUp, 1000);
}

function generateNextColor() {
    comp.push(options[Math.floor(Math.random() * 4)]);
    moves = [];
}

function lightUp() {
    setTimeout(clearColor, 1000)
    if (i < comp.length) {
        $(`.${comp[i]}`).toggleClass("light-up", true);
        switch (comp[i]) {
            case "red":
                red.play();
                break;
            case "green":
                green.play();
                break;
            case "blue":
                blue.play();
                break;
            case "yellow":
                yellow.play();
                break;
            default:
                console.log("?");
        }
        setTimeout(lightUp, 3000);
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
