let goku = document.querySelector('#goku');
let zen = document.querySelector('#zen');
let op = document.querySelector('#op');
let beginFight = document.querySelector('#beginFight');
let myLife = document.getElementById('mylife');
let enemyLife = document.getElementById('enemylife');
let countR = document.getElementById('countR');
let winloss = document.getElementById('winloss');
let battlesub = document.getElementById('battlesub');
let enemyAvatar = document.getElementById('enemyAvatar');
let drawav = '';
let computerPlay = () => {
  let computerGuess = Math.floor(Math.random() * 3);

  return computerGuess;
};

let myLifeCount = 5;
let enemyLifeCount = 5;
let countRound = 0;

function checkfinalScore() {
  if (myLifeCount == 0) {
    myLife.innerText = 0;
    winloss.innerText =
      "Enemy is laughing at you!!! you are totally lost and You don't have any strength left in your body to fight!!! Maybe you should train more!!!";
    battlesub.innerText = '';
    return (myLifeCount = 0);
  } else if (enemyLifeCount == 0) {
    enemyLife.innerText = 0;
    winloss.innerText =
      'You did it! the enemys is totally crushed. he cannot get up anymore. You are totally powerful! although you should train more! because enemy may crush you down next time!';
    battlesub.innerText = '';
    return (enemyLifeCount = 0);
  }
}

let theGame = (computerSelection, playerSelection) => {
  setInterval(function () {
    checkfinalScore();
  }, 100);
  if (myLifeCount == 0) {
    myLife.innerText = 0;
    winloss.innerText =
      "Enemy is laughing at you!!! you are totally lost and You don't have any strength left in your body to fight!!! Maybe you should train more!!!";
    battlesub.innerText = '';
    return myLifeCount;
  } else if (enemyLifeCount == 0) {
    enemyLife.innerText = 0;
    winloss.innerText =
      'You did it! the enemys is totally crushed. he cannot get up anymore. You are totally powerful! although you should train more! because enemy may crush you down next time!';
    battlesub.innerText = '';
    return enemyLifeCount;
  } else if (computerSelection == 0 && playerSelection == 1) {
    winloss.innerText = 'You Lost!!!!';
    enemyAvatar.src = 'https://i.ibb.co/48hgK8T/Zen.jpg';
    battlesub.innerText =
      "Zen crushed you down with his ultimate telekenesis Move and you couldn't Do anything at all! maybe try next time!";
    myLifeCount = myLifeCount - 1;
    myLife.innerText = myLifeCount;
    enemyLife.innerText = enemyLifeCount;
    countRound = countRound + 1;
    countR.innerText = countRound;
    return myLifeCount;
  } else if (playerSelection == 0 && computerSelection == 1) {
    enemyLifeCount = enemyLifeCount - 1;
    enemyAvatar.src = 'https://i.ibb.co/9rHBpx6/gkkkk.jpg';
    battlesub.innerText =
      "You crushed Goku down with Your ultimate telekenesis Move and Goku couldn't Do anything at all! Great job!";
    winloss.innerText = 'You Won!!!!';
    myLife.innerText = myLifeCount;
    enemyLife.innerText = enemyLifeCount;
    countRound = countRound + 1;
    countR.innerText = countRound;
    return enemyLifeCount;
  } else if (playerSelection == 2 && computerSelection == 0) {
    enemyLifeCount = enemyLifeCount - 1;
    battlesub.innerText =
      'Great!!! you punched zen to the outer space. zen is in rage trying to supercharged his ultimate telekenis to the next level';
    enemyAvatar.src = 'https://i.ibb.co/48hgK8T/Zen.jpg';
    winloss.innerText = 'You Won!!!!';
    myLife.innerText = myLifeCount;
    enemyLife.innerText = enemyLifeCount;
    countRound = countRound + 1;
    countR.innerText = countRound;
    return enemyLifeCount;
  } else if (playerSelection == 0 && computerSelection == 2) {
    myLifeCount = myLifeCount - 1;
    battlesub.innerText =
      'one punch man punched the hell alot of you, your teeth are full of blood! maybe you need to wait for your luck';
    enemyAvatar.src = 'https://i.ibb.co/1Qdgdjs/onep.png';
    winloss.innerText = 'You Lost!!!!';
    myLife.innerText = myLifeCount;
    enemyLife.innerText = enemyLifeCount;
    countRound = countRound + 1;
    countR.innerText = countRound;
    return myLifeCount;
  } else if (playerSelection == 1 && computerSelection == 2) {
    enemyLifeCount = enemyLifeCount - 1;
    battlesub.innerText =
      'You upgraded yourself to Super saiyan ultra instinct and Unleashed a kamehame ha and your enemy one punch man is nowhere to be seen. is he dead?';
    winloss.innerText = 'You Won!!!!';
    enemyAvatar.src = 'https://i.ibb.co/1Qdgdjs/onep.png';
    myLife.innerText = myLifeCount;
    enemyLife.innerText = enemyLifeCount;
    countRound = countRound + 1;
    countR.innerText = countRound;
    return enemyLifeCount;
  } else if (playerSelection == 2 && computerSelection == 1) {
    myLifeCount = myLifeCount - 1;
    battlesub.innerText =
      "Hey you can not beat GOku! he is the legendary super saiyan. don't try your luck kiddo! choose another opponent";
    enemyAvatar.src = 'https://i.ibb.co/9rHBpx6/gkkkk.jpg';
    winloss.innerText = 'You Lost!!!!';
    myLife.innerText = myLifeCount;
    enemyLife.innerText = enemyLifeCount;
    countRound = countRound + 1;
    countR.innerText = countRound;
    return myLifeCount;
  } else {
    winloss.innerText = ' A Draw!!!!';
    battlesub.innerText =
      'wow! what a battle! enemy is preparing his next attack, choose wisely';
    enemyAvatar.src = drawav;
    console.log(drawav);
    myLife.innerText = myLifeCount;
    enemyLife.innerText = enemyLifeCount;
    countRound = countRound + 1;
    countR.innerText = countRound;
  }
};

// DOM logic

goku.addEventListener('click', (e) => {
  e.preventDefault();
  if (myLifeCount > 0 || enemyLifeCount > 0) {
    theGame(computerPlay(), selectGoku());
  } else if (myLifeCount == 0 || enemyLifeCount == 0) {
    myLife.innerText = myLifeCount;
    enemyLife.innerText = enemyLifeCount;
  }
});

zen.addEventListener('click', (e) => {
  e.preventDefault();
  if (myLifeCount > 0 || enemyLifeCount > 0) {
    theGame(computerPlay(), selectZen());
  } else if (myLifeCount == 0 || enemyLifeCount == 0) {
    myLife.innerText = myLifeCount;
    enemyLife.innerText = enemyLifeCount;
  }
});

op.addEventListener('click', (e) => {
  e.preventDefault();
  if (myLifeCount > 0 || enemyLifeCount > 0) {
    theGame(computerPlay(), selectOp());
  } else if (myLifeCount == 0 || enemyLifeCount == 0) {
    myLife.innerText = myLifeCount;
    enemyLife.innerText = enemyLifeCount;
  }
});

//
//
//
//

beginFight.addEventListener('click', () => location.reload());

function selectGoku() {
  drawav = 'https://i.ibb.co/9rHBpx6/gkkkk.jpg';
  return 1;
}

function selectZen() {
  drawav = 'https://i.ibb.co/48hgK8T/Zen.jpg';
  return 0;
}

function selectOp() {
  drawav = 'https://i.ibb.co/1Qdgdjs/onep.png';

  return 2;
}
