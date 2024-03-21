import React from "react";
import styled from "styled-components";

function Hero() {
    return (
        <Container>
            <h1>
                I will find a way or make a way to grow your business in 45
                days.
            </h1>
            <h2>Guaranteed.</h2>

            <ButtonHolder>
                <CustomLink href="#HowItWorks">
                    <HowButton>How it Works</HowButton>
                </CustomLink>

                <CustomLink href="/contact">
                    <ContactButton>Contact</ContactButton>
                </CustomLink>
            </ButtonHolder>
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
const ButtonHolder = styled.div`
    margin: 24px 0;
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    @media (max-width: 980px) {
        width: 80%;
    }
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`;

const HowButton = styled.div`
    width: 250px;
    height: 45px;
    border-radius: 8px;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222222;
    transition: 200ms;
    &:hover {
        scale: 1.05;
    }
    @media (max-width: 320px) {
        width: 200px;
    }
`;

const ContactButton = styled(HowButton)`
    background-color: #EB0000;
`;

const CustomLink = styled.a`
    text-decoration: none;
`;
