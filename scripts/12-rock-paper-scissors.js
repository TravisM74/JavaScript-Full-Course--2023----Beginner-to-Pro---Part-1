 /*
    creates a score object from the localy stored data called score.
    then JSON.parse(String) converts that string back to a jScript object

    using a Default Operator || we can incorperate the falsy method below 
    */
    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        loses: 0,
        ties: 0
      };
  
      updateScoreElement();
  
  // use falsey method to see if score is null. ie no saves score
  /*
      if(!score){
        score = {
          wins:0,
          loses:0,
          ties:0
        };
      }
  */
      let randomNumber = Math.random();
      function playGame(playerMove){
          const computerMove = pickComputerMove();
          let result = '';   
          if (playerMove === 'scissors') {
                  if (computerMove === 'scissors'){
                      result = 'Tie.';
                  } else if (computerMove === 'rock'){
                      result ='You lose.';
                  } else if (computerMove === 'paper') {
                  result = 'You win.';
                  }
          } else if (playerMove === 'paper'){
                  if (computerMove === 'paper'){
                      result = 'Tie.';
                  } else if (computerMove === 'scissors'){
                      result ='You lose.';
                  } else if (computerMove === 'rock') {
                  result = 'You win.';
                  }
          } else if (playerMove === 'rock'){
                  if (computerMove === 'rock'){
                      result = 'Tie.';
              } else if (computerMove === 'paper'){
                      result ='You lose.';
              } else if (computerMove === 'scissors') {
                  result = 'You win.';
              }
          }
      if(result === 'You win.'){
        score.wins+= 1;
      } else if (result === 'You lose.'){
        score.loses+= 1;
      } else if (result === 'Tie.'){
        score.ties+= 1;
      }
      /*
      conver the score object to a JSON String using JSON.stringify(object).
      then use localStorage.setItem('name','String'); to store the data localy
      */
      localStorage.setItem('score',JSON.stringify(score));
      
      updateScoreElement();
      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves')
          .innerHTML = `You 
          <img src="images/${playerMove}-emoji.png"
          class="move-icon">
          <img src="images/${computerMove}-emoji.png"
          class="move-icon">
        Computer`;
      /*     
      alert(`You picked ${playerMove} , The computer picked ${computerMove}. ${result} \nWins:${score.wins} ,Losses: ${score.loses}, Ties:${score.ties}`); 
      */
      };
      function updateResult(){
        document.querySelector('.js-result')
          .innerHTML = result;
      };
      function updateMoves(){
        
      };
      function updateScoreElement(){
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins} ,Losses: ${score.loses}, Ties: ${score.ties}`;
        
      };
      let isAutoPlaying = false;
      let intervalId;
      
      
      function autoPlay(){
        if (!isAutoPlaying){
          intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
          },1000);
          isAutoPlaying = true;
        } else{
            clearInterval(intervalId);
            isAutoPlaying = false;
          };
        };
        /*
        using EventListeners in jscript is perfered to using onclick="" in the html
        
        add a class to the button,
        document it into the jscript
        add an event listener .addEventrListener( event, function)
        use the 'click' for on click and an ananomys function to call your function event.
        */
        document.querySelector('.js-auto-play-button')
          .addEventListener('click',() => {
            autoPlay()
          });
        
      document.querySelector('.js-rock-button')
        .addEventListener('click',() => {
          playGame('rock');
        });
  
      document.querySelector('.js-paper-button')
        .addEventListener('click',() =>{
          playGame('paper');
        });
    
      document.querySelector('.js-scissors-button')
        .addEventListener('click',() => {
          playGame('scissors');
        });

      document.querySelector('.js-reset-button')
        .addEventListener('click',() => {
          score.wins = 0;
          score.loses = 0;
          score.ties = 0;
          localStorage.removeItem('score');
          updateScoreElement();
        });
//adding an Event listener to the body for any keyPresses
      document.body.addEventListener('keydown',(event) =>{
        if(event.key === 'r'){
          playGame('rock');
        }
        if(event.key === 'p'){
          playGame('paper');
        }
        if(event.key === 's'){
          playGame('scissors');
        }
        if(event.key === 'a'){
          autoPlay();
        }
      });

      function pickComputerMove(){
        let computerMove = '';
        randomNumber = Math.random();
        if (randomNumber >= 0 &&  randomNumber < 1/3){
        computerMove ='rock';
        } else if (randomNumber >= 1/3  && randomNumber < 2/3) {
          computerMove ='paper';
        } else if(randomNumber >= 2/3 && randomNumber < 3/3) {
          computerMove ='scissors';
        }
        console.log(computerMove);
        return computerMove;
      }