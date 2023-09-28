// Listener on the burger button and active class state
document.getElementById('burger-btn').addEventListener('click', (event) => {
    document.querySelector(`.navigation__container .${event.target.getAttribute('data-set')}`).classList.toggle('active');
})