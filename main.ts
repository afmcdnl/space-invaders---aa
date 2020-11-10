// The player presses button A to move sprite left
input.onButtonPressed(Button.A, function () {
    if (game.isRunning()) {
        if (ss_col != 0) {
            ss.set(LedSpriteProperty.X, ss_col - 1)
            ss_col += -1
        }
    }
})
// Pauses game after each asteroid collision or any event to not have the game still playing in the background
function chk_4_pause () {
    while (game.isPaused()) {
        basic.pause(100)
    }
}
// A function to check if the space ship has come in contact with an asteroid
function chk_4_strike () {
    // For every column, chose to send a spaceship down or not 
    for (let col = 0; col <= 4; col++) {
        // Checks for the position in each column for both the rocket and the asteroid 
        if (ast_array[col] == 1 && rkt_array[col] == 1) {
            // If they're both in the same column
            if (col == 0) {
                // If the asteroid sprite and rocket sprite are touching in the first column
                if (ast_0.isTouching(rkt_0)) {
                    // Add to the score
                    game.addScore(1)
                    // Play a noise
                    music.playTone(698, music.beat(BeatFraction.Eighth))
                    // Delete the two sprites and reset the value of each in the array
                    rkt_0.delete()
                    rkt_array[col] = 0
                    ast_0.delete()
                    ast_array[col] = 0
                    basic.pause(500)
                    chk_4_pause()
                }
            } else if (col == 1) {
                // If the asteroid and rocket sprite are touching in the second column
                if (ast_1.isTouching(rkt_1)) {
                    // At a point to the score
                    game.addScore(1)
                    // Make noise
                    music.playTone(698, music.beat(BeatFraction.Eighth))
                    // Delete the sprites from the display and reset value in array
                    rkt_1.delete()
                    rkt_array[col] = 0
                    ast_1.delete()
                    ast_array[col] = 0
                    basic.pause(500)
                    chk_4_pause()
                }
            } else if (col == 2) {
                // If the two sprites are touching in the third column
                if (ast_2.isTouching(rkt_2)) {
                    // Add a point
                    game.addScore(1)
                    // Play a noise
                    music.playTone(698, music.beat(BeatFraction.Eighth))
                    // Delete the sprites when both in the third column
                    rkt_2.delete()
                    rkt_array[col] = 0
                    ast_2.delete()
                    ast_array[col] = 0
                    basic.pause(500)
                    chk_4_pause()
                }
            } else if (col == 3) {
                // If sprites are touching in the fourth column
                if (ast_3.isTouching(rkt_3)) {
                    // Change score by 1
                    game.addScore(1)
                    // Play a noise
                    music.playTone(698, music.beat(BeatFraction.Eighth))
                    // Delete the sprites and reset the values in array
                    rkt_3.delete()
                    rkt_array[col] = 0
                    ast_3.delete()
                    ast_array[col] = 0
                    basic.pause(500)
                    chk_4_pause()
                }
            } else {
                // If sprites are touching in the fifth column
                if (ast_4.isTouching(rkt_4)) {
                    // Add 1 to score 
                    game.addScore(1)
                    // Play noise
                    music.playTone(698, music.beat(BeatFraction.Eighth))
                    // Delete the sprites an reset values in array
                    rkt_4.delete()
                    rkt_array[col] = 0
                    ast_4.delete()
                    ast_array[col] = 0
                    basic.pause(500)
                    chk_4_pause()
                }
            }
        }
    }
}
// When buttons A+B are pressed a spaceship/LED is sent up the display, a noise will be played and location kept track of
input.onButtonPressed(Button.AB, function () {
    // If the game is running
    if (game.isRunning()) {
        if (rkt_array[ss_col] == 0) {
            music.playTone(523, music.beat(BeatFraction.Eighth))
            // Depending on the column the main sprite is in, send a rocket sprite up and add it to an array
            if (ss_col == 0) {
                rkt_0 = game.createSprite(ss_col, 4)
                rkt_0.turn(Direction.Right, -90)
                rkt_array[0] = 1
            } else if (ss_col == 1) {
                rkt_1 = game.createSprite(ss_col, 4)
                rkt_1.turn(Direction.Right, -90)
                rkt_array[1] = 1
            } else if (ss_col == 2) {
                rkt_2 = game.createSprite(ss_col, 4)
                rkt_2.turn(Direction.Right, -90)
                rkt_array[2] = 1
            } else if (ss_col == 3) {
                rkt_3 = game.createSprite(ss_col, 4)
                rkt_3.turn(Direction.Right, -90)
                rkt_array[3] = 1
            } else {
                rkt_4 = game.createSprite(ss_col, 4)
                rkt_4.turn(Direction.Right, -90)
                rkt_array[4] = 1
            }
        }
    }
})
// The player presses B button to move sprite right
input.onButtonPressed(Button.B, function () {
    if (game.isRunning()) {
        if (ss_col != 4) {
            ss.set(LedSpriteProperty.X, ss_col + 1)
            ss_col += 1
        }
    }
})
// Player shakes the microbit to pause/resume the game
input.onGesture(Gesture.Shake, function () {
    if (game.isPaused()) {
        game.resume()
    } else {
        game.pause()
    }
})
let rkt_4: game.LedSprite = null
let ast_4: game.LedSprite = null
let rkt_3: game.LedSprite = null
let ast_3: game.LedSprite = null
let rkt_2: game.LedSprite = null
let ast_2: game.LedSprite = null
let rkt_1: game.LedSprite = null
let ast_1: game.LedSprite = null
let rkt_0: game.LedSprite = null
let ast_0: game.LedSprite = null
let rkt_array: number[] = []
let ast_array: number[] = []
let ss_col = 0
let ss: game.LedSprite = null
game.setLife(10)
game.setScore(0)
ss = game.createSprite(2, 4)
ss_col = 2
let ast_speed = 100
ast_array = [0, 0, 0, 0, 0]
rkt_array = [0, 0, 0, 0, 0]
basic.forever(function () {
    // For all the levels, repeat these steps
    for (let level = 0; level <= 300; level++) {
        // Increase asteroid speed each level
        ast_speed += 1
        // For every asteroid, choose the column the asteroid is sent down and add that position to an array
        for (let ast_col = 0; ast_col <= 4; ast_col++) {
            // Adding the asteroids to an array
            if (ast_array[ast_col] == 0) {
                // Orientate which column the asteroid will go down and add set the value in an array
                if (randint(0, 10) == 1) {
                    ast_array[ast_col] = 1
                    // Depending on the column selected for the asteroid
                    if (ast_col == 0) {
                        // Create a block and turn right to have it facing proper direction
                        ast_0 = game.createSprite(ast_col, 0)
                        ast_0.turn(Direction.Right, 90)
                    } else if (ast_col == 1) {
                        // Create a block and turn right to have it facing proper direction
                        ast_1 = game.createSprite(ast_col, 0)
                        ast_1.turn(Direction.Right, 90)
                    } else if (ast_col == 2) {
                        // Create a block and turn right to have it facing proper direction
                        ast_2 = game.createSprite(ast_col, 0)
                        ast_2.turn(Direction.Right, 90)
                    } else if (ast_col == 3) {
                        // Create a block and turn right to have it facing proper direction
                        ast_3 = game.createSprite(ast_col, 0)
                        ast_3.turn(Direction.Right, 90)
                    } else {
                        // Create a block and turn right to have it facing proper direction
                        ast_4 = game.createSprite(ast_col, 0)
                        ast_4.turn(Direction.Right, 90)
                    }
                }
            }
            basic.pause(ast_speed)
            chk_4_pause()
        }
        basic.pause(100)
        chk_4_pause()
        for (let ast_col = 0; ast_col <= 4; ast_col++) {
            // Orientating where the asteroid is found
            if (ast_array[ast_col] != 0) {
                // Depending on which column the asteroid is in
                if (ast_col == 0) {
                    // If the asteroid isn't at the bottom, keep moving it down the display, or if it is at the bottom
                    if (ast_0.get(LedSpriteProperty.Y) != 4) {
                        ast_0.move(1)
                    } else {
                        // Remove the asteroid
                        ast_0.delete()
                        // Reset the asteroid in the array
                        // Reset the asteroid in the array
                        ast_array[ast_col] = 0
                        // Delete a  life
                        game.removeLife(1)
                        // Play name
                        music.playTone(131, music.beat(BeatFraction.Eighth))
                        basic.pause(500)
                        chk_4_pause()
                    }
                } else if (ast_col == 1) {
                    // If the asteorid in the second column isn't at the bottom or if it is at the bottom
                    if (ast_1.get(LedSpriteProperty.Y) != 4) {
                        // Keep moving the asteroid down
                        ast_1.move(1)
                    } else {
                        // Delete the asteroid
                        ast_1.delete()
                        // Reset the value of asteroid in the array
                        // Reset the value of asteroid in the array
                        ast_array[ast_col] = 0
                        // Remove life
                        game.removeLife(1)
                        // Play noise
                        music.playTone(131, music.beat(BeatFraction.Eighth))
                        basic.pause(500)
                        chk_4_pause()
                    }
                } else if (ast_col == 2) {
                    // If the asteroid in the third column is not at the bottom or if it is
                    if (ast_2.get(LedSpriteProperty.Y) != 4) {
                        // keep moving asteroid down
                        ast_2.move(1)
                    } else {
                        // delete the asteroid sprite
                        ast_2.delete()
                        // Reset value in the array
                        // Reset value in the array
                        ast_array[ast_col] = 0
                        // Remove life
                        game.removeLife(1)
                        // Play noise
                        music.playTone(131, music.beat(BeatFraction.Eighth))
                        basic.pause(500)
                        chk_4_pause()
                    }
                } else if (ast_col == 3) {
                    // If the asteroid in the fourth column is not at the bottom or if it is
                    if (ast_3.get(LedSpriteProperty.Y) != 4) {
                        // Keep moving the asteroid down
                        ast_3.move(1)
                    } else {
                        // Delete the sprite
                        ast_3.delete()
                        // Reset the value of asteroid in array
                        // Reset the value of asteroid in array
                        ast_array[ast_col] = 0
                        // Remove array
                        game.removeLife(1)
                        // Play noise
                        music.playTone(131, music.beat(BeatFraction.Eighth))
                        basic.pause(500)
                        chk_4_pause()
                    }
                } else {
                    // If asteroid is in the fifth column is not at the bottom or if it is
                    if (ast_4.get(LedSpriteProperty.Y) != 4) {
                        // Keep moving asteroid down
                        ast_4.move(1)
                    } else {
                        // Delete the asteroid
                        ast_4.delete()
                        // Reset value of asteroid in the array
                        // Reset value of asteroid in the array
                        ast_array[ast_col] = 0
                        // Remove life
                        game.removeLife(1)
                        // Play sound
                        music.playTone(131, music.beat(BeatFraction.Eighth))
                        basic.pause(500)
                        chk_4_pause()
                    }
                }
            }
            basic.pause(ast_speed)
            chk_4_pause()
        }
        chk_4_strike()
        basic.pause(ast_speed)
        chk_4_pause()
        // Orientating the rocket sprites
        for (let rkt_col = 0; rkt_col <= 4; rkt_col++) {
            // Get position of the rocket
            if (rkt_array[rkt_col] == 1) {
                // Depending on the column the rocket is in and if it is at the bottom
                if (rkt_col == 0) {
                    // Move the rocket up
                    rkt_0.move(1)
                    basic.pause(200)
                    chk_4_pause()
                    // If the rocket hits top of display, delete it and remove from array
                    if (rkt_0.get(LedSpriteProperty.Y) == 0) {
                        rkt_0.delete()
                        rkt_array[rkt_col] = 0
                    }
                } else if (rkt_col == 1) {
                    // If rocket is in the second column and at bottom keep moving it up
                    rkt_1.move(1)
                    basic.pause(200)
                    chk_4_pause()
                    // If reaches the top, delete the sprite and reset value in array
                    if (rkt_1.get(LedSpriteProperty.Y) == 0) {
                        rkt_1.delete()
                        rkt_array[rkt_col] = 0
                    }
                } else if (rkt_col == 2) {
                    // If rocket in third column at bottom, move up display
                    rkt_2.move(1)
                    basic.pause(200)
                    chk_4_pause()
                    // If reaches top of display, delete it and reset value in array
                    if (rkt_2.get(LedSpriteProperty.Y) == 0) {
                        rkt_2.delete()
                        rkt_array[rkt_col] = 0
                    }
                } else if (rkt_col == 3) {
                    // If rocket in fourth column and at bottom, move it up
                    rkt_3.move(1)
                    basic.pause(200)
                    chk_4_pause()
                    // If rocket reaches top of display, delete it and reset value in array
                    if (rkt_3.get(LedSpriteProperty.Y) == 0) {
                        rkt_3.delete()
                        rkt_array[rkt_col] = 0
                    }
                } else {
                    // If rocket in fifth column and at bottom, move it up
                    rkt_4.move(1)
                    basic.pause(200)
                    chk_4_pause()
                    // If rocket reaches top of display, delete sprite and reset value in array
                    if (rkt_4.get(LedSpriteProperty.Y) == 0) {
                        rkt_4.delete()
                        rkt_array[rkt_col] = 0
                    }
                }
            }
            basic.pause(ast_speed)
            chk_4_pause()
        }
        chk_4_strike()
        basic.pause(ast_speed)
        chk_4_pause()
    }
    // Change the asteroid speed
    ast_speed += -10
    basic.pause(ast_speed)
    chk_4_pause()
})
