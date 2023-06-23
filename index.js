const buttons = document.querySelectorAll('#button-home, #button-menu, #button-contact');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });
        
        button.classList.add('active');
    });
});


  