module.exports = (state) => {
    for (let column = 0; column < state.fireWidth; column++) {
        for (let row = 0; row < state.fireHeight; row++) {
            let pixelIndex = column+ + (state.fireWidth * (row-1))

            let belowPixelIndex = pixelIndex + state.fireWidth

            if (belowPixelIndex <= state.fireWidth*state.fireHeight) {
                let belowPixelFireIntensity = state.firePixelsArray[belowPixelIndex+Math.floor(Math.random()*2)]
                let newFireIntensity = belowPixelFireIntensity - Math.floor(Math.random()*state.decay)

                if (newFireIntensity >= 0) state.firePixelsArray[pixelIndex] = newFireIntensity
            }
        }
    }
}