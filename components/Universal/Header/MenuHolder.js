import { useState, useRef } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Image from "next/image";

function MenuHolder() {
    const close = "/images/close.svg"
    const menu = "/images/menu.svg"
    const menuRef = useRef(null);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <NavBarHolder ref={menuRef} $isMenuOpen={isMenuOpen}>
                <Navbar />
            </NavBarHolder>
            <Container>
                {isMenuOpen ? (
                    <Image width={25} height={25} onClick={toggleMenu} alt="" src={close} />
                ) : (
                    <Image width={30} height={30} onClick={toggleMenu} alt="" src={menu} />
                )}
            </Container>
        </>
    );
}

export default MenuHolder;

const Container = styled.div`
    display: none;
    @media (max-width: 850px) {
        display: block;
    }
`;
const NavBarHolder = styled.div`
    width: 40%;
    z-index: 100;
    @media (max-width: 900px) {
        width: 70%;
    }
    @media (max-width: 850px) {
        position: absolute;
        top: 0;
        right: 0;
    }
    @media (max-width: 850px) {
        transform: ${({ $isMenuOpen }) =>
            $isMenuOpen ? "translateX(0)" : "translateX(100%)"};
        transition: transform 0.3s ease-in-out;
        background: black;
        position: fixed;
        padding: 0 16px;
        height: auto;
        width: 200px;
        top: 80px;
        right: 0;
        z-index: 1;
    }
`;
