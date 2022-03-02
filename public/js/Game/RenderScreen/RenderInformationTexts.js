module.exports = (ctx, Fire, Listener, cookie) => {
    if (+new Date()-Fire.state.fps.split('-')[1] > 1000) {
        Fire.state.fpsDisplay = Fire.state.fps.split('-')[0]
        Fire.state.fps = `0-${+new Date()}`
    }

    ctx.fillStyle = 'rgb(200, 200, 200)'
    ctx.font = `bold 10px Arial`
    ctx.fillText(`${Fire.state.fpsDisplay}FPS`, (canvas.width-4)-ctx.measureText(`${Fire.state.fpsDisplay}FPS`).width, 10);

    ctx.fillText('Aperte botões "+" e "-" para mudar a intensidade de fogo', 0, 15);
    ctx.fillText('Aperte "q" para limpar o fogo', 0, 30);
    ctx.fillText('Aperte "a" para acender o fogo', 0, 45);
    ctx.fillText('Segure "Shift" e aperte botões "+" e "-" para mudar a cor do fogo', 0, 60);
    ctx.fillText('Segure "w" e mova o mouse :)', 0, 75);
}