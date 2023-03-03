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
        
        //opens the window on top of the existing window
        document.querySelector("#secondpage").innerHTML= window.location.replace("history.html")
        document.querySelector(".history")
        
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
    white.addEventListener("mouseout", (event)=>{
        white.style.backgroundColor="white"
        sustainable.style.color="#0046AA"
    }
    )

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
    blue.addEventListener("mouseout", (event)=>{
        blue.style.backgroundColor="#0046AA"
        text.style.color="white"
    }
    )

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
    third.addEventListener("mouseout", (event)=>{
        third.style.backgroundColor="white";
        distribution.style.color="#0046AA"
    })

let four=document.getElementById("blue2")
let project= document.getElementById("repair")
    four.addEventListener("mouseover", (event)=>{
        four.style.backgroundColor="white";
        project.style.color="#0046AA"
    })
    four.addEventListener("click", (event)=>{
        four.style.backgroundColor="white";
        project.style.color="blue"
        window.open("project.html")
    })
    four.addEventListener("mouseout", (event)=>{
        four.style.backgroundColor="#0046AA"
        project.style.color="white"
    }
    )

let five=document.getElementById("white3")
let impact= document.querySelector("#draw")
    five.addEventListener("mouseover", (event)=>{
        five.style.backgroundColor="#0046AA"
        impact.style.color="white"
    })
    five.addEventListener("click", (event)=>{
        five.style.backgroundColor="#0046AA";
        impact.style.color="white"
        window.open("impact.html")
    })
    five.addEventListener("mouseout", (event)=>{
        five.style.backgroundColor="white";
        impact.style.color="#0046AA"
    })


let six=document.getElementById("blue3")
let energy= document.getElementById("power")
    six.addEventListener("mouseover", (event)=>{
        six.style.backgroundColor="white";
        energy.style.color="#0046AA"
    })
    six.addEventListener("click", (event)=>{
        six.style.backgroundColor="white";
        energy.style.color="blue"
        window.open("energy.html")
    })
    six.addEventListener("mouseout", (event)=>{
        six.style.backgroundColor="#0046AA"
        energy.style.color="white"
    }
    )