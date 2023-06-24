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