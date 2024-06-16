

function messageScore (score, totalWords) {
    let spanScore = document.querySelector(".scoreZone span");
    let spantxt = `${score} / ${totalWords}`;
    spanScore.innerHTML = spantxt;
}


function showEmail(name, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Hello, I'm  ${name} and I just reached a score of ${score} on the site of Azertype !`;
    location.href = mailto;
}

// function choiceWordsOrSentences() {
//     // here the user is forced to choose between two list 
//     let choice = prompt("Choose between list :  words or sentences");
//     while (choice !== "words" && choice !== "sentences") {
//         choice = prompt("Choose between list :  words or sentences");
//     }
//     return choice
// }


// function startLoopOfTheGame(listOfPropositions) {
//     let score = 0;
//     for(i = 0; i < listOfPropositions.length; i++) {  

//         let insertWord = prompt("Copy this  : " + listOfPropositions[i]);
    
//         if(insertWord === listOfPropositions[i]) {
//          score++ ;
//         }
//     }
//     return score
// }

function showProposition (proposition) {
     let zoneProposition = document.querySelector(".zoneProposition");
     zoneProposition.innerText = proposition
}

function startGame() {
    // let choice = choiceWordsOrSentences();
    let score= 0;
    // let totalWords = 0;
    let i = 0;
    let listPropositions = listWords

    let inputWrite = document.getElementById("inputWrite");
    let btnValidation = document.getElementById("btnValidation");
    showProposition(listPropositions[i]);
    btnValidation.addEventListener("click", () =>{
       console.log(inputWrite.value);
       if(inputWrite.value === listPropositions[i]) {
        score++;
       }
       i++;
       messageScore(score, i);
       inputWrite.value = "";

       if(listWords[i] === undefined) {
          showProposition("The game is finished!");
          btnValidation.disabled = true;
       }else {
        showProposition(listPropositions[i]);
       }   

    })
    // if (choice === "words") {
    //     score = startLoopOfTheGame(listWords);
    //     totalWords = listWords.length;
    // } else {
    //     score = startLoopOfTheGame(listSentence);
    //     totalWords = listSentence.length;
    // }
let radioList = document.querySelectorAll(".zoneOptions input");


for(index = 0; index < radioList.length; index++) {
   radioList[index].addEventListener("change", (event) => {
    console.log(event.target.value);
    if (event.target.value === "1") {
        listPropositions = listWords;
    } else {
        listPropositions = listSentences; 
    }
      showProposition(listPropositions[i]);
   })
}

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
     event.preventDefault()

     let nameContainer = document.getElementById("name");
     let name = nameContainer.value;

     let emailContainer = document.getElementById("email");
     let email = emailContainer.value;

     let scoreEmail = `${score} / ${i}`;

     showEmail(name, score, scoreEmail);



})

    messageScore(score, i);
}


// let inputWrite = document.getElementById("inputWrite");

// let btnValidation = document.getElementById("btnValidation");

// let zoneProposition = document.querySelector(".zoneProposition");

// let scoreZone = document.querySelector(".scoreZone span");

// let radioBtn = document.querySelectorAll(".optionSource input");





