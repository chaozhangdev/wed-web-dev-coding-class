// step 1: select html tags
let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');

// step 2: generate 2 random numbers between 1 - 6 
let number1 =  Math.floor(Math.random() * 6 + 1);
let number2 =  Math.floor(Math.random() * 6 + 1);

// Math.random() -> generate a decimal between 0 - 1 (including 0 not 1)
// Math.random() * 6 -> generate a decimal between 0 - 6 (including 0 not 6)
// Math.random() * 6 + 1 -> generate a decimal between 1 - 7 (including 1 not 7)
// Math.floor(Math.random() * 6 + 1) -> generate a integer between 1 - 6 (including 1 and 6)

let address1 = './img/dice' + number1 + '.png';
let address2 = './img/dice' + number2 + '.png';

// step 3: change image address 
dice1.setAttribute('src', address1);
dice2.setAttribute('src', address2);

//Step 4:
// Write the game code 
// click the button -> Change the dice images & title
// compare number1 with number2 (if) -> change title to player 1 or player 2 win

// Tips: 
// let title = document.getElementById('title')
// title.innerText = 'Play the game ! !!!!!!!!! '




