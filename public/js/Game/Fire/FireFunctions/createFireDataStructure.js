module.exports = (state) => {
    for (let row = 0;row < state.fireHeight;row++) {
        for (let column = 0;column < state.fireWidth;column++) {
            if (!state.firePixelsArray[row]) state.firePixelsArray.push([])
            state.firePixelsArray[row].push(0)
        }
    }
}