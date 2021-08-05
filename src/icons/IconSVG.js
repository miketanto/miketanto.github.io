import React from 'react'
import {motion} from 'framer-motion'
import classes from './IconStyles.module.css'
import{pathVariants,svgVariants} from '../animations/variants'


export function InfoSVG({isHover}) {
    return (
        <div>
            <motion.svg animate = {isHover?"hovered":"unhover"} className = {classes.homeItem} variants={svgVariants} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path  variants= {pathVariants} d="M12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5L11.25 11.5C11.25 11.0858 11.5858 10.75 12 10.75Z" fill="black"/>
            <motion.path variants= {pathVariants} d="M12 9.00001C12.5523 9.00001 13 8.55229 13 8.00001C13 7.44772 12.5523 7.00001 12 7.00001C11.4477 7.00001 11 7.44772 11 8.00001C11 8.55229 11.4477 9.00001 12 9.00001Z" fill="black"/>
            <motion.path variants= {pathVariants} fill-rule="evenodd" clip-rule="evenodd" d="M7.31673 3.76876C10.4043 3.42368 13.5957 3.42368 16.6832 3.76876C18.5096 3.97288 19.9845 5.41153 20.1994 7.24849C20.5686 10.4054 20.5686 13.5946 20.1994 16.7515C19.9845 18.5885 18.5096 20.0271 16.6832 20.2313C13.5957 20.5763 10.4043 20.5763 7.31673 20.2313C5.49035 20.0271 4.01545 18.5885 3.8006 16.7515C3.43137 13.5946 3.43137 10.4054 3.8006 7.24849C4.01545 5.41153 5.49035 3.97288 7.31673 3.76876ZM16.5166 5.25948C13.5398 4.92677 10.4602 4.92677 7.48334 5.25948C6.33891 5.38738 5.42286 6.29063 5.29045 7.42274C4.93476 10.4639 4.93476 13.5361 5.29045 16.5773C5.42286 17.7094 6.33891 18.6126 7.48334 18.7405C10.4602 19.0732 13.5398 19.0732 16.5166 18.7405C17.6611 18.6126 18.5771 17.7094 18.7095 16.5773C19.0652 13.5361 19.0652 10.4639 18.7095 7.42274C18.5771 6.29063 17.6611 5.38738 16.5166 5.25948Z" fill="black"/>
            </motion.svg>
        </div>
    )
}


export function HomeSVG({isHover}) {
    return (
        <div>
            <motion.svg animate = {isHover?"hovered":"unhover"} className = {classes.homeItem} variants={svgVariants} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path  variants= {pathVariants} fill-rule="evenodd" clip-rule="evenodd" d="M13.5578 5.53423C12.6873 4.69887 11.3127 4.69887 10.4422 5.53423L5.81574 9.97357C5.70239 10.0823 5.62614 10.224 5.5978 10.3785C5.04367 13.4004 5.00277 16.494 5.47681 19.5295L5.58933 20.25H8.56579V14.0387C8.56579 13.6244 8.90158 13.2887 9.31579 13.2887H14.6842C15.0984 13.2887 15.4342 13.6244 15.4342 14.0387V20.25H18.4107L18.5232 19.5295C18.9972 16.494 18.9563 13.4004 18.4022 10.3785C18.3739 10.224 18.2976 10.0823 18.1843 9.97357L13.5578 5.53423ZM9.40363 4.45191C10.8546 3.05965 13.1454 3.05965 14.5964 4.45191L19.2228 8.89125C19.5634 9.21804 19.7925 9.64373 19.8776 10.108C20.4621 13.2956 20.5053 16.559 20.0052 19.7609L19.8245 20.9184C19.7497 21.3971 19.3374 21.75 18.8529 21.75H14.6842C14.27 21.75 13.9342 21.4142 13.9342 21V14.7887H10.0658V21C10.0658 21.4142 9.73 21.75 9.31579 21.75H5.14706C4.66258 21.75 4.25029 21.3971 4.17554 20.9184L3.99478 19.7609C3.49473 16.559 3.53788 13.2956 4.12241 10.108C4.20754 9.64373 4.43662 9.21804 4.77719 8.89125L9.40363 4.45191Z" fill="black"/>
            </motion.svg>
        </div>
    )
}

