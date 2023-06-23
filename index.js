const buttons = document.querySelectorAll('#button-home, #button-menu, #button-contact');
const homeBtn = document.querySelector('#button-home');
const menuBtn = document.querySelector('#button-menu');
const contactBtn = document.querySelector('#button-contact');
const wholeContainer = document.querySelector('.whole-container');
const wholeContainer2 = document.querySelector('.whole-container2');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });
        
        button.classList.add('active');
    });
});
homeBtn.addEventListener('click', () => {
    wholeContainer.style.display = 'flex';
    wholeContainer2.style.display = 'none';
});

menuBtn.addEventListener('click', () => {
    wholeContainer.style.display = 'none';
    wholeContainer2.style.display = 'flex';
})


  