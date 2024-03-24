import React from "react";
import styled from "styled-components";

function ProcessDetail() {
    const process = [
        {
            title: "Pre-Call Diagnose",
            description:
                "Before the call, I will perform a rough analysis of your business and come up with a hypothesis of potential opportunities for success.",
        },
        {
            title: "Full Diagnose",
            description:
                "During the call, I will ask you some simple questions to figure out your exact situation, goals, and needs.",
        },
        {
            title: "Presentation",
            description:
                "After determining exactly what you need and where you want your business to go, I will present to you every opportunity for growth that is available.",
        },
        {
            title: "Action",
            description:
                "Once everything is clear, we will outline a deal and get to work.",
        },
        {
            title: "Revision",
            description:
                "Once I finish the project’s first draft, I will revise it 3 - 5 times and send it to you. We will go back and forth until the first project is ready to test.",
        },
        {
            title: "Testing & Ideating",
            description:
                "Once everything is set in place, we will launch the project. When we launch the project, new problems will arise. I will fix and fine-tune them until everything runs completely smoothly.",
        },
    ];
    return (
        <TextHolder>
            {process.map((item, index) => (
                <div key={index}>
                    <SubTitle>
                        Step {index + 1} {item.title}:
                    </SubTitle>
                    <br />
                    {item.description}
                    <br />
                    <br />
                </div>
            ))}
        </TextHolder>
    );
}

export default ProcessDetail;

const TextHolder = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const SubTitle = styled.span`
    font-weight: bold;
    font-size: 20px;
`;
