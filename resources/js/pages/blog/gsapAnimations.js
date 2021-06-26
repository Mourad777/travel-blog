import { gsap } from "gsap/all";

const animations = [{
    target: '#myline',
    trigger: '#main',
    start: 'top top',
    end: 'center bottom',
    strokeDashoffset: 0,
    properties: {
        strokeDashoffset: 0,
    }
},
{
    target: '#hero-pic-main',
    trigger: '#main',
    start: 'top top',
    end: '30% bottom',
    strokeDashoffset: 0,
    properties: {
        duration: 3,
        xPercent: 55,
        opacity: -1,
    }
},
{
    target: '.HeroPicPieceTwo',
    trigger: '#main',
    start: 'top top',
    end: "center bottom",
    strokeDashoffset: 0,
    properties: {
        yPercent: -100,
        opacity: -100,
    }
},
{
    target: '.HeroPicPieceOne',
    trigger: '#main',
    start: 'top top',
    end: "center bottom",
    strokeDashoffset: 0,
    properties: {
        yPercent: 100,
        opacity: -100,
    }
},
{
    target: '#heroTextMainPath',
    trigger: '#container',
    start: 'top top',
    end: "center bottom",
    strokeDashoffset: 0,
    properties: {
        opacity: -10,
        fill: 'rgba(0, 146, 228,0)',
    }
},
{
    target: '#heroTextSecondary',
    trigger: '#main',
    start: 'top top',
    end: "center bottom",
    strokeDashoffset: 0,
    properties: {
        opacity: -10,
        fill: 'rgba(0, 146, 228,0)',
    }
},
]

export const animate = () => {

    animations.forEach(ani => {
        gsap.to(ani.target, {
            ...ani.properties,
            ease: "ease-in",
            scrollTrigger: {
                trigger: ani.trigger,
                start: ani.start,
                end: ani.end,
                scrub: true,
                delay:1,
            }
        });
    })
}