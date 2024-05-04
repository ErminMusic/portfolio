import React from "react";
import styled from "styled-components";

const Title = () => {
    return (
        <Holder>
            <h2>
                See if we could work together <br />
                (I can only work with 1 more client)
            </h2>
            <Button>Schedule a call</Button>
        </Holder>
    );
};

export default Title;

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
