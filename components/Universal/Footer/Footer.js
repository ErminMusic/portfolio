"use client";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Text from "./Text";

function Footer() {
    return (
        <Container>
            <Logo />
            <Text />
        </Container>
    );
}

export default Footer;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28px 0;
`;



