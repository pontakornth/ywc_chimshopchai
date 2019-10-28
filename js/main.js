document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.NavBar__burger');
    burger.addEventListener('click',() => {
        burger.classList.toggle('is-active');
        document.querySelector('.NavBar__group').classList.toggle('is-active');
    })
})