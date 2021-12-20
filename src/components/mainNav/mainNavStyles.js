import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 3000;
    background: #f3f2f2;

    .main {
        display: flex;
        @media(max-width: 670px) {
            flex-direction: column;

            ul {
                margin: 0;
                position: relative;
                left: -2rem
            }
        }
        @media(max-width: 430px) {
            ul {
                left: -.4rem
            }
        }
    }

    @media(max-width: 530px) {
        flex-direction: column
    }


`

export const LogoStyle = {
    color: '#0a3738',
    fontWeight: 'bold',
    fontSize: '2rem'
}

export const LangBtn = styled.button`
    position: relative;
    border: none;
    outline: none;
    background: none;
    color: #4e2d20;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        bottom: -.3rem;
        width: 0;
        height: 4px;
        background: #4e2d20;
        border-radius: 1rem;
        transition: all .1s ease-in-out;
    }

    &:hover {
        &:before {
            width: 30%
        }    
    }

`
export const LangWrapper = styled.div`
    display: flex;
    align-items: center;
    color: #4e2d20;

    span {
        position: relative;
        top: -3px
    }

    @media(max-width: 530px) {
        position: relative;
        left: -.4rem
    }
`