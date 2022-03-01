module.exports = (cookie) => {
    const state = {
        keys: {},
        Fire: null
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
        let key = event.key
        
        //if (key == '+') state.Fire.state
    }

    return {
        state
    }
}