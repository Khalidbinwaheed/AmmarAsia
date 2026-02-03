
import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/images/herosection.jpg';
import { Link } from 'react-scroll';

const HeroSection = styled.section`
    height: 70vh;
    min-height: 500px;
    max-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: auto;
        min-height: 450px;
        padding-top: 120px;
    }
`;

const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

const HeroOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.overlay} 0%, rgba(26, 26, 26, 0.6) 100%);
    z-index: 1;
`;

const HeroContent = styled.div`
    text-align: center;
    z-index: 2;
    padding: 2rem;
    position: relative;
`;

const Title = styled.h1`
    font-size: 5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 2px 4px 8px rgba(0,0,0,0.5);
    letter-spacing: 2px;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 3.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.5rem;
    }
`;

const Subtitle = styled.p`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 3rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 300;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1.1rem;
    }
`;

const CTAButton = styled(Link)`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    padding: 1rem 3rem;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    letter-spacing: 3px;
    cursor: pointer;
    transition: all 0.4s ease;
    text-transform: uppercase;
    display: inline-block;
    text-decoration: none;
    position: relative;
    overflow: hidden;

    &:hover {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.background};
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0.8rem 2rem;
    }
`;

const Hero: React.FC = () => {
    return (
        <HeroSection id="home">
            <HeroBackground>
                <BackgroundImage src={heroImage} alt="Asia Designer Boutique Background" />
                <HeroOverlay />
            </HeroBackground>
            <HeroContent>
                <Title>Asia Designer Boutique</Title>
                <Subtitle>Redefining Luxury Fashion</Subtitle>
                <CTAButton to="collection" smooth={true} duration={500} offset={-80}>
                    Explore Collection
                </CTAButton>
            </HeroContent>
        </HeroSection>
    );
};

export default Hero;
