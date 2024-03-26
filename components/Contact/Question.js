import React from "react";
import styled from "styled-components";

const Question = () => {
    return (
        <Holder>
            <h2>
                If you still have questions contact me here <br /> and I`ll
                respond within 12 hours:
            </h2>
            <span>ermin@erminmushic.com</span>
        </Holder>
    );
};

export default Question;

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
