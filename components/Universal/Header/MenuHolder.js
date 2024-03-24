import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Image from "next/image";

function MenuHolder() {
    const close = "/icons/close.svg";
    const menu = "/icons/menu.svg";
    const menuRef = useRef(null);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [menuRef]);
    return (
        <>
            <NavBarHolder ref={menuRef} $isMenuOpen={isMenuOpen}>
                <Navbar />
            </NavBarHolder>
            <Container>
                {isMenuOpen ? (
                    <Image
                        width={25}
                        height={25}
                        onClick={toggleMenu}
                        alt=""
                        src={close}
                    />
                ) : (
                    <Image
                        width={30}
                        height={30}
                        onClick={toggleMenu}
                        alt=""
                        src={menu}
                    />
                )}
            </Container>
        </>
    );
}

export default MenuHolder;

const Container = styled.div`
    display: none;
    @media (max-width: 750px) {
        display: block;
    }
`;
const NavBarHolder = styled.div`
    width: 40%;
    z-index: 100;
    @media (max-width: 750px) {
        position: absolute;
        top: 0;
        right: 0;
    }
    @media (max-width: 750px) {
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
