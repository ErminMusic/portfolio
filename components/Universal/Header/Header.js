"use client";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MenuHolder from "./MenuHolder";

function Header() {
    return (
        <Container>
            <Wrapper>
                <Logo />
                <MenuHolder />
            </Wrapper>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    width: 100%;
    height: 80px;
    color: white;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 1000;
`;
const Wrapper = styled.div`
    width: 85%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 850px) {
        width: 95%;
    }
`;
