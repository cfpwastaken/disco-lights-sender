let amount = 0
let show = true
radio.setGroup(1)
basic.forever(function () {
    let sound = input.soundLevel()
    sound = sound - amount
    radio.sendNumber(sound)
})
basic.forever(() => {
    if(show == true) {
        led.plotBarGraph(amount, 255)
    }
})

basic.forever(() => {
    if(show == true) {
        basic.pause(2000)
        basic.clearScreen()
        show = false
    }
})

input.onButtonPressed(Button.A, () => {
    show = true
    amount = amount - 1
})

input.onButtonPressed(Button.B, () => {
    show = true
    amount = amount + 1
})

input.onButtonPressed(Button.AB, () => {
    basic.showNumber(amount)
})