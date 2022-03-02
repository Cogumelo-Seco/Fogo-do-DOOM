module.exports = (cookie) => {
    const state = {
        keys: {},
        Fire: null
    }

    document.onmousemove = (event) => {
        if (!state.Fire || !state.keys['w']) return
        
        let pixelIndexX = Math.floor((Math.floor(event.x)/state.Fire.state.firePixelSize)/state.Fire.state.fireWidth*state.Fire.state.fireWidth)
        let pixelIndexY = Math.floor((Math.floor(event.y)/state.Fire.state.firePixelSize)/state.Fire.state.fireHeight*state.Fire.state.fireHeight)
        let pixelIndex = pixelIndexX + (state.Fire.state.fireWidth * (pixelIndexY))

        state.Fire.state.setPixelFireIntensity(pixelIndex, 100)
        state.Fire.state.setPixelFireIntensity(pixelIndex+1, 100)
        state.Fire.state.setPixelFireIntensity(pixelIndex-1, 100)
    }

    document.addEventListener('keydown', (event) => {
        state.keys[event.key] = true
        handleKeys(event)
    })
    document.addEventListener('keyup', (event) => {
        state.keys[event.key] = false
    })

    function handleKeys(event) {
        if (!state.Fire) return;
        let key = event.key
        
        if (key == 'z' && state.Fire.state.decay > 2) state.Fire.state.decay -= 1
        if (key == 'x' && state.Fire.state.decay < 100) state.Fire.state.decay += 1
        if (key == 'Z' && state.Fire.state.fireColor < 200) state.Fire.state.fireColor += 1
        if (key == 'X' && state.Fire.state.fireColor > -200) state.Fire.state.fireColor -= 1

        if (key == 'q') state.Fire.state.clearFire()
        if (key == 'a') state.Fire.state.createFireSource()
        if (key == 's') state.Fire.state.debug = state.Fire.state.debug ? false : true
    }

    return {
        state
    }
}