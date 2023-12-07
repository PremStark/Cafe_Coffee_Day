const img  = document.querySelector('.main-img img');
const toggleBtn = document.querySelector('.toggle');
const toggleText = document.querySelectorAll('.toggle-text');

let bool=true;

toggleBtn.addEventListener('click',() => {
    if(bool === true) {
        img.src="./cup-light.png";

        toggleText.forEach(text => {
            text.innerText = "Cafe Coffee ";
        });

        bool = false;
    } else {
        img.src = "./cup-dark.png";

        toggleText.forEach(text => {
            text.innerText = "Cafe Coffee ";
        });

        bool = true;
    }
    document.body.classList.toggle('light-theme');

    toggleBtn.firstElementChild.classList.toggle('fa-sun');
})