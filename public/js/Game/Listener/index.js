module.exports = (cookie) => {
    const state = {
        keys: {},
        Fire: null
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
        
        if (key == '+' && !state.keys['Shift'] && state.Fire.state.decay > 2) state.Fire.state.decay -= 1
        if (key == '-' && !state.keys['Shift'] && state.Fire.state.decay < 100) state.Fire.state.decay += 1
        if (key == '+' && state.keys['Shift'] && state.Fire.state.fireColor < 200) state.Fire.state.fireColor += 1
        if (key == '-' && state.keys['Shift'] && state.Fire.state.fireColor > -200) state.Fire.state.fireColor -= 1
    }

    return {
        state
    }
}