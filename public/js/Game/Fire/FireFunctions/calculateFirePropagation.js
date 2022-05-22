module.exports = (state, setPixelFireIntensity) => {
    for (let row = 0;row < state.fireHeight-1;row++) {
        for (let column = 0;column < state.fireWidth+20;column++) {
            let belowPixelFireIntensity = state.firePixelsArray[row+1][column+Math.floor(Math.random()*2)]//state.firePixelsArray[belowPixelIndex+Math.floor(Math.random()*2)]
            let newFireIntensity = belowPixelFireIntensity - Math.floor(Math.random()*state.decay)
            
            state.firePixelsArray[row][column] = newFireIntensity < 0 ? 0 : newFireIntensity || 0
        }
    }
}