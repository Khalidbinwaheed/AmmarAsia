
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
    font-size: 4rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 4px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2.5rem;
        letter-spacing: 2px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2rem;
    }
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 2rem;
    letter-spacing: 2px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1.2rem;
        padding: 0 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
    }
`;

const CTAButton = styled(Link)`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    color: ${({ theme }) => theme.colors.background};
    padding: 1rem 3rem;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    display: inline-block;
    text-decoration: none;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(212, 175, 55, 0.5);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        max-width: 280px;
        padding: 0.8rem 1.5rem;
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
