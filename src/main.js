const toggleTag = document.querySelector('.toggle-nav')
const maintag = document.querySelector('main')


toggleTag.addEventListener('click', function () {
    maintag.classList.toggle('open')

    if (maintag.classList.contains('open')) {
        toggleTag.innerHTML = "<img src='assets/close.svg'> Close"
    } else {
        toggleTag.innerHTML = "<img src='assets/menu.svg'> Menu"
    }
})


