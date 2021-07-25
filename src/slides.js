const slideArea = document.querySelector('.slides')
const images = slideArea.querySelectorAll('img')

let currentSlide = 0
let z = 1

slideArea.addEventListener('click', function () {

    currentSlide = currentSlide + 1

    if (currentSlide > images.length - 1) {
        currentSlide = 1
    }

    z = z + 1

    images.forEach(images => {
        
    })

    images[currentSlide].style.zIndex = z
    images[currentSlide].style.animation = "fade 0.5s"

})