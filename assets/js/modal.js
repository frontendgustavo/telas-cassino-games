// Get the modal
let modalLoginEl = document.getElementById("modalLogin");
let modalRegisterEl = document.getElementById("modalRegister");
// Get the button that opens the modal
let btnModalLoginElems = document.querySelectorAll("#btnModalLogin");
let btnModalRegisterElems = document.querySelectorAll("#btnModalRegister");
// Get the <span> element that closes the modal
let btnClose = document.querySelector(".close");
let btnCloseRegister = document.querySelector(".btn-close-modal-register");

for (let i = 0; i < btnModalLoginElems.length; i++) {
    btnModalLoginElems[i].addEventListener('click', function(){
        modalLoginEl.classList.remove('fade-out')
        modalLoginEl.style.display = "block"
    });
}
for (let i = 0; i < btnModalRegisterElems.length; i++) {
    btnModalRegisterElems[i].addEventListener('click', function(){
        modalRegisterEl.classList.remove('fade-out')
        modalRegisterEl.style.display = "block"
    });
}


btnClose.addEventListener('click', function(){
    modalLoginEl.classList.add('fade-out')
    setTimeout(function(){
        modalLoginEl.style.display = "none"
    }, 800)
});
btnCloseRegister.addEventListener('click', function(){
     modalRegisterEl.classList.add('fade-out')
    setTimeout(function(){
         modalRegisterEl.style.display = "none"
    }, 800)
});




// btn.onclick = function () {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal


// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }