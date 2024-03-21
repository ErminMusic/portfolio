import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Logo() {
    const LogoImg = "/PLogo.webp";
    return (
        <>
            <CustomLink href="/">
                <Container>
                    <Image src={LogoImg} alt="Logo" width={99} height={66} />
                    <h1>
                        Ermin <br /> Mushic
                    </h1>
                </Container>
            </CustomLink>
        </>
    );
}

export default Logo;

const Container = styled.div`
    display: flex;
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
