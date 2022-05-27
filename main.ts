input.onButtonPressed(Button.A, function () {
    basic.showString("START")
    gameStarted = false
    basic.pause(randint(1000, 5000))
    gameStarted = true
    basic.showIcon(IconNames.Heart)
    while (gameStarted) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            gameStarted = false
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showString("B")
                gameStarted = false
            }
        }
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
let gameStarted = false
game.startCountdown(randint(5, 15))
basic.showString("GO")
basic.forever(function () {
    let cuentaRegresiva = 0
    if (input.pinIsPressed(TouchPin.P1) && cuentaRegresiva != 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (input.pinIsPressed(TouchPin.P2) && cuentaRegresiva != 0) {
        basic.showIcon(IconNames.Skull)
    }
})
