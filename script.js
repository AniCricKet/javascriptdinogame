// Get the dinosaur, cactus, jump button, and score elements from the webpage
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const jumpButton = document.getElementById("jumpButton");
const scoreElement = document.getElementById("score");

let score = 0; // Initialize the score to 0

function jump() {
  // Check if the dinosaur is already jumping
  if (!dino.classList.contains("jump")) {
    // Generate a random color
    const randomColor = getRandomColor();

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;

    // Make the dinosaur jump by adding the "jump" class
    dino.classList.add("jump");

    // After 500 milliseconds, remove the "jump" class and restore the background color
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
  }
}

function getRandomColor() {
  // Generate random values for red, green, and blue channels in the range of 150-255
  const red = Math.floor(Math.random() * 106) + 150;
  const green = Math.floor(Math.random() * 106) + 150;
  const blue = Math.floor(Math.random() * 106) + 150;

  // Construct the color code using the generated values
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}


// // Helper function to generate a random color
// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }


// Function that handles the "Arrow Up" key press event
function handleKeyDown(event) {
  // Check if the pressed key is the "Arrow Up" key
  if (event.key === "ArrowUp") {
    // Call the jump function to make the dinosaur jump
    jump();
  }
}

// Add a click event listener to the jump button, so when it's clicked, the jump function is called
jumpButton.addEventListener("click", jump);

// Add a keydown event listener to the document, so when any key is pressed, the handleKeyDown function is called
document.addEventListener("keydown", handleKeyDown);

// Set up a continuous check to detect if the dinosaur collides with the cactus or if the cactus hits the left side of the screen
let isAlive = setInterval(function () {
  // Get the vertical position of the dinosaur
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  // Get the horizontal position of the cactus
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  // Check if the cactus hits the left side of the screen
  if (cactusLeft < 0) {
    // If the dino jumps over the cactus it will increment the score
    score++;
    scoreElement.textContent = score; // Update the score on the webpage
  }

  // Check if the cactus is within a certain range of the dinosaur and if the dinosaur is at the appropriate height to collide
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // If there is a collision, stop the continuous check
    clearInterval(isAlive);

    // Stop the dinosaur's jumping animation
    dino.style.animation = "none";

    // Show an alert with the message "Game Over!"
    alert("Game Over!");

    // Reset the score to 0
    score = 0;
    scoreElement.textContent = score; // Update the score on the webpage

    // Refresh the page to restart the game
    location.reload();
  }
}, 10);
