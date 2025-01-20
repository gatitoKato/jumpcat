let player = document.getElementById("player");
let enemy = document.getElementById("enemy");
let scoreElement = document.getElementById ("scoreId");

let score = 0;
let isJumping = false;

console.log(score);
console.log(enemy);
console.log(scoreElement);
console.log(score);
console.log(isJumping);


function updateScore() {
    score++;
    scoreElement.innerHTML = "your score: ";
}

window.addEventListener("keydown", checkkey);


function checkkey(e) {
    console.log(e.key);
    if(e.key === "ArrowUp" || e.key === " "){
        jump();
    }
}


function jump() {
    if (isJumping) {
      return; // get out of the function
    }
    isJumping = true;
    player.classList.add("jump");
    setTimeout(removeAnimation, 1000);
    let jumpSound = new Audio("jump.wav");
    jumpSound.play();
  }
  function removeAnimation() {
    player.classList.remove("jump");
    isJumping = false;
    updateScore();
  }
  let checkCollisionInterval = setInterval(checkCollision, 100);
  
  function checkCollision() {
    if (elementsOverlap (player, enemy)) {
        clearInterval(checkCollisionInterval);
        let best = localStorage.getItem("best")
        //
        if (!best || best < score) {
            localStorage.setItem("best", score)
        }
     document.body.innerHTML = `
     <p id= "overId"> gameover ! ! ! </p>
     <p id="result"> your score is ${score} </p>
     <p id="best"> your best score is ${best}
     <p id="retry" to retry press f5 or Fn> </p>
     `;
     let oversound = new Audio("game-over.wav");
     oversound.play

    }
  }

  function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }

  