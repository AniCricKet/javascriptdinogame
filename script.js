// Get the dinosaur, cactus, jump button, and score elements from the webpage
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const jumpButton = document.getElementById("jumpButton");
const scoreElement = document.getElementById("score");

let score = 0; // Initialize the score to 0

function jump() {
  // Check if the dinosaur is already jumping
  if (!dino.classList.contains("jump")) {
    // Generate a random color and change the background color
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    // Make the dinosaur jump by adding the jump class
    dino.classList.add("jump");
    // After 500 milliseconds, remove the jump class bringing the dino back to resting position
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
  }
}

function getRandomColor() {
  // Generate random values for red, green, and blue channels between 150-255
  const red = Math.floor(Math.random() * 106) + 150;
  const green = Math.floor(Math.random() * 106) + 150;
  const blue = Math.floor(Math.random() * 106) + 150;
  // Makes the given numbers easy to be converted to RGB so it can be set as the background color
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

// Function that makes it so that the up arrow key also makes the dino jump
function handleKeyDown(event) {
  // Check if the pressed key is the "Arrow Up" key
  if (event.key === "ArrowUp") {
    // Call the jump function to make the dinosaur jump
    jump();
  }
}

// Add a click event listener to the jump button, so when it's clicked, the jump function is called
jumpButton.addEventListener("click", jump);
// Add a keydown event listener to the document, so when any key is pressed, it checks if that key is the up arrow by calling the handleKeyDown function
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

  // Check if the cactus is within a certain range of the dinosaur to see if they are colliding
  // The condition checks if the cactus is within a certain range (cactusLeft < 20 && cactusLeft > 0) and if the dinosaur's vertical position overlaps 
  // with the vertical range of the cactus (145 to 145 + 25). If the condition is true, that means there's a collision.
  if (cactusLeft < 20 && cactusLeft > 0 && dinoTop + 30 >= 145 && dinoTop <= 145 + 25) {
    // If there is a collision, stop the continuous check
    clearInterval(isAlive);
    // Stop the dinosaur's jumping animation and end the game
    dino.style.animation = "none";
    alert("Game Over!");
    // Reset the score to 0 and update the webpage
    score = 0;
    scoreElement.textContent = score;
    // Refresh the page to restart the game
    location.reload();
  }  
}, 10);
