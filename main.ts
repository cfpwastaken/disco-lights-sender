let sound = 0
radio.setGroup(1)
basic.forever(function () {
    sound = input.soundLevel()
    radio.sendNumber(sound)
})
