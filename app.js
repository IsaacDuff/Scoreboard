function working() {
    console.log(working);
}


working()

let myCode = 0
let myCodeAway = 0

function home1() {
    console.log("home up one")
    myCode += 1
    console.log(myCode)
    drawCode()
}

function home3() {
    console.log("home up three")
    myCode += 3
    console.log(myCode)
    drawCode()
}

function away1() {
    console.log("away up one")
    myCode += 1
    console.log(myCodeAway)
    drawCodeAway()
}

function away3() {
    console.log("away up 3")
    myCode += 3
    console.log(myCodeAway)
    drawCodeAway()
}

function drawCode() {
    let codeWindow = document.getElementById("home-code-window")
    codeWindow.innerText = myCode
}

function drawCodeAway() {
    let codeWindow = document.getElementById("away-code-window")
    codeWindow.innerText = myCodeAway
}