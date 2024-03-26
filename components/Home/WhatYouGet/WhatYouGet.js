import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const WhatYouGet = () => {
    return (
        <Container>
            <Wrapper>
                <Title>What You Get</Title>
                <Cards />
            </Wrapper>
        </Container>
    );
};

export default WhatYouGet;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 36px 0;
    color: #222222;
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

const Title = styled.h2`
    font-size: 32px;
`;
