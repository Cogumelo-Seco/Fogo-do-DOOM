module.exports = (state, [ pixelIndex, intensity ]) => {
    pixelIndex = Math.floor(pixelIndex)

    state.firePixelsArray[pixelIndex] = intensity
}