module.exports = async function RenderScreen(Fire, Listener, router, cookie) {
    const fps = Number(Fire.state.fps.split('-')[0])
    Fire.state.fps = `${fps + 1}-${Fire.state.fps.split('-')[1]}`
    
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    require('./RenderFire')(ctx, Fire, Listener, cookie)
    require('./RenderInformationTexts')(ctx, Fire, Listener, cookie)
    require('./RenderMouse')(ctx, Fire, Listener, cookie)

    /*let rAF = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.requestAnimationFrame;
    rAF(() => RenderScreen(Fire, Listener, router, cookie))*/

    setTimeout(async() => RenderScreen(Fire, Listener, router, cookie), 0)
}