

function messageScore (score, totalWords) {
    let spanScore = document.querySelector(".scoreZone span");
    let spantxt = `${score} / ${totalWords}`;
    spanScore.innerHTML = spantxt;
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

    let inputWrite = document.getElementById("inputWrite");
    let btnValidation = document.getElementById("btnValidation");
    showProposition(listWords[i]);
    btnValidation.addEventListener("click", () =>{
       console.log(inputWrite.value);
       if(inputWrite.value === listWords[i]) {
        score++;
       }
       i++;
       messageScore(score, i);
       inputWrite.value = "";

       if(listWords[i] === undefined) {
          showProposition("The game is finished!");
          btnValidation.disabled = true;
       }else {
        showProposition(listWords[i]);
       }   

    })
    // if (choice === "words") {
    //     score = startLoopOfTheGame(listWords);
    //     totalWords = listWords.length;
    // } else {
    //     score = startLoopOfTheGame(listSentence);
    //     totalWords = listSentence.length;
    // }

    messageScore(score, i);
}


// let inputWrite = document.getElementById("inputWrite");

// let btnValidation = document.getElementById("btnValidation");

// let zoneProposition = document.querySelector(".zoneProposition");

// let scoreZone = document.querySelector(".scoreZone span");

// let radioBtn = document.querySelectorAll(".optionSource input");
