const buyTickets = document.querySelectorAll('.place-buy-btn');
const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('#header');
if (menuIcon){
    menuIcon.addEventListener('click', () => {
        if (header.classList.contains('open')){
            header.classList.remove('open');        
        } else {
            header.classList.add('open');
        }
    })
}

modalClose.addEventListener('click', close);

for (let ticket of buyTickets){
    ticket.addEventListener('click', ()=> {
        modal.style.display = 'flex';
    });
}

function close(){
    modal.style.display = 'none';
}