
let app = new PIXI.Application({ width: 640, height: 360 });

document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from("https://i.ibb.co/M547g7R/coffee-cup.png");

app.stage.addChild(sprite);
sprite.y = 290

let speedX = 0
let speedY = 0

const speedXMax = 20
let aX = 0
let aY = 0
const v0 = 10
let t = null

const g = 0.5

addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') {
    aX = 1
  }

  if (event.key === 'ArrowLeft') {
    aX = -1
  }

  if (event.key === ' ') {
    speedY = v0
    t = 0
  }

})

addEventListener('keyup', event => {
  if (event.key === 'ArrowRight') {
    aX = -1
  }

  if (event.key === 'ArrowLeft') {
    aX = 1
  }
})


app.ticker.add((delta) => {
  speedX = Math.min(aX * delta + speedX, speedXMax)
  if (speedX < 0) {
    aX = 0
    speedX = 0
  }
  sprite.x = sprite.x + (delta * speedX)
  sprite.y = sprite.y - (delta * speedY)
  if (sprite.y < 290) {
    t = t + delta
    speedY = - g * t + v0
  } else {
    speedY = 0
  }


 });