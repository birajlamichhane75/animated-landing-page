let image = document.querySelectorAll(".img-box img");
let count = 0;

let slideimage = () => {
    image.forEach((e) => {
        gsap.to(e, {
            y: `-${count * 100}%`,
        })
    })
}

let goup = () => {
    count--;
    if (count < 0) {
        count = image.length - 1;
    }

    slideimage();
}

let godown = () => {
    count++;
    if (count > image.length - 1) {
        count = 0;
    }
    // console.log(count)
    slideimage();
}

let slider = () => {
    setInterval(() => {
        godown();
    }, 4000)
}

slider();





let tl = gsap.timeline();

tl.from("#page1", {
    width: 0,
    duration: 1,

})

tl.from(".right", {
    width: 0,
    duration: .5,

})
tl.from(".right img", {
    right: "0%",
    width: 0,
    duration: .5,

})
tl.from(".text h1,.text p", {
    y: "100%",
    stagger: .3
})
tl.from(".logo h1", {
    scale: .5,
    opacity: 0

})

tl.from(".menu-list a", {
    x: "-30%",
    stagger: .2,
    opacity: 0
})

tl.from(".icon i", {
    opacity: 0,

})
tl.from(".bottom .card", {
    y: "70%",
    opacity: 0,
    duration: 1
})
tl.from(".bottom .cover", {
    width: 0,
    duration: 1
})

tl.from(".media i", {
    y: "100%",
    opacity: 0,
    stagger: .1
})



