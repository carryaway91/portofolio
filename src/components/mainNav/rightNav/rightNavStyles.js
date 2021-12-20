import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    margin: 0 0 0 3rem;

    @media(max-width: 430px) {
        margin: 0
    }
    a {

        @media(max-width: 350px) {
            font-size: .8rem;
        }
    }
`