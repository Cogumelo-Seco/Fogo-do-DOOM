import data from '../public/js/data.js';
import createFire from '../public/js/Game/Fire/index.js'
import startRender from '../public/js/Game/RenderScreen/index.js'
import createListener from '../public/js/Game/Listener/index.js'
import { useRouter } from 'next/router';
import cookies from 'next-cookies';
import React, { useEffect } from 'react';
import Head from "next/head";

const Page = () => {    
    const cookie = cookies(data)
    const router = useRouter()

    useEffect(() => {
        const Listener = createListener(cookie)
        const Fire = createFire(Listener, cookie)
        Listener.state.Fire = Fire

        Fire.start()
        
        startRender(Fire, Listener, router, cookie)
    }, [])

    return (
        <html lang="pt-BR">
            <Head>
                <title>Fire of DOOM</title>
            </Head>
            <head>                
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="stylesheet" href="/css/fire/fire.css" />
            </head>
            <body>
                <section>
                    <canvas id="canvas" />
                </section>
            </body>
        </html>
    )
}

export default Page