import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Logo = () => {
    const LogoImg = "/images/PLogo.webp";
    return (
        <>
            <CustomLink href="/">
                <Container>
                    <Image src={LogoImg} alt="Logo" width={99} height={66} priority />
                    <h1>
                        Ermin <br /> Mushic
                    </h1>
                </Container>
            </CustomLink>
        </>
    );
};

export default Logo;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 24px;
        margin-left: 12px;
        text-decoration: none;
        color: white;
    }
`;
const CustomLink = styled(Link)`
    text-decoration: none;
`;
