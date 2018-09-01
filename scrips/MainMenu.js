var mainMenuState = new Phaser.Class({
  //Define scene
  Extends: Phaser.Scene,
  initialize:
  function MainMenu(){
    Phaser.Scene.call(this, {key: 'MainMenu'})
  },
  preload: function() {
    //preload images for this state
  },
  create: function() {
    console.log('MainMenu')
    game.scene.start('GamePlay')
  },
  update: function() {
    //update objects and variables
  }
})

//add scene to list of scenes
myGame.scenes.push(mainMenuState)