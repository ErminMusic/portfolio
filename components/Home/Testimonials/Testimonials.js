import React from "react";
import styled from "styled-components";
import ScreenshotHolder from "./ScreenshotHolder";

function Testimonials() {
    return (
        <Container>
            <h1>Testimonials</h1>
            <ScreenshotHolder />
        </Container>
    );
}

export default Testimonials;

const Container = styled.div`
    background-color: #222222;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 36px 0;
    color: white;
`;
