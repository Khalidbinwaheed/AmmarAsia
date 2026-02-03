
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo2.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav<{ $scrolled: boolean }>`
    position: fixed;
    top: 0;
    width: 100%;
    background: ${({ $scrolled }) => $scrolled ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.95)'};
    backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
    padding: 0.75rem 5%;
    z-index: 1000;
    border-bottom: 1px solid ${({ $scrolled, theme }) => $scrolled ? theme.colors.border : 'transparent'};
    transition: all 0.3s ease;
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
`;

const LogoHeader = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 1001; /* Ensure logo is above mobile menu */

    img {
        height: 70px;
        width: auto;
        object-fit: contain;
        filter: drop-shadow(0 4px 12px rgba(212, 175, 55, 0.4));
        transition: transform 0.3s ease;
        display: block;

        &:hover {
            transform: scale(1.05);
            filter: drop-shadow(0 6px 16px rgba(212, 175, 55, 0.6));
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            height: 55px;
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            height: 45px;
        }
    }
`;

const MobileIcon = styled.div`
    display: none;
    z-index: 1001;
    cursor: pointer;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: block;
    }
`;

const NavList = styled.ul<{ $isOpen: boolean }>`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    align-items: center;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        position: fixed;
        top: 0;
        right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
        width: 70%;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        background: rgba(10, 10, 10, 0.98);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease-in-out;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
        border-left: 1px solid ${({ theme }) => theme.colors.border};
        z-index: 1000;
    }
`;

const NavLink = styled(Link)`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 1rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    white-space: nowrap;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryHover};
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.colors.primary};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1.2rem;
        width: 100%;
        text-align: center;
        padding: 1rem 0;

        &:hover {
            background: rgba(212, 175, 55, 0.1);
        }
    }
`;

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Nav $scrolled={scrolled}>
            <NavContainer>
                <LogoHeader>
                    <img src={logo} alt="Asia Designer Boutique Logo" />
                </LogoHeader>
                <MobileIcon onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavList $isOpen={isOpen}>
                    <li><NavLink to="home" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to="about" smooth={true} duration={500} offset={-80} onClick={closeMenu}>About</NavLink></li>
                    <li><NavLink to="collection" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Collection</NavLink></li>
                    <li><NavLink to="contact" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Contact</NavLink></li>
                </NavList>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
