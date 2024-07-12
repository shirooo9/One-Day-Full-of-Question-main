const inputScreen = document.querySelector("#namaModal");
const startScreen = document.querySelector("#start");
const tutorialScreen = document.querySelector("#tutorial");
const gameScreen = document.querySelector("#game_question");
const resumeScreen = document.querySelector("#resume");
const gameChoiceScreen = document.querySelector("#game_choice");

let currentChoice = '';

const screen = {
  show: (item) => {
    item.classList.remove("hide");
    item.classList.add("show");
  },
  hide: (item) => {
    item.classList.remove("show");
    item.classList.add("hide");
  },
  changeCardImage: (item, img) => {
    item.src = img;
  },
  changeText: (item, message) => {
    item.innerHTML = message;
  },
  changeButtonValue: (btn, txt) => {
    btn.value = txt;
  }
}

function saveNama() {
  var startElement = document.getElementById('start');
  startElement.style.display = 'block'; 
  startElement.style.pointerEvents = 'auto'; 
}

function startGame() {
  startScreen.style.display = 'none';
  // screen.hide(startScreen);
  continueStory(choices.get('start'));
  screen.show(gameScreen);
}

function chooseOption(opt) {
  if (choices.get(opt).continueTitle === 'exit') {
    location.reload();
  } else {
    continueStory(choices.get(opt));
    screen.hide(gameChoiceScreen);
    screen.show(resumeScreen)
    currentChoice = opt;
  }
}

function continueStory(story) {
  const continueTitle = document.querySelector("#continueTitle");
  const continueText = document.querySelector("#continueText");
  const continueImage = document.querySelector("#continueImage");

  screen.changeCardImage(continueImage, story.continueImage);
  screen.changeText(continueTitle, story.continueTitle);
  screen.changeText(continueText, story.continueText)
}

function showStory(story) {
  const cardTitle = document.querySelector("#card-title");
  const cardText = document.querySelector("#card-text");
  const cardImage = document.querySelector('#card-image');
  const btn1 = document.querySelector("#btn1");
  const btn2 = document.querySelector("#btn2");

  screen.show(gameChoiceScreen)
  screen.changeCardImage(cardImage, story.cardImg);
  screen.changeText(cardTitle, story.cardTitle);
  screen.changeButtonValue(btn1, story.opt1);
  screen.changeButtonValue(btn2, story.opt2);
  screen.changeText(cardText, story.cardTxt);
}

function hideResume() {
  screen.hide(resumeScreen);
  screen.show(gameChoiceScreen);
}

function up () {
  window.scrollTo(0, 0);
};
