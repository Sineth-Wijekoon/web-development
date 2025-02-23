const stickySections = [...document.querySelectorAll('.sticky')]
let images = [
    'images/slideImage1.jpg',
    'images/slideImage2.jpg',
    'images/slideImage3.jpg',
]

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll_section').appendChild(image)
    })
})

window.addEventListener('scroll',(e) => {
    for(let i = 0; i <stickySections.length; i++) {
        transform(stickySections[i])
    }
    
})

function transform(section){
    const quote = document.getElementById("quote")
    const offsetTop = quote.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section')
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}

let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
    const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

