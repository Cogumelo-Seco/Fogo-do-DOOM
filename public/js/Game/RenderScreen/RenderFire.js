module.exports = (ctx, Fire, Listener, cookie) => {
    let firePixelSize = Fire.state.firePixelSize
    let black = false

    for (let row = 0; row < Fire.state.fireHeight*firePixelSize; row += firePixelSize) {
        for (let column = 0; column < Fire.state.fireWidth*firePixelSize; column += firePixelSize) {
            let pixelIndex = (column/firePixelSize) + (Fire.state.fireWidth * (row/firePixelSize))
            let X = Math.floor((window.innerWidth-Fire.state.fireWidth*firePixelSize)/2)+column
            let Y = Math.floor((window.innerHeight-Fire.state.fireHeight*firePixelSize)/2)+row

            black = black ? false : true

            if (Fire.state.debug) {
                ctx.fillStyle = black ? 'black' : 'white'
                ctx.fillRect(X, Y, firePixelSize, firePixelSize)
                
                ctx.fillStyle = black ? 'white' : 'black'
                ctx.font = `bold ${firePixelSize/2.5}px Arial`
                ctx.fillText(Fire.state.firePixelsArray[pixelIndex], X+(firePixelSize/2)-(ctx.measureText(Fire.state.firePixelsArray[pixelIndex]).width/2), Y+(firePixelSize/2)+8);

                ctx.font = `bold ${firePixelSize/5}px Arial`
                ctx.fillText(pixelIndex, X+1, Y+(firePixelSize/5));
            } else {
                const colorH = Math.round(Fire.state.firePixelsArray[pixelIndex] * 40 / 100);
                const colorS = 100;
                const colorL = Fire.state.firePixelsArray[pixelIndex];
                const color = `hsl(${colorH}, ${colorS}%, ${colorL}%)`;

                ctx.fillStyle = color;
                ctx.fillRect(X, Y, firePixelSize, firePixelSize)
            }
        }
    }
}