import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Logo = () => {
    const LogoImg = "/images/PLogo.webp";
    return (
        <CustomLink href="/">
            <Image src={LogoImg} alt="Logo" width={99} height={66} />
        </CustomLink>
    );
};

export default Logo;

const CustomLink = styled(Link)`
    padding: 8px 0;
    text-decoration: none;
`;
