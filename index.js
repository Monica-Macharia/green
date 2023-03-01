//changing the landing page image once the next button is clicked
let button = document.querySelector("#next")
    
    button.addEventListener("click", (event)=>{
        button.style.borderColor="rgb(65, 105, 225)";
        button.style.borderWidth="medium";
        let newImage = document.querySelector("#hero")
        newImage.src= "./images/panel.jpg"
        document.querySelector("#things").style.display="none";
    }
    )
//changing back the landing page image once the back button is clicked
let back = document.querySelector("#back")
    back.addEventListener("click", (event)=>{
        back.style.borderColor="rgb(65, 105, 225)";
        back.style.borderWidth="medium";
        let backImage = document.querySelector("#hero")
        backImage.src= "./images/mike.jpg"
        document.querySelector("#things").style.display="inline-block";
    })

//opening a HTML page after more on our history is clicked
let history=document.querySelector("#work")
    history.addEventListener("click", (event)=> {
        window.open("history.html")
        
        
    } )
    history.addEventListener("mouseover", (event)=>{
        history.style.backgroundColor="lightblue"
    })

//integrating hover on services elements
let white=document.getElementById("white")
 let sustainable = document.querySelector("#build")
    white.addEventListener("mouseover", (event)=>{
        white.style.backgroundColor="#0046AA"
        sustainable.style.color="white"
    })
    white.addEventListener("click", (event)=>{
        white.style.backgroundColor="#0046AA";
        sustainable.style.color="white"
        window.open("sustainable.html")
    })

let blue=document.getElementById("blue")
let text = document.querySelector("#renovate")
    blue.addEventListener("mouseover", (event)=>{
        blue.style.backgroundColor="white";
        text.style.color="#0046AA"
    })
    blue.addEventListener("click", (event)=>{
        blue.style.backgroundColor="white";
        text.style.color="blue"
        window.open("carbon.html")
    })

    let third=document.getElementById("white2")
    let distribution= document.querySelector("#consult")
       third.addEventListener("mouseover", (event)=>{
           third.style.backgroundColor="#0046AA"
           distribution.style.color="white"
       })
       third.addEventListener("click", (event)=>{
           third.style.backgroundColor="#0046AA";
           distribution.style.color="white"
           window.open("distribution.html")
       })