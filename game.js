let secretNumber = Math.floor(Math.random()*20)+1;
let score = 20;
let highscore = 0;

console.log(secretNumber)

const c = document.querySelector(".check")

c.addEventListener("click", ()=>{
    let guess = Number(document.querySelector(".guess").value)
    if(!guess){
        alert("Enter a valid value")
    }
    else if(secretNumber===guess){
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".message").innerHTML = "You guessed it right!"
        document.querySelector(".number").textContent = secretNumber
        document.querySelector(".highscore").innerHTML = score
    
    }

    else if(secretNumber>guess){
        if(score>0){
            score = score-1
            document.querySelector(".score").textContent = score
            document.querySelector(".message").innerHtml = "Too Low"
        }
        else{
            document.querySelector(".message").innerHTML = "You lost"
            document.querySelector("body").style.backgroundColor = "rgb(181, 94, 94)"
            document.querySelector("h1").textContent = "Answer is:"
            document.querySelector(".number").textContent = secretNumber

        }
    }
    else if (secretNumber<guess){
        if(score>0){
            score = score-1
            document.querySelector(".score").textContent = score
            document.querySelector(".message").textContent = "Too High!"
        }
        else{
            document.querySelector(".message").innerHTML = "You lost"
            document.querySelector("body").style.backgroundColor = "rgb(181, 94, 94)"
            document.querySelector("h1").textContent = "Answer is:"
            document.querySelector(".number").textContent = secretNumber

        }
    }
})