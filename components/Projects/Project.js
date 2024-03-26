import React from "react";
import styled from "styled-components";
import Proof from "./Proof";

const Project = () => {
    return (
        <Container>
            <Wrapper>
                <Title>My Projects</Title>

                <Proof />
            </Wrapper>
        </Container>
    );
};

export default Project;

const Container = styled.div`
    margin-top: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
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

const Title = styled.h1`
    margin: 16px;
`;
