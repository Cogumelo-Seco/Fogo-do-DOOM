module.exports = (Listener, cookie) => {
    const state = {
        fps: '0-0',
        fpsDisplay: '?',
        debug: false,
        fireColor: 40,
        decay: 15,
        firePixelSize: 20,
        firePixelsArray: [],
        fireWidth: 0,
        fireHeight: 0
    }
    
    const createFireDataStructure = (...props) => require(`./FireFunctions/createFireDataStructure`)(state)
    const createFireSource = (...props) => require(`./FireFunctions/createFireSource`)(state)
    const createFirePropagation = (...props) => require(`./FireFunctions/calculateFirePropagation`)(state)

    const start = async () => {
        state.fireWidth = Math.floor(window.innerWidth/state.firePixelSize)//window.innerWidth/state.firePixelSize > Math.floor(window.innerWidth/state.firePixelSize) ? Math.floor(window.innerWidth/state.firePixelSize)+1 : Math.floor(window.innerWidth/state.firePixelSize)
        state.fireHeight = Math.floor(window.innerHeight/state.firePixelSize)//window.innerWidth/state.firePixelSize > Math.floor(window.innerHeight/state.firePixelSize) ? Math.floor(window.innerHeight/state.firePixelSize)+1 : Math.floor(window.innerHeight/state.firePixelSize)

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