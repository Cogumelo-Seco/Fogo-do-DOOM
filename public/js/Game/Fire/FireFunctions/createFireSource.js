module.exports = (state, setPixelFireIntensity) => {
    for (let column = 0; column <= state.fireWidth; column++) {
        let overflowPixelIndex = state.fireWidth * state.fireHeight
        let pixelIndex = (overflowPixelIndex - state.fireWidth) + column

        setPixelFireIntensity(pixelIndex, 100)
    }
}