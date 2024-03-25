import React from "react";
import styled from "styled-components";

function Contact() {
    return (
        <Container>
            <Wrapper>
                <Holder>
                    <h2>
                        Discover if we could work together <br />
                        (I can only work with 2 clients at a time)
                    </h2>
                    <Button>Schedule a call</Button>
                </Holder>
                <Holder>
                    <h2>
                        If you still have questions contact me here <br /> and
                        I`ll respond within 12 hours:
                    </h2>

                    <span>ermin@erminmushic.com</span>
                </Holder>
            </Wrapper>
        </Container>
    );
}

export default Contact;

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    color: #222222;
    margin-top: 80px;
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 850px) {
        width: 95%;
    }
`;

const Button = styled.div`
    width: 250px;
    height: 45px;
    border-radius: 8px;
    margin: 20px 0;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222222;
    transition: 200ms;
    cursor: pointer;
    &:hover {
        scale: 1.05;
    }
    @media (max-width: 320px) {
        width: 200px;
    }
`;

const Holder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px 0;
    span {
        font-weight: bold;
        margin: 16px 0;
    }
`;
