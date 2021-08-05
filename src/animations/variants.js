export const pathVariants = {
        open:{
            opacity:1,
            pathLength: 1,
            transition:{
                duration:2
                ,default: { duration: 2, ease: "easeInOut" },
                //fill: { duration: 2, ease: [1, 0, 0.8, 1] }
              }
        },
        closed:{
            opacity:0,
            pathLength:0,
        }
}

export const svgVariants = {
    hovered: {
        rotate: [-10, 10, -4, 4, 0]
    },
    unhover: {
        rotate: 0
    },
    open:{
        rotate:0,
        transition:{
            duration:1,
        }
    },
    closed:{
       rotate:-20,
    }
}