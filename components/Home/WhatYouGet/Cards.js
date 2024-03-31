import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Cards = () => {
    const HandShakeIcon = "/icons/HandShakeIcon.webp";
    const LaunchIcon = "/icons/LaunchIcon.webp";
    const ScaleIcon = "/icons/ScaleIcon.webp";
    const PhoneIcon = "/icons/PhoneIcon.webp";

    const contentInfo = [
        {
            title: "Work together to create a plan of action",
            icon: HandShakeIcon,
        },
        {
            title: "Product development/ Launch",
            icon: LaunchIcon,
        },
        {
            title: "Web design, SEO, Copywriting, Ads, Systems.",
            icon: ScaleIcon,
        },
        {
            title: "24/7 Consultation/ Contact",
            icon: PhoneIcon,
        },
    ];
    return (
        <ContentHolder>
            {contentInfo.map((item, index) => (
                <Content key={index}>
                    <CustomIcon
                        alt="Icon"
                        src={item.icon}
                        width={100}
                        height={100}
                    />
                    <TitleHolder>
                        <span>{item.title}</span>
                    </TitleHolder>
                </Content>
            ))}
        </ContentHolder>
    );
};

export default Cards;

const ContentHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const TitleHolder = styled.div`
    width: 70%;
    span {
        font-size: 28px;
        font-weight: bold;
        @media (max-width: 500px) {
            font-size: 20px;
        }
    }
`;

const Content = styled.div`
    display: flex;
    width: 55%;
    justify-content: start;
    align-items: center;
    padding: 16px 0;
    margin: 18px 0;
    gap: 24px;
    border-bottom: 4px solid #222222;

    @media (max-width: 1150px) {
        width: 70%;
    }
    @media (max-width: 900px) {
        width: 90%;
    }
`;

const CustomIcon = styled(Image)``;
