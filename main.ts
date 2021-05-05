scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f . 8 8 d d d . . . . 
        f d d 3 d f . 8 8 d d d . . . . 
        f d f d 3 d d 8 8 8 8 8 4 4 d f 
        f d d d 3 d d d 8 8 8 8 4 4 d f 
        f d d d 3 d d d 8 8 8 8 . . . . 
        f d d d 3 d d d 8 8 8 8 4 4 d f 
        f d f d 3 d d 8 8 8 8 8 4 4 d f 
        f d d 3 d f . 8 8 d d d . . . . 
        . f f f f f . 8 8 d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    scene.cameraShake(4, 500)
    mySprite.x += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd8, function (sprite, location) {
    music.beamUp.play()
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(50, 51))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.beamUp.play()
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 4))
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadVertical, function (sprite, location) {
    controller.moveSprite(mySprite, 100, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadHorizontal, function (sprite, location) {
    controller.moveSprite(mySprite, 100, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    music.beamUp.play()
    tiles.setTilemap(tilemap`level3`)
    if (Portal1 == 0) {
        Portal1 += 1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 5))
    }
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (Chest == 0) {
        music.baDing.play()
        info.changeScoreBy(1)
        Chest += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    music.beamUp.play()
    tiles.setTilemap(tilemap`level6`)
})
let Portal1 = 0
let Chest = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . f f f f f f f . 
    f d d d d d d d f 
    f d f d d d f d f 
    f 3 d d d d d 3 f 
    f d 3 3 3 3 3 d f 
    f f d d d d d f f 
    . . d d d d d . . 
    8 8 8 d d d 8 8 8 
    8 8 8 8 8 8 8 8 8 
    d d 8 8 8 8 8 d d 
    d d 8 8 8 8 8 d d 
    d d 8 8 8 8 8 d d 
    . . 4 4 . 4 4 . . 
    . . 4 4 . 4 4 . . 
    . . d d . d d . . 
    . . f f . f f . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 50, 50)
info.setScore(0)
tiles.setTilemap(tilemap`level2`)
Chest = 0
Portal1 = 0
forever(function () {
    controller.moveSprite(mySprite, 50, 50)
    mySprite.setImage(img`
        . f f f f f f f . 
        f d d d d d d d f 
        f d f d d d f d f 
        f 3 d d d d d 3 f 
        f d 3 3 3 3 3 d f 
        f f d d d d d f f 
        . . d d d d d . . 
        8 8 8 d d d 8 8 8 
        8 8 8 8 8 8 8 8 8 
        d d 8 8 8 8 8 d d 
        d d 8 8 8 8 8 d d 
        d d 8 8 8 8 8 d d 
        . . 4 4 . 4 4 . . 
        . . 4 4 . 4 4 . . 
        . . d d . d d . . 
        . . f f . f f . . 
        `)
    pause(100)
})