export function StackSVG({isHover}) {
    return (
        <div>
            <motion.svg animate = {isHover?"hovered":"unhover"} className = {classes.homeItem} variants={svgVariants} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path variants = {pathVariants} fill-rule="evenodd" clip-rule="evenodd" d="M13.1546 3.36032C12.4835 3.01005 11.5741 3.00465 10.8977 3.35402C8.30469 4.69316 5.95282 6.22859 3.89185 7.9316C3.57314 8.19495 3.34696 8.57764 3.35082 9.02808C3.35466 9.47668 3.58544 9.85425 3.90222 10.1133C5.94607 11.7844 8.29988 13.3213 10.8454 14.6498C11.5165 15.0001 12.4259 15.0055 13.1024 14.6561C15.6953 13.317 18.0472 11.7815 20.1082 10.0785C20.4269 9.81517 20.6531 9.43248 20.6492 8.98203C20.6453 8.53344 20.4146 8.15586 20.0978 7.89685C18.0539 6.22568 15.7001 4.68886 13.1546 3.36032ZM11.586 4.68677C11.8256 4.563 12.2193 4.56417 12.4606 4.6901C14.8899 5.95802 17.1283 7.41672 19.0676 8.99229C17.1168 10.5932 14.885 12.0472 12.4141 13.3233C12.1744 13.4471 11.7807 13.4459 11.5394 13.32C9.11007 12.0521 6.87166 10.5934 4.93243 9.01783C6.88324 7.4169 9.11499 5.96291 11.586 4.68677Z" fill="black"/>
            <motion.path variants = {pathVariants}d="M21.197 12.6981C21.4164 13.0494 21.3094 13.5121 20.958 13.7315L14.8508 17.5444C14.0221 18.0618 12.9939 18.301 11.9999 18.301C11.006 18.3011 9.97773 18.062 9.14887 17.5447L3.10854 13.775C2.75714 13.5557 2.65006 13.093 2.86937 12.7416C3.08867 12.3902 3.55132 12.2831 3.90271 12.5024L9.94304 16.2722C10.4872 16.6118 11.2264 16.8011 11.9998 16.801C12.7733 16.801 13.5124 16.6116 14.0564 16.272L20.1637 12.4591C20.515 12.2397 20.9777 12.3467 21.197 12.6981Z" fill="black"/>
            <motion.path variants = {pathVariants}d="M21.197 16.4527C21.4164 16.8041 21.3094 17.2667 20.9581 17.4861L15.6692 20.789C14.6116 21.4495 13.2886 21.7602 11.9999 21.7603C10.7112 21.7604 9.38811 21.4498 8.33033 20.7895L3.10846 17.5296C2.75709 17.3103 2.65007 16.8476 2.86942 16.4963C3.08876 16.1449 3.55142 16.0379 3.90279 16.2572L9.12465 19.517C9.89767 19.9996 10.9316 20.2604 11.9998 20.2603C13.068 20.2602 14.1018 19.9994 14.8747 19.5167L20.1636 16.2139C20.5149 15.9945 20.9776 16.1014 21.197 16.4527Z" fill="black"/>

            </motion.svg>
        </div>
    )
}
export function MailSVG({isHover}) {
    return (
        <div>
            <motion.svg animate = {isHover?"hovered":"unhover"} className = {classes.homeItem} variants={svgVariants} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path variants = {pathVariants} fill-rule="evenodd" clip-rule="evenodd" d="M2.80369 8.3533C2.52355 10.9562 2.53604 13.9582 2.92586 16.5505C3.14156 17.9849 4.31223 19.0845 5.7573 19.2102L7.26753 19.3414C10.4166 19.6152 13.5834 19.6152 16.7325 19.3414L18.2427 19.2102C19.6878 19.0845 20.8585 17.9849 21.0742 16.5505C21.464 13.9582 21.4765 10.9564 21.1963 8.35345C21.1601 8.05169 21.1194 7.75034 21.0742 7.44949C20.8585 6.0151 19.6878 4.91545 18.2427 4.78983L16.7325 4.65855C13.5834 4.38481 10.4166 4.38481 7.26753 4.65855L5.7573 4.78983C4.31223 4.91545 3.14156 6.0151 2.92586 7.44949C2.88063 7.75028 2.83991 8.05159 2.80369 8.3533ZM7.39743 6.15292C10.46 5.88669 13.54 5.88669 16.6026 6.15292L18.1128 6.2842C18.8671 6.34977 19.4782 6.92379 19.5908 7.67254C19.6025 7.7503 19.6139 7.82809 19.625 7.90592L14.064 10.9954C12.7804 11.7085 11.2196 11.7085 9.93599 10.9954L4.37505 7.90596C4.38611 7.82812 4.39749 7.75031 4.40918 7.67254C4.52178 6.92379 5.13287 6.34977 5.8872 6.2842L7.39743 6.15292ZM19.8085 9.51989C20.0025 11.7876 19.9299 14.0725 19.5908 16.3274C19.4782 17.0762 18.8671 17.6502 18.1128 17.7158L16.6026 17.8471C13.54 18.1133 10.46 18.1133 7.39743 17.8471L5.8872 17.7158C5.13287 17.6502 4.52178 17.0762 4.40918 16.3274C4.07009 14.0725 3.99753 11.7877 4.1915 9.51992L9.20752 12.3066C10.9442 13.2714 13.0558 13.2714 14.7924 12.3066L19.8085 9.51989Z" fill="black"/>
            </motion.svg>
        </div>
    )
}
