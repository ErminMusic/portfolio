"use client";
import React from "react";
import styled from "styled-components";
import Hero from "./Hero/Hero";
import About from "./About/About";

function HomePage() {
    return (
        <Container>
            <Hero />
            <About />
        </Container>
    );
}

export default HomePage;

const Container = styled.div``;
