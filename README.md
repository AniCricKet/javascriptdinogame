# Dino Jump Game

This is a simple browser-based game where a dinosaur jumps over cacti. The game is implemented using HTML, CSS, and JavaScript.

## Gameplay

- The player controls the dinosaur character using the space bar on the keyboard.
- Pressing the space bar makes the dinosaur jump.
- The objective is to avoid colliding with the cacti.
- If the dinosaur collides with a cactus, the game ends, and an alert with the message "Game Over!" is shown.

## Getting Started

To run the game, follow these steps:

1. Clone the repository or download the source code files.

2. Open the `index.html` file in a web browser.

3. Use the space bar to make the dinosaur jump and try to avoid the cacti.

## Code Overview

The code consists of an HTML file (`index.html`) and a JavaScript file (`script.js`).

- `index.html`: This file contains the structure and layout of the game. It includes two HTML elements with the IDs "dino" and "cactus" to represent the dinosaur and the cactus obstacles, respectively.

- `script.js`: This file contains the JavaScript code that controls the gameplay. It includes the following key components:

  - The `jump()` function: This function is responsible for making the dinosaur jump. It adds the "jump" CSS class to the dinosaur element and removes it after a delay of 300 milliseconds.

  - The `isAlive` interval: This interval runs every 10 milliseconds and checks for collisions between the dinosaur and the cacti. If a collision is detected, an alert with the message "Game Over!" is shown.

  - The event listener for the "keydown" event: This event listener listens for keydown events on the document. When the space bar is pressed, the `jump()` function is called, making the dinosaur jump.

## Customization

You can customize the game by modifying the CSS styles in the `index.html` file. Adjusting the positioning, sizes, colors, and other styling properties of the dinosaur and cactus elements can change the visual appearance of the game.
