module.exports = (Listener, cookie) => {
    const state = {
        fps: '0-0',
        fpsDisplay: '?',
        debug: false,
        images: {},
        fireColor: 20,
        decay: 15,
        firePixelSize: 15,
        firePixelsArray: [],
        fireWidth: 0,
        fireHeight: 0
    }
    
    const createFireDataStructure = (...props) => require(`./FireFunctions/createFireDataStructure`)(state)
    const createFireSource = (...props) => require(`./FireFunctions/createFireSource`)(state)
    const createFirePropagation = (...props) => require(`./FireFunctions/calculateFirePropagation`)(state)
    const clearFire = (...props) => require(`./FireFunctions/clearFire`)(state)

    state.createFireSource = createFireSource
    state.createFireDataStructure = createFireDataStructure
    state.clearFire = clearFire
    
    const start = async () => {
        state.fireWidth = Math.floor(window.innerWidth/state.firePixelSize)*1.1
        state.fireHeight = Math.floor(window.innerHeight/state.firePixelSize)+1

        setInterval(() => {
            createFirePropagation()
        }, 50)

        createFireDataStructure()
        createFireSource()
    }

    return {
        state,
        start
    }
}