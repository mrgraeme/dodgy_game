input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 5)
let dropper = game.createSprite(randint(0, 5), 0)
let playing = true
let score = 0
let speed = 215
music.setVolume(49)
music.play(music.stringPlayable("G G F A G B C5 - ", 135), music.PlaybackMode.UntilDone)
music.setVolume(35)
basic.forever(function () {
    while (playing) {
        if (dropper.get(LedSpriteProperty.Y) < 4) {
            dropper.change(LedSpriteProperty.Y, 1)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
        } else {
            dropper.delete()
            dropper = game.createSprite(randint(0, 5), 0)
            score += 1
        }
        if (dropper.isTouching(player)) {
            music.setVolume(51)
            music.play(music.stringPlayable("B B G G E F E - ", 274), music.PlaybackMode.UntilDone)
            player.delete()
            playing = false
            for (let index = 0; index < 10; index++) {
                basic.showIcon(IconNames.Skull)
                basic.showNumber(score)
            }
        }
        speed += -1
        basic.pause(speed)
    }
})
