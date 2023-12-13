let tl = gsap.timeline();

tl.from(".logo h1",{
    delay:1,
    y:"100%",
},'a')

tl.from(".menu i",{
    opacity:0,
},'c')

tl.from(".images .image",{
    y:"20%",
    opacity:0,
    ease :Expo.easeInOut,
    duration:1
},'c')

tl.from(".overtext h1",{
    x:"-50%",
    opacity:0,
    ease :Expo.easeInOut,
    duration:1
})


tl.from(".title h3",{
    y:"-50%",
    opacity:0,
    ease :Expo.easeInOut,
    duration:1,
    stagger:.3
})

tl.from(".slide i",{
    scale:0,
    ease :Expo.easeInOut,

},'b')

tl.from(".media i",{
    y:"50%",
    opacity:0,
    ease :Expo.easeInOut,
    duration:1,
    stagger:.07
},'b')


