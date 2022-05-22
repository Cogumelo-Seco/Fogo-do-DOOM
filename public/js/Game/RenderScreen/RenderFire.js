module.exports = async (ctx, Fire, Listener, cookie) => {
    let firePixelSize = Fire.state.firePixelSize
    let X = 0
    let Y = 0
    
    for (let row = 0;row < Fire.state.fireHeight;row++) {
        for (let column = 0;column < Fire.state.fireWidth;column++){
            let fireValue = Fire.state.firePixelsArray[row][column]

            if (Fire.state.debug && X*Y < window.innerHeight*window.innerWidth) {
                ctx.fillStyle = `hsl(0, 0%, ${fireValue}%)`;
                ctx.fillRect(X+1, Y+1, firePixelSize-2, firePixelSize-2)
    
                ctx.fillStyle = `hsl(0, 0%, ${100-fireValue}%)`;
                ctx.font = `bold ${firePixelSize/2}px Arial`
                ctx.fillText(fireValue, X+(firePixelSize/2)-(ctx.measureText(fireValue).width/2), Y+(firePixelSize/2)+12);
    
                ctx.font = `bold ${firePixelSize/5}px Arial`
                ctx.fillText(Number.parseInt((X/firePixelSize) + (Fire.state.fireWidth * (Y/firePixelSize))), X+1, Y+(firePixelSize/5));
            } else if (fireValue > 0 && X*Y < window.innerHeight*window.innerWidth) {
                ctx.fillStyle = `hsl(${Fire.state.fireColor}, 100%, ${fireValue}%)`;
                ctx.fillRect(X, Y, firePixelSize, firePixelSize)
            }

            X += firePixelSize
        }
        X = 0
        Y += firePixelSize
    }
}