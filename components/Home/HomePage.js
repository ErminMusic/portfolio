"use client";
import React from "react";
import styled from "styled-components";
import Hero from "./Hero";

function HomePage() {
    return (
        <Container>
            <Hero />
        </Container>
    );
}

export default HomePage;

const Container = styled.div``;
