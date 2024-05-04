import React from "react";
import styled from "styled-components";
import HeroButtons from "./HeroButtons";

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <h1>
                    I will find or make a way to grow your business in 45
                    days.
                </h1>
                <h2>Guaranteed.</h2>

                <HeroButtons />
            </Wrapper>
        </Container>
    );
};

export default Hero;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #222222;
    h1 {
        @media (max-width: 400px) {
            font-size: 26px;
        }
    }
    h2 {
        margin: 8px 0;
        @media (max-width: 400px) {
            font-size: 20px;
        }
    }
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
