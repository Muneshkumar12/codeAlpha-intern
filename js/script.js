let galleryImages = document.querySelectorAll('.gallery-image');
let sliderImage = document.getElementById('slider-image');
let Slider = document.getElementById('slider');
let nextBtn = document.getElementById('next-btn');
let previousBtn = document.getElementById('previous-btn');
let closeBtn = document.getElementById('close-btn')
let images = [
    "./images/image-one.jpg",
    "./images/image-two.jpg",
    "./images/image-three.jpg",
    "./images/image-four.jpg",
    "./images/image-five.jpg",
    "./images/image-six.jpg",
    "./images/image-seven.png",
    "./images/image-eight.jpg"
]
let currentIndex = 0;
galleryImages.forEach((item, index) => {
    item.addEventListener('click', () => showSlider(index))
})

function showSlider(index) {
    galleryImages[currentIndex].classList.remove('current-image')
    currentIndex = index;
    sliderImage.src = images[currentIndex]
    Slider.style.display = "flex"
    galleryImages[currentIndex].classList.add('current-image')
}
nextBtn.addEventListener('click',()=>{
    galleryImages[currentIndex].classList.remove('current-image')
    currentIndex =  (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex]
    galleryImages[currentIndex].classList.add('current-image')
})
previousBtn.addEventListener('click',()=>{
    galleryImages[currentIndex].classList.remove('current-image')
    currentIndex = (currentIndex - 1) % images.length;
    sliderImage.src = images[currentIndex]
    galleryImages[currentIndex].classList.add('current-image')
})
closeBtn.addEventListener('click',()=>{
    Slider.style.display = "none"
galleryImages[currentIndex].classList.remove('current-image')

})