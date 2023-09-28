document.getElementById('footer-menu').addEventListener('click', (event) => {
        if(event.target.getAttribute("alt") !== "arrow") return
       displayFooterMenu(event);
       reverseFooterArrow(event);
})

function displayFooterMenu(event) {
    document.getElementById(event.target.getAttribute("data-set")).classList.toggle('active');
}


function reverseFooterArrow(event) {
    event.target.classList.toggle('down');
}
