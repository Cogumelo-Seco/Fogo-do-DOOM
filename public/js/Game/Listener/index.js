module.exports = (cookie) => {
    const state = {
        mousePosition: {
            x: NaN,
            y: NaN,
        },
        keys: {},
        mouseDown: false,
        Fire: null
    }

    document.onmousedown = () => state.mouseDown = true
    document.onmouseup = () => state.mouseDown = false

    document.onmousemove = (event) => {
        state.mousePosition.x = event.pageX/window.innerWidth
        state.mousePosition.y = event.pageY/window.window.innerHeight

        if (!state.Fire || !state.mouseDown) return

        let y = Number.parseInt(state.Fire.state.fireHeight*state.mousePosition.y)
        let x = Number.parseInt((state.Fire.state.fireWidth-state.Fire.state.fireWidth*0.1)*state.mousePosition.x)
       

        try {
            state.Fire.state.firePixelsArray[y][x] = 100
            state.Fire.state.firePixelsArray[y-1][x] = 100
            state.Fire.state.firePixelsArray[y+1][x] = 100
            state.Fire.state.firePixelsArray[y][x-1] = 100
            state.Fire.state.firePixelsArray[y][x+1] = 100
        } catch {}
        
        /*let pixelIndexX = Math.floor((Math.floor(event.x)/state.Fire.state.firePixelSize)/state.Fire.state.fireWidth*state.Fire.state.fireWidth)
        let pixelIndexY = Math.floor((Math.floor(event.y)/state.Fire.state.firePixelSize)/state.Fire.state.fireHeight*state.Fire.state.fireHeight)
        let pixelIndex = pixelIndexX + (state.Fire.state.fireWidth * (pixelIndexY))

        state.Fire.state.setPixelFireIntensity(pixelIndex, 100)
        state.Fire.state.setPixelFireIntensity(pixelIndex+1, 100)
        state.Fire.state.setPixelFireIntensity(pixelIndex-1, 100)*/
    }

    document.addEventListener('keydown', (event) => {
        state.keys[event.code] = true
        handleKeys(event)
    })
    document.addEventListener('keyup', (event) => {
        state.keys[event.code] = false
    })

    function handleKeys(event) {
        if (!state.Fire) return;
        let key = event.code
        
        if (key == 'KeyZ' && state.Fire.state.decay > 3) state.Fire.state.decay -= 1
        if (key == 'KeyX' && state.Fire.state.decay < 100) state.Fire.state.decay += 1
        if (key == 'KeyC') state.Fire.state.fireColor = state.Fire.state.fireColor >= 360 ? 0 : state.Fire.state.fireColor+1

        if (key == 'KeyQ') state.Fire.state.clearFire()
        if (key == 'KeyA') state.Fire.state.createFireSource()
        if (key == 'KeyS') state.Fire.state.debug = state.Fire.state.debug ? false : true
        if (key == 'KeyE' && state.Fire.state.firePixelSize > 10) {
            state.Fire.state.firePixelSize -= 1
            state.Fire.state.decay = state.Fire.state.firePixelSize
            state.Fire.state.fireWidth = Math.floor(window.innerWidth/state.Fire.state.firePixelSize)*1.1
            state.Fire.state.fireHeight = Math.floor(window.innerHeight/state.Fire.state.firePixelSize)+1
            state.Fire.state.firePixelsArray = []
            state.Fire.state.createFireDataStructure()
            state.Fire.state.createFireSource()
        }
        if (key == 'KeyR' && state.Fire.state.firePixelSize < 50) {
            state.Fire.state.firePixelSize += 1
            state.Fire.state.decay = state.Fire.state.firePixelSize
            state.Fire.state.fireWidth = Math.floor(window.innerWidth/state.Fire.state.firePixelSize)*1.1
            state.Fire.state.fireHeight = Math.floor(window.innerHeight/state.Fire.state.firePixelSize)+1
            state.Fire.state.firePixelsArray = []
            state.Fire.state.createFireDataStructure()
            state.Fire.state.createFireSource()
        }
    }

    return {
        state
    }
}