//Task => to check maximum screen window size, use screen.availwidth,window.innerwidth
window.addEventListener('resize', e => {
    // console.log(window.innerWidth)
    console.log(e.target, window.innerWidth)
})

//Task => To check browser window size, use window.outerwidth, window.innerwidth
        //use this formula => screenPixelRatio = (window.outerwidth-8)/window.innerwidth
        //formula => defaultZoomRatio = screenPixelRatio > 0.92 and screenPixelRatio <= 1.10
        // var screenPixelRatio = (window.outerwidth-8)/window.innerwidth;
        // var browserWidth = screenPixelRatio > 0.92 && screenPixelRatio <= 1.10
        
const isAtMaxWidth = screen.availWidth - window.innerWidth === 0
const screenPixelRatio = (window.outerWidth - 8) / window.innerWidth
const isAtDefaultZoom = screenPixelRatio > 0.92 && screenPixelRatio <= 1.10
const isMaximizedAndDefaultZoom = isAtMaxWidth && isAtDefaultZoom
const isFullscreen = window.outerWidth == screen.width && window.outerHeight == screen.height
isFullScreen=window.matchMedia('(display-mode: fullscreen)').matches;
isOnHomepage=isFullScreen=window.matchMedia('(display-mode: standalone)').matches;

//For responsive font size 
// For mobile devices: 320px to 480px 
// For tablets and ipads: 481px to 768px
// For laptops: 769px to 1024px 
// For desktops: 1025px to 1200px

//To calculate font size for various devices
// Fluid font sizes per breakpoint
// Screen width	Font size
// 320px (eg: iPhone 4 & 5)	16px
// 768px (eg: iPad portrait)	18px
// 1024px (eg: iPad landscape)	19px
// 1280px	20px
// 1536px	21px
// 1920px	23px
// 2560px	25px

// html {
//     font-size: calc(15px + 0.390625vw);
// }