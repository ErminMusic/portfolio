import React from "react";
import styled from "styled-components";
import ProcessDetail from "./ProcessDetail";
import NonNegotiables from "./NonNegotiables";

function Process() {
    return (
        <Container id="HowItWorks">
            <Wrapper>
                <Title>How it Works</Title>
                <ProcessDetail />
                <Title>My Non-Negotiables</Title>
                <NonNegotiables />
            </Wrapper>
        </Container>
    );
}

export default Process;

const Container = styled.div`
    background-color: #222222;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px 0 36px 0;
    color: white;
    scroll-margin-top: 80px;
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 850px) {
        width: 95%;
    }
`;

const Title = styled.h1`
    margin: 20px 0;
`;
