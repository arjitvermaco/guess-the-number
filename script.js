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

document.querySelector(".check").addEventListener("click", function () {
    console.log("Button Was Clicked!!!");
    const userGuess = Number(document.querySelector(".guess").value);

    //When user has no input
    if (!userGuess) {
        console.log("Please Enter a Number");
        document.querySelector(".message").textContent = "❌ Please Enter a Number";
    } else if (userGuess === secretNumber) {
        document.querySelector('.number').textContent = userGuess;
        document.querySelector(".message").textContent = "You Win 🎉";
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').style.color = 'green';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (userGuess !== secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.check').textContent = "Try Again";
        if (userGuess < secretNumber) {
            document.querySelector('.message').textContent = "Too Low";
        } else {
            document.querySelector('.message').textContent = "Too High";
        }
    }
})


document.querySelector('.again').addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    console.log("new secret number", secretNumber)
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#292928';
    document.querySelector('.number').style.color = '#292928';

})
