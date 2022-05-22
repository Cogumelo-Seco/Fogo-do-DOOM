module.exports = async (ctx, Fire, Listener, cookie) => {
    if (+new Date()-Fire.state.fps.split('-')[1] > 1000) {
        Fire.state.fpsDisplay = Fire.state.fps.split('-')[0]
        Fire.state.fps = `0-${+new Date()}`
    }

    ctx.fillStyle = 'rgb(200, 200, 200)'
    ctx.font = `bold 10px Arial`
    ctx.fillText(`${Fire.state.fpsDisplay}FPS`, (canvas.width-4)-ctx.measureText(`${Fire.state.fpsDisplay}FPS`).width, 10);

    ctx.fillText(`Mouse: X: ${Number.parseInt(Listener.state.mousePosition.x*100)}% Y: ${Number.parseInt(Listener.state.mousePosition.y*100)}%`, (canvas.width-4)-ctx.measureText(`Mouse: X: ${Number.parseInt(Listener.state.mousePosition.x*100)}% Y: ${Number.parseInt(Listener.state.mousePosition.y*100)}%`).width, 25);

    ctx.fillText('Aperte botões "z" e "x" para mudar a intensidade de fogo', 0, 10);
    ctx.fillText('Aperte botões "e" e "r" para mudar o tamanho do fogo', 0, 25);
    ctx.fillText('Aperte "q" para limpar o fogo', 0, 40);
    ctx.fillText('Aperte "a" para acender o fogo', 0, 55);
    ctx.fillText('Segure "c" para mudar a cor do fogo', 0, 70);
}