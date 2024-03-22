"use client";
import React from "react";
import styled from "styled-components";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Testimonials from "./Testimonials/Testimonials";

function HomePage() {
    return (
        <Container>
            <Hero />
            <About />
            
            <Testimonials />
        </Container>
    );
}

export default HomePage;

const Container = styled.div`
    margin-top: 80px;
`;
