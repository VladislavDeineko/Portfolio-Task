var popup = document.querySelector(".popup");
var btn = document.querySelector(".lets-talk");
var closeButton = document.querySelector(".close-window");
                     
function togglePopup() {
popup.classList.toggle("show-popup");
                        }
                      
function windowOnClick(event) {
    if (event.target === popup) {
            togglePopup();
        }
}
                      
btn.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);
window.addEventListener("click", windowOnClick);