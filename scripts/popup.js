function showPopup() {
    let popupBackground = document.querySelector(".popupBackground");
    popupBackground.classList.add("active");
}



function hidePopup() {
    let popupBackground = document.querySelector(".popupBackground");
    popupBackground.classList.remove("active");
}
 



// function initAddEventListenerPopup() {

//     let btnShare = document.querySelector(".shareZone button");
    
//     let popupBackground = document.querySelector(".popupBackground");

//     btnShare.addEventListener("click", () => {
     
//         showPopup();
//     })


    // popupBackground.addEventListener("click", (event) => {
    //     if (event.target === popupBackground) {

    //         hidePopup();
    //     }
    // })
// }


let btnShare = document.querySelector(".shareZone button");
    
let popupBackground = document.querySelector(".popupBackground");

btnShare.addEventListener("click", () => {
 
    showPopup();
})

popupBackground.addEventListener("click", (event) => {
    if (event.target === popupBackground) {

        hidePopup();
    }
})