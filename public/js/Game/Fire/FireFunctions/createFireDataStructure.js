module.exports = (state) => {
    const numberOfPixels = state.fireWidth * state.fireHeight

    for (let i = 0; i < numberOfPixels; i++) {
        state.firePixelsArray[i] = 0
    }
}