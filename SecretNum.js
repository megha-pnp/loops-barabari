let secretNumber = 15;
let guesses = [12,18,15];

for(let i=0; i<guesses.length; i++){
    let userGuess = guesses[i];

    if(userGuess < secretNumber){
    console.log(`Attempt ${i+1}: Too low!`);
    
}else if(userGuess > secretNumber){
    console.log(`Attempt ${i+1}: Too High!`);}
else{
     console.log("Bingo! You guessed it!");
}
}