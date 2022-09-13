let randomNum = 0
input.onButtonPressed(Button.A, function () {
    randomNum = randint(1, 10)
    if (randomNum == 1) {
        basic.showString("Maybe.")
    } else if (randomNum == 2) {
        basic.showString("Possibly.")
    } else if (randomNum == 3) {
        basic.showString("Perhaps.")
    } else if (randomNum == 4) {
        basic.showString("Try again later.")
    } else if (randomNum == 5) {
        basic.showString("8ball is unavailable at the moment.")
    } else if (randomNum == 6) {
        basic.showString("Yes.")
    } else if (randomNum == 7) {
        basic.showString("Impossible.")
    } else if (randomNum == 8) {
        basic.showString("Of course not.")
    } else if (randomNum == 9) {
        basic.showString("Under no circumstances.")
    } else {
        basic.showString("This is false.")
    }
})
