module.exports = (cookie) => {
    const state = {
        keys: {},
    }

    document.addEventListener('keydown', (event) => {
        state.keys[event.code] = true
        handleKeys(event)
    })
    document.addEventListener('keyup', (event) => {
        state.keys[event.code] = false
    })

    function handleKeys(event) {
        
    }

    return {
        state
    }
}