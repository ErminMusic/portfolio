import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Question from "./Question";

const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <Title />
                <Question />
            </Wrapper>
        </Container>
    );
};

export default Contact;

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    color: #222222;
    margin-top: 80px;
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
