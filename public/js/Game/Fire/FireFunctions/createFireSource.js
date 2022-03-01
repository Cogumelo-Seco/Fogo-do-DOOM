module.exports = (state) => {
    for (let column = 0; column <= state.fireWidth; column++) {
        let overflowPixelIndex = state.fireWidth * state.fireHeight
        let pixelIndex = (overflowPixelIndex - state.fireWidth) + column

        state.firePixelsArray[pixelIndex] = 100
    }
}