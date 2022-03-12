module.exports = (state, setPixelFireIntensity) => {
    /*for (let column = 0; column < state.fireWidth+1; column++) {
        for (let row = 0; row < state.fireHeight; row++) {
            let pixelIndex = column + (state.fireWidth * (row))

            setPixelFireIntensity(pixelIndex, 0)
        }
    }*/
    for (let column = 0; column <= state.fireWidth; column++) {
        let overflowPixelIndex = state.fireWidth * state.fireHeight
        let pixelIndex = (overflowPixelIndex - state.fireWidth) + column

        setPixelFireIntensity(pixelIndex, 0)
    }
}