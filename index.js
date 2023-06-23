const buttons = document.querySelectorAll('#button-home, #button-menu, #button-contact');
const homeBtn = document.querySelector('#button-home');
const menuBtn = document.querySelector('#button-menu');
const contactBtn = document.querySelector('#button-contact');
// const wholeContainer = document.querySelector('.whole-container');
// const wholeContainer2 = document.querySelector('.whole-container2');
const welcomeContainer = document.querySelector('.welcome-container');
const coffeeContainer = document.querySelector('.coffee-container');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });
        
        button.classList.add('active');
    });
});
homeBtn.addEventListener('click', () => {
    welcomeContainer.style.display = 'flex';
    coffeeContainer.style.display = 'none';
});

menuBtn.addEventListener('click', () => {
    welcomeContainer.style.display = 'none';
    coffeeContainer.style.display = 'flex';
})


  