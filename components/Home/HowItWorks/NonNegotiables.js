import React from "react";
import styled from "styled-components";

function NonNegotiables() {
    const nonNegotiables = [
        {
            title: "If we don’t get along, ",
            titleBold: "we DON’T work together.",
        },
        {
            title: "Initial wins may come fast, ",
            titleBold: "complete growth WILL take time.",
        },
        {
            title: "I’m not a Gini, ",
            titleBold: "we work TOGETHER.",
        },
        {
            title: "",
            titleBold: "I don’t waste time.",
        },
    ];
    return (
        <TextHolder>
            {nonNegotiables.map((item, index) => (
                <div key={index}>
                    <SubTitle>
                        {index + 1}. {item.title}{" "}
                        <TitleDecoration>{item.titleBold}</TitleDecoration>
                    </SubTitle>
                    <br />
                    <br />
                </div>
            ))}
        </TextHolder>
    );
}

export default NonNegotiables;

const TextHolder = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const SubTitle = styled.span`
    font-weight: bold;
    font-size: 20px;
`;

const TitleDecoration = styled.span`
    text-decoration: underline;
`;
