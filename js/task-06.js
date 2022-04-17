const input = document.querySelector('#validation-input');
input.addEventListener('blur', () => {
    function changeClass(add, remove) {
        input.classList.add(add);
        input.classList.remove(remove);
    }
    if (input.value.length === Number(input.dataset.length)) {
        changeClass('valid', 'invalid');
    } else {
        changeClass('invalid', 'valid');
    }
});
