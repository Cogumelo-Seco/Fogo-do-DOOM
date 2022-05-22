module.exports = (state, setPixelFireIntensity) => {
    for (let column = 0;column < state.fireWidth;column++) {
        state.firePixelsArray[state.firePixelsArray.length-1][column] = 0
    }
}