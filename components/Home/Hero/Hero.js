import React from "react";
import styled from "styled-components";
import HeroButtons from "./HeroButtons";

function Hero() {
    return (
        <Container>
            <h1>
                I will find a way or make a way to grow your business in 45
                days.
            </h1>
            <h2>Guaranteed.</h2>

            <HeroButtons />
        </Container>
    );
}

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
