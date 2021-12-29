import styled, { keyframes } from 'styled-components'


const imgAnimation = keyframes`
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0 0 0;
    position: relative;
    flex-wrap: wrap
`


export const Img = styled.img`
    width: 25%;
    margin: 1rem;
    border: 2px solid #cb9b87;
    animation: ${imgAnimation} 1s;
    object-fit: contain;
    background: black; 
    
    &:hover {
        cursor: pointer;
        
    }

    @media(max-width: 960px) {
        width: 40%
    }
    @media(max-width: 500px) {
        width: 80%
    }
`   


export const SelectedWrap = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 2rem;
    opacity: ${props => props.show ? '1' : '0'};
    transition: all .4s ease-in-out;
    position: fixed;
    z-index: 500000;

    @media(max-width: 960px) {
        top: 5rem
    }
    
`


export const Selected = styled.img`
    height: 90vh;
    border: 2px solid white;

    @media(max-width: 960px) {
        width: 80%;
        top: 5rem;
        height: auto
    }

    @media(max-width: 960px) {
        top: 12rem;
    }
`

export const Close = styled.div`
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: white;
    top: -1rem;
    right: -1rem;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.6rem;
    transform: rotate(45deg);
    cursor: pointer;

    @media(max-width: 960px) {
        display: none
    }
`

export const Next = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 1%;
    font-size: 1.5rem;
    color: #605e5e;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid #605e5e;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    p {
        position: relative;
        bottom: 4px;
        left: 1px;
    }
`


export const Prev = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 1%;
    font-size: 1.5rem;
    color: #605e5e;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid #605e5e;
    border-radius: 50%;
    background: white;
    cursor: pointer;

    p {
        position: relative;
        bottom: 4px;
        right: 1px;
    }
    
`