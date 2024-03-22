import React from "react";
import styled from "styled-components";
import Description from "./Description";
import SideImage from "./SideImage";

function About() {
    return (
        <Container>
            <Wrapper>
                <SideImage />
                <Description />
            </Wrapper>
        </Container>
    );
}

export default About;

const Container = styled.div`
    background-color: #222222;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 36px 0;
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 730px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`;
