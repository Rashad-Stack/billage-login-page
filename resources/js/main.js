const pass = document.getElementById('password');
console.log(pass)
const elem = document.querySelector(('.password'), '::after');
elem.addEventListener('click', function (e) {
    if (pass.type == 'password') {
        pass.setAttribute('type', 'text');
        elem.classList.remove('icon-hide');
        elem.classList.add('icon-show');



    } else {
        pass.setAttribute('type', 'password');
        elem.classList.remove('icon-show');
        elem.classList.add('icon-hide');
    }
})