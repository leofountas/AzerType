

function messageScore (score, totalWords) {
    let spanScore = document.querySelector(".scoreZone span");
    let spantxt = `${score} / ${totalWords}`;
    spanScore.innerHTML = spantxt;
}


function showErrorMsg(message) {
    
    let spanErrormsg = document.getElementById("errorMsg")

    if (!spanErrormsg) {
        let popup = document.querySelector(".popup");
        spanErrormsg = document.createElement("span");
        spanErrormsg.id = "errorMsg"
        
        popup.append(spanErrormsg);
    }
    spanErrormsg.innerText = message;
}


function formControl(scoreEmail) {
    try {
        let nameContainer = document.getElementById("name");
        let name = nameContainer.value;
        validateName(name);

        let emailContainer = document.getElementById("email");
        let email = emailContainer.value;
        validateEmail(email);
        showErrorMsg("");
        showEmail(name, email, scoreEmail);
    
    } catch(error) {
        showErrorMsg(error.message);
    }


}


function validateName(name) {
    if (name.length < 2) {
        throw new Error ("The name is too short. ");
    }
   
}

function validateEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9.-_]+@[a-z0-9.-_]+\\.[a-z0-9.-_]+");
    if (!emailRegExp.test(email)) {
        throw new Error("The email is not valid. ");
    }
}

function showEmail(name, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Hello, I'm  ${name} and I just reached a score of ${score} on the site of Azertype !`;
    location.href = mailto;
}

function showProposition (proposition) {
     let zoneProposition = document.querySelector(".zoneProposition");
     zoneProposition.innerText = proposition
}



// game start here

function startGame() {
    let score= 0;
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
     let scoreEmail = `${score} / ${i}`;
     formControl(scoreEmail);
 })

    messageScore(score, i);
}








