const canvas = document.querySelector(".game")
const ctx = canvas.getContext("2d") 

//field
const field = new Image()
field.src = "img/snake-field.png"

//foodAudio
const foodSound = new Audio()
foodSound.src = "audio/foodSound.mp3"

//FOOD:
//avocado
const avocado = new Image()
avocado.src = "img/avocado.png"

//blueberry
const blueberry = new Image()
blueberry.src = "img/blueberry.png"

//carrot
const carrot = new Image()
carrot.src = "img/carrot.png"

//cookie
const cookie = new Image()
cookie.src = "img/cookie.png"

//mango
const mango = new Image()
mango.src = "img/mango.png"

//watermelon
const watermelon = new Image()
watermelon.src = "img/watermelon.png"

//FOODLIST
const foodList = [avocado, blueberry, carrot, cookie, mango, watermelon]
let foodItem = foodList[Math.floor(Math.random() * 5)]

//GLOBAKVARIABLES
let box = 32
let score = 0
let worstScore

//removemrnt variables
let XRem = 1
let YRem = 6

//show snake
let snakeBody = []
snakeBody[0] = {
    x: (7 + XRem) * box,
    y: (6 + YRem) * box,
}

//food coordinates
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 13 + 6) * box,
}

let dir;

document.addEventListener("keydown", (event) => {
    if ((event.code === "ArrowLeft" || event.code === "KeyA")  && dir != "right") {
        dir = "left"
    }
    if ((event.code === "ArrowUp" || event.code === "KeyW") && dir != "down") {
        dir = "up"
    }
    if ((event.code === "ArrowRight" || event.code === "KeyD") && dir != "left") {
        dir = "right"
    }
    if ((event.code === "ArrowDown" || event.code === "KeyS") && dir != "up") {
        dir = "down"
    }
})

//show field functions
const permGameStream = () => {
    ctx.drawImage(field, 0, 0)
    ctx.drawImage(foodItem, food.x, food.y)

    for (i=0; i<snakeBody.length; i++) {
        ctx.fillStyle = i === 0 ? "black" : "grey"
        ctx.fillRect(snakeBody[i].x, snakeBody[i].y, box, box)
    }


    ctx.fillStyle = "white"
    ctx.font = "25px Arial"
    ctx.fillText("Snake Game", box, box * 2)

    ctx.fillStyle = "white"
    ctx.font = "25px Arial"
    ctx.fillText("Score: ", box * 12, box * 2)

    ctx.fillStyle = "white"
    ctx.font = "25px Arial"
    ctx.fillText(score, box * 15, box * 2)


    let snakeX = snakeBody[0].x
    let snakeY = snakeBody[0].y

    if (snakeX === food.x && snakeY === food.y) {
        score++
        foodSound.play()
        food = {
            x: Math.floor(Math.random() * 15 + 1) * box,
            y: Math.floor(Math.random() * 13 + 6) * box,
        } 
        foodItem = foodList[Math.floor(Math.random() * 5)]
    }else {
        snakeBody.pop()
    }

    const tale = (head, arr) => {
        for (let i=0; i<snakeBody.length; i++) {
            if (head.x ===arr[i].x && head.y === arr[i].y) {
                clearInterval(game)
                if (localStorage.getItem("maxScore") < score ) {
                    localStorage.setItem("maxScore", score)
                }

                ctx.fillStyle = "white"
                ctx.font = "25px Arial"
                ctx.fillText("Max score:", box * 6, box * 5)
            
                ctx.fillStyle = "white"
                ctx.font = "25px Arial"
                ctx.fillText(localStorage.getItem("maxScore"), box * 10, box * 5)

                ctx.fillStyle = "white"
                ctx.font = "35px Arial"
                ctx.fillText("Your score:", box * 5, box * 4)
            
                ctx.fillStyle = "white"
                ctx.font = "35px Arial"
                ctx.fillText(score, box * 11, box * 4)
            }
        }
    }

    // snakeY = 194
    // //ENDGAME
    // if (snakeX < box || snakeX > 15 * box || snakeY > 18 * box || snakeY < 6 * box) {
    //     clearInterval(game)
    // }

    //CONTINUEGAME 

    const teleport = () => {
        if (snakeY === 6 * box && dir === "up") { // up
            snakeY = 19 * box
        }
        else if (snakeY === 18 * box && dir === "down") { //down
            snakeY = 5 * box
        }
        else if (snakeX === box  && dir === "left") { //left
            snakeX = 16 * box 
        }
        else if (snakeX === 15 * box && dir === "right") {   //right
            snakeX = box * 0
        }
    }

    teleport()

    if (dir === "left") snakeX -= box
    if (dir === "up") snakeY -= box
    if (dir === "right") snakeX += box
    if (dir === "down") snakeY += box
    
    let newHead = {
        x: snakeX,
        y: snakeY,
    }

    tale(newHead, snakeBody)

    snakeBody.unshift(newHead)

}

let game = setInterval(permGameStream, 100)