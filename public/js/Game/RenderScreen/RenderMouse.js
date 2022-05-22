module.exports = async (ctx, Fire, Listener, cookie) => {
    let X = window.innerWidth*Listener.state.mousePosition.x
    let Y = window.innerHeight*Listener.state.mousePosition.y

    let image = Fire.state.images['Flint_and_Stee']
    if (!image) {
        image = new Image()
        image.src = '/images/Flint_and_Stee.png'
        Fire.state.images['Flint_and_Stee'] = image
    }
    ctx.drawImage(image, X, Y, 30, 30)
}