const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const jumpButton = document.getElementById("jumpButton");

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

function handleKeyDown(event) {
  if (event.key === "ArrowUp") {
    jump();
  }
}

jumpButton.addEventListener("click", jump);
document.addEventListener("keydown", handleKeyDown);

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    clearInterval(isAlive); // Stop the game loop
    dino.style.animation = "none"; // Remove the jump animation
    alert("Game Over!");
  }
}, 10);