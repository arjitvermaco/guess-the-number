// console.log("File is attached");
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Hello World";
// // console.log(typeof document.querySelector(".message"))
// document.querySelector(".number").textContent = 10;

// console.log(document.querySelector(".guess").value)

// document.querySelector(".check").addEventListener("click",function(){
//     console.log("Button Was Clicked!!!")
// })

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(secretNumber)

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
    console.log("Button Was Clicked!!!");
    const userGuess = Number(document.querySelector(".guess").value);

    //When user has no input
    if (!userGuess) {
        displayMessage("❌ Please Enter a Number");
    } else if (userGuess === secretNumber) {
        document.querySelector('.number').textContent = userGuess;
        displayMessage("You Win 🎉");
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').style.color = 'green';
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (userGuess !== secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.check').textContent = "Try Again";
            // if (userGuess < secretNumber) {
            //     displayMessage("Too Low");
            // } else {
            //     displayMessage("Too High");
            // }
            // let message = userGuess > secretNumber? "Too High" : "Too Low";
            // displayMessage(message)
            displayMessage(userGuess > secretNumber? "Too High" : "Too Low");
        } else {
            displayMessage("You Lose 😢");
        }
    }
})


document.querySelector('.again').addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    console.log("new secret number", secretNumber)
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#292928';
    document.querySelector('.number').style.color = '#292928';

})
