import React from "react";
import styled from "styled-components";

const Description = () => {
    const description = `Hi, I’m Ermin.<br /><br />
    Over the past three months, I helped my client <b>increase his website visits by x% and conversions by x%.</b><br /><br />
    I approach my work as a strategic partner. <b>I want to be fully involved with your brand and see you succeed.</b><br /><br />
    We’ll work together to create a plan of action to grow your business.<br /><br />
    Below are testimonials, a rough outline of the initial steps for growing your business, and my contact info.<br /><br />
    I’m looking forward to hearing from you!`;
    return (
        <Container>
            <Paragraph dangerouslySetInnerHTML={{ __html: description }} />
        </Container>
    );
};

export default Description;

const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    padding: 24px;
    @media (max-width: 730px) {
        width: 95%;
        padding: 24px 12px;
    }
`;
const Paragraph = styled.span`
    color: white;
`;
