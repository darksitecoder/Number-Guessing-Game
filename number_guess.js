const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){

    let guess = document.getElementById("guessField").value
    guesses+=1;

    if (guess == answer){
        alert(`${answer} is the #. it tooks you ${guesses} guesses`);        
    }
    else if (guess < answer) 
    {
        alert("Too small!");
    }
    else{
        alert("Too large!");
    }

}

// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function(){

//   let guess = document.getElementById("guessField").value
//   guesses+=1;
  
//   if(guess == answer){
//     alert(`${answer} is the #. It took you ${guesses} guesses`);
//   }
//   else if(guess < answer){
//     alert("Too small!");
//   }
//   else{
//     alert("Too large!");
//   }
// }