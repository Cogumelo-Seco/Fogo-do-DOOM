module.exports = (ctx, Fire, Listener, cookie) => {
    if (+new Date()-Fire.state.fps.split('-')[1] > 1000) {
        Fire.state.fpsDisplay = Fire.state.fps.split('-')[0]
        Fire.state.fps = `0-${+new Date()}`
    }

    ctx.fillStyle = 'rgb(200, 200, 200)'
    ctx.font = `bold 10px Arial`
    ctx.fillText(`${Fire.state.fpsDisplay}FPS`, (canvas.width-4)-ctx.measureText(`${Fire.state.fpsDisplay}FPS`).width, 10);
}