module.exports = (ctx, Fire, Listener, cookie) => {
    let firePixelSize = Fire.state.firePixelSize
    let X = 0
    let Y = -firePixelSize

    for (let index in Fire.state.firePixelsArray) {
        let value = Fire.state.firePixelsArray[index]
        
        X = index%Fire.state.fireWidth*firePixelSize
        if (X == 0) Y += firePixelSize

        if (Fire.state.debug && X*Y < window.innerHeight*window.innerWidth) {
            ctx.fillStyle = `hsl(0, 0%, ${value}%)`;
            ctx.fillRect(X+1, Y+1, firePixelSize-2, firePixelSize-2)

            ctx.fillStyle = `hsl(0, 0%, ${100-value}%)`;
            ctx.font = `bold ${firePixelSize/2}px Arial`
            ctx.fillText(value, X+(firePixelSize/2)-(ctx.measureText(value).width/2), Y+(firePixelSize/2)+12);

            ctx.font = `bold ${firePixelSize/5}px Arial`
            ctx.fillText((X/firePixelSize) + (Fire.state.fireWidth * (Y/firePixelSize)), X+1, Y+(firePixelSize/5));
        } else if (value > 0 && X*Y < window.innerHeight*window.innerWidth) {
            ctx.fillStyle = `hsl(${Fire.state.fireColor}, 100%, ${value}%)`;
            ctx.fillRect(X, Y, firePixelSize, firePixelSize)
        }
    }

    /*for (let row = 0; row < Fire.state.fireHeight*firePixelSize; row += firePixelSize) {
        for (let column = 0; column < Fire.state.fireWidth*firePixelSize; column += firePixelSize) {
            let pixelIndex = (column/firePixelSize) + (Fire.state.fireWidth * (row/firePixelSize))

            let X = column
            let Y = row

            if (Fire.state.debug && X*Y < window.innerHeight*window.innerWidth) {
                ctx.fillStyle = `hsl(0, 0%, ${Fire.state.firePixelsArray[pixelIndex]}%)`;
                ctx.fillRect(X, Y, firePixelSize, firePixelSize)

                ctx.fillStyle = `hsl(0, 0%, ${100-Fire.state.firePixelsArray[pixelIndex]}%)`;
                ctx.font = `bold ${firePixelSize/2}px Arial`
                ctx.fillText(Fire.state.firePixelsArray[pixelIndex], X+(firePixelSize/2)-(ctx.measureText(Fire.state.firePixelsArray[pixelIndex]).width/2), Y+(firePixelSize/2)+12);

                ctx.font = `bold ${firePixelSize/5}px Arial`
                ctx.fillText(pixelIndex, X+1, Y+(firePixelSize/5));
            } else if (Fire.state.firePixelsArray[pixelIndex] > 0 && X*Y < window.innerHeight*window.innerWidth) {
                const colorH = Math.round(Fire.state.firePixelsArray[pixelIndex] * Fire.state.fireColor / 100);
                const colorS = 100;
                const colorL = Fire.state.firePixelsArray[pixelIndex];
                const color = `hsl(${colorH}, ${colorS}%, ${colorL}%)`;

                ctx.fillStyle = color;
                ctx.fillRect(X, Y, firePixelSize, firePixelSize)
            }
        }
    }*/
}