const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const orange = document.querySelector('.orange');
const yellow = document.querySelector('.yellow');
const body = document.querySelector('body');
const playAgain = document.querySelector('.again');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

const color = ['red', 'green', 'blue', 'orange', 'yellow'];

let secretColor = Math.floor(Math.random() * color.length);

let tries = 5;
let highScore = 0;

const changeBackground = function (color) {
  body.style.backgroundColor = color;
};

const guessColor = function () {
  secretColor = Math.floor(Math.random() * color.length);
};

const messageDisplay = function (text) {
  message.textContent = text;
};

const scoreDisplay = function (num) {
  score.textContent = num;
};

const disableButton = function () {
  red.disabled = true;
  green.disabled = true;
  blue.disabled = true;
  orange.disabled = true;
  yellow.disabled = true;
};

const enableButton = function () {
  red.disabled = false;
  green.disabled = false;
  blue.disabled = false;
  orange.disabled = false;
  yellow.disabled = false;
};

const isRed = function () {
  red.addEventListener('click', () => {
    if (secretColor === 0) {
      changeBackground('#ff726f');
      messageDisplay('Success ✅');
      disableButton();
      if (tries > highScore) {
        highScore = tries;
        highscore.textContent = highScore;
      }
    } else {
      messageDisplay('Wrong, Try again ⛔️');
      tries--;
      scoreDisplay(tries);
    }
  });
};

isRed();

const isGreen = function () {
  green.addEventListener('click', () => {
    if (secretColor === 1) {
      changeBackground('#66e89f');
      messageDisplay('Success ✅');
      disableButton();
      if (tries > highScore) {
        highScore = tries;
        highscore.textContent = highScore;
      }
    } else {
      messageDisplay('Wrong, Try again ⛔️');
      tries--;
      scoreDisplay(tries);
    }
  });
};

isGreen();

const isBlue = function () {
  blue.addEventListener('click', () => {
    if (secretColor === 2) {
      changeBackground('#7c8dff');
      messageDisplay('Success ✅');
      disableButton();
      if (tries > highScore) {
        highScore = tries;
        highscore.textContent = highScore;
      }
    } else {
      messageDisplay('Wrong, Try again ⛔️');
      tries--;
      scoreDisplay(tries);
    }
  });
};

isBlue();

const isOrange = function () {
  orange.addEventListener('click', () => {
    if (secretColor === 3) {
      changeBackground('#ffc04d');
      messageDisplay('Success ✅');
      disableButton();
      if (tries > highScore) {
        highScore = tries;
        highscore.textContent = highScore;
      }
    } else {
      messageDisplay('Wrong, Try again ⛔️');
      tries--;
      scoreDisplay(tries);
    }
  });
};

isOrange();

const isYellow = function () {
  yellow.addEventListener('click', () => {
    if (secretColor === 4) {
      changeBackground('#fff066');
      messageDisplay('Success ✅');
      disableButton();
      if (tries > highScore) {
        highScore = tries;
        highscore.textContent = highScore;
      }
    } else {
      messageDisplay('Wrong, Try again ⛔️');
      tries--;
      scoreDisplay(tries);
    }
  });
};

isYellow();

playAgain.addEventListener('click', () => {
  tries = 5;
  scoreDisplay(tries);
  changeBackground('#444');
  guessColor();
  messageDisplay('Start Game');
  enableButton();
});
