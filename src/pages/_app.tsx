import Image from "next/image"
import { AppProps } from "next/app"

import { globalStyles } from "@srm/styles/global"
import { Container, Header } from "@srm/styles/pages/app"

import logoImg from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps}: AppProps) {
    return (
        <div>
            <Container>
                <Header>
                    <Image src={logoImg} alt="Logo" />
                </Header>
                
                <Component {...pageProps} />
            </Container>
        </div>
    )
}

