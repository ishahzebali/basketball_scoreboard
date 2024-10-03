let homeScore = 0
let guestScore = 0

let hScore = document.getElementById("h-score")
let gScore = document.getElementById("g-score")

function hp1() {
    homeScore += 1
    hScore.textContent = homeScore
}
function hp2() {
    homeScore += 2
    hScore.textContent = homeScore
}
function hp3() {
    homeScore += 3
    hScore.textContent = homeScore
}


function gp1() {
    guestScore += 1
    gScore.textContent = guestScore
}
function gp2() {
    guestScore += 2
    gScore.textContent = guestScore
}
function gp3() {
    guestScore += 3
    gScore.textContent = guestScore
}

function newGame() {
    hScore.textContent = 0
    gScore.textContent = 0
    homeScore = 0
    guestScore = 0
}