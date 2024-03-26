"use client";
import React from "react";
import styled from "styled-components";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Testimonials from "./Testimonials/Testimonials";
import Process from "./HowItWorks/Process";
import WhatYouGet from "./WhatYouGet/WhatYouGet";
import Contact from "../Contact/Contact";

const HomePage = () => {
    return (
        <Container>
            <Hero />
            <About />
            <Process />
            <WhatYouGet />
            <Testimonials />
        </Container>
    );
};

export default HomePage;

const Container = styled.div`
    margin-top: 80px;
`;
