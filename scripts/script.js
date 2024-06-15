

function messageScore (score, totalWords) {
    alert("your total score is " + score + "/" + totalWords);
}

function choiceWordsOrSentences() {
    // here the user is forced to choose between two list 
    let choice = prompt("Choose between list :  words or sentences");
    while (choice !== "words" && choice !== "sentences") {
        choice = prompt("Choose between list :  words or sentences");
    }
    return choice
}


function startLoopOfTheGame(listOfPropositions) {
    let score = 0;
    for(i = 0; i < listOfPropositions.length; i++) {  

        let insertWord = prompt("Copy this  : " + listOfPropositions[i]);
    
        if(insertWord === listOfPropositions[i]) {
         score++ ;
        }
    }
    return score
}


function startGame() {
    let choice = choiceWordsOrSentences();
    let score= 0;
    let totalWords = 0;

    if (choice === "words") {
        score = startLoopOfTheGame(listWords);
        totalWords = listWords.length;
    } else {
        score = startLoopOfTheGame(listSentence);
        totalWords = listSentence.length;
    }

    messageScore(score, totalWords);
}







