// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const btnOpenModal = document.querySelector(".modal-btn");
const btnCloseModal = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

btnOpenModal.addEventListener("click", function(){
    if (!modal.classList.contains("open-modal")) {
        modal.classList.add("open-modal");
    }
})

btnCloseModal.addEventListener("click", function(){
    modal.classList.remove("open-modal");
})