let menu = document.getElementById('menu');
let close = document.getElementById('close')
let tl = gsap.timeline();

tl.to('nav ', {
    right: 0,
    duration: 0.2
})

tl.from('li ', {
    x: 150,
    duration: 0.4,
    opacity: 0,
    stagger: 0.2,
    ease: 'bounce.out'
})

menu.addEventListener("click", () => {
    tl.play()

})

close.addEventListener('click', () => {
    tl.reverse()
})

tl.pause();