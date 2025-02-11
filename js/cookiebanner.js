const cookieBox = document.querySelector('.cookie-wrapper'),
    buttons = document.querySelectorAll('.cookie-button');

cookieBox.classList.add('show');

if (localStorage.getItem('hideCookies', true)) {
    cookieBox.classList.add('hidden');
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        cookieBox.classList.remove('show');
        cookieBox.classList.add('hidden');
        localStorage.setItem('hideCookies', true);

        //if button has acceptBtn id
        if (button.id == 'acceptBtn') {
            //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
            document.cookie =
                'cookieBy= codinglab; max-age=' + 60 * 60 * 24 * 30;
        }
    });
});
