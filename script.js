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

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  console.log("cactusLeft = %d, dinoTop = %d", cactusLeft, dinoTop);
  if (cactusLeft < 20 && cactusLeft > 0 && dinoTop >= 150) {
    cactus.classList.remove("cactus");
    alert("Game Over!");
  }
}, 10);

jumpButton.addEventListener("click", function () {
  jump();
});
