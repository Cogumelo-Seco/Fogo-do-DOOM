module.exports = (Listener, cookie) => {
    const state = {
        fps: '0-0',
        fpsDisplay: '?',
        debug: false,
        fireColor: 40,
        decay: 10,
        firePixelSize: 10,
        firePixelsArray: [],
        fireWidth: 0,
        fireHeight: 0
    }
    
    const setPixelFireIntensity = (...props) => require(`./FireFunctions/setPixelFireIntensity`)(state, props)
    const createFireDataStructure = (...props) => require(`./FireFunctions/createFireDataStructure`)(state)
    const createFireSource = (...props) => require(`./FireFunctions/createFireSource`)(state)
    const createFirePropagation = (...props) => require(`./FireFunctions/calculateFirePropagation`)(state, setPixelFireIntensity)
    const clearFire = (...props) => require(`./FireFunctions/clearFire`)(state, setPixelFireIntensity)

    state.setPixelFireIntensity = setPixelFireIntensity
    state.createFireSource = createFireSource
    state.clearFire = clearFire
    
    const start = async () => {
        state.fireWidth = Math.floor(window.innerWidth/state.firePixelSize)+1
        state.fireHeight = Math.floor(window.innerHeight/state.firePixelSize)+1

        setInterval(() => {
            createFirePropagation()
        }, 10)

        createFireDataStructure()
        createFireSource()
    }

    return {
        state,
        start
    }
}