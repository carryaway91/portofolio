import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, *:before,*:after {
        box-sizing: border-box
    }

    html, body {
        padding: 0;
        margin: 0ô
        font-family: Montserrat
    }

    body {
        background: #f3f2f2;
        color: #0A3738;
        position: relative;
    }
    
    h1,h2,h3,h4,h5,h6 {
        margin: 0
    }
    ul {
        padding: 0
    }
    li {
        list-style-type: none
    }

    a {
        text-decoration: none;
    }
    `
    
    export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`

export const Main = styled.div`
    max-width: 1230px;
    margin: 0rem auto
    
`

export const Overlay = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: black;
    opacity: .8;
    z-index: 200000
`
export const UnderNav = styled.div`
    width: 100%;
    height: 7.5rem;


    @media(max-width: 510px) {
        height: 9rem
    }
`