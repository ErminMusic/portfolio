import React from "react";
import styled from "styled-components";

function Text() {
    return (
        <TextHolder>
            <span>Ermin Mushic</span>
            <span>ermin@erminmushic.com</span>
            <span>©2024 by Ermin Mushic</span>
        </TextHolder>
    );
}

export default Text;

const TextHolder = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    span {
        font-weight: bold;
        padding: 4px;
    }
`;
