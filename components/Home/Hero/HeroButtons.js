import React from "react";
import styled from "styled-components";

const HeroButtons = () => {
    return (
        <ButtonHolder>
            <CustomLink href="#HowItWorks">
                <HowButton>How it Works</HowButton>
            </CustomLink>

            <CustomLink href="/contact">
                <ContactButton>Contact</ContactButton>
            </CustomLink>
        </ButtonHolder>
    );
};

export default HeroButtons;

const ButtonHolder = styled.div`
    margin: 30px 0;
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
    background-color: #eb0000;
`;

const CustomLink = styled.a`
    text-decoration: none;
`;
