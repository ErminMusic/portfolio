import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Navbar() {
    const links = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Projects",
            link: "/projects",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];
    return (
        <Container>
            {links.map((item, index) => (
                <NavBarItem key={index}>
                    <span>
                        <Link href={item.link}>{item.name}</Link>
                    </span>
                </NavBarItem>
            ))}
        </Container>
    );
}

export default Navbar;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 750px) {
        flex-direction: column;
        justify-content: start;
        padding: 8px 0;
        position: relative;
    }
`

const NavBarItem = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    @media (max-width: 750px) {
        flex-direction: row;
        align-items: flex-start;
        padding: 8px;
        min-height: 52px;
    }
    span {
        font-size: 13px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        position: relative;
        &::after {
            content: "";
            height: 2.5px;
            background: #ffffff;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -4px;
            opacity: 0;
            transform: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
    a {
        text-decoration: none;
        color: white;
        z-index: 1;
    }
`;
