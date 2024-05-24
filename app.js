let cho = document.querySelectorAll('.choice');

let computerscore = document.querySelector('#compscore');
let userscorePara = document.querySelector('#userp');
let compscorePara = document.querySelector('#compP')
let message = document.querySelector('#msg');

let attempts = document.querySelector('#attempts');


    let attemptscore=0;
    computerscore = 0;
    userscore = 0;



let draw = () =>{
    message.innerText="Game is Draw";
    message.style.backgroundColor = "grey";
}

let win = () =>{
    userscore++;
    userscorePara.innerText = userscore;
    message.style.backgroundColor = "green";
}

let gencompchoice = () =>{
    let options = ["rock","paper","scissor"];
    let rand = Math.floor(Math.random() *3);
    return options[rand];
    
    
}



cho.forEach((choice) =>{
    console.log(choice);

choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    console.log(userchoice);
    playgame(userchoice);
attemptscore++;
    attempts.innerText= attemptscore;
});
});

let playgame = (userchoice) =>{

    let compchoice = gencompchoice();
    
console.log('com choice is',compchoice);

    if(userchoice==compchoice){
        draw();
        message.innerText=`Game is Draw \n Both choosed ${userchoice}  `;
    }

    else if(userchoice=='rock'&& compchoice=='scissor' || userchoice=='paper' && compchoice=='rock'|| userchoice=='scissor' && compchoice=='paper' ){
        win();
        message.innerText=`You WON!!\n Your ${userchoice} beats ${compchoice}  `;
       
       
        
    }

    else{
        message.innerText=`You Lost..\n ${compchoice} beats ${userchoice} `;
        message.style.backgroundColor = "brown";
        computerscore++;
        compscorePara.innerText = computerscore;

    }
}