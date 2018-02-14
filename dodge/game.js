/*global createCanvas*/
/*global background*/
/*global createSprite*/
/*global width*/
/*global height*/
/*global drawSprites*/
/*global RIGHT_ARROW*/
/*global keyDown*/
/*global LEFT_ARROW*/

var enemy;
var player;

function setup() {
  createCanvas(250, 250);
  player = createSprite(width/2, height-25, 50, 50);
  enemy = createSprite(width/2, 0, 10, 30);
}

function draw() {
  background(0, 0, 100);

  if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) {
    player.position.x = player.position.x + 1;
  }

  if (keyDown(LEFT_ARROW) && player.position.x > 25) {
  player.position.x = player.position.x - 1;
}

enemy.position.y = enemy.position.y + 1;

drawSprites();
}