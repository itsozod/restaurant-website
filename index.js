const buttons = document.querySelectorAll('#button-home, #button-menu, #button-contact');
const homeBtn = document.querySelector('#button-home');
const menuBtn = document.querySelector('#button-menu');
const contactBtn = document.querySelector('#button-contact');
const welcomeContainer = document.querySelector('.welcome-container');
const coffeeContainer = document.querySelector('.coffee-container');
const locationContainer = document.querySelector('.location-container');


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
    locationContainer.style.display = 'none';
});

menuBtn.addEventListener('click', () => {
    coffeeContainer.style.display = 'flex';
    welcomeContainer.style.display = 'none';
    locationContainer.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
    locationContainer.style.display = 'flex';
    welcomeContainer.style.display = 'none';
    coffeeContainer.style.display = 'none';
});


  