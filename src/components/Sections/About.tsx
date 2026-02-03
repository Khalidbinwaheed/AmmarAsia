
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
    padding: 6rem 5%;
    background: ${({ theme }) => theme.colors.backgroundSecondary};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 4rem 5%;
    }
`;

const SectionTitle = styled.h2`
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 3px;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2rem;
    }
`;

const AboutContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.2rem;
    line-height: 2;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 0 1rem;
        font-size: 1.1rem;
    }
`;

const About: React.FC = () => {
    return (
        <AboutSection id="about">
            <SectionTitle>Our Story</SectionTitle>
            <AboutContent>
                <p>
                    We believe that true elegance lies in the details. Each piece in our collection is crafted with precision, passion, and an unwavering commitment to quality. Our designs blend timeless sophistication with contemporary style, creating garments that empower you to express your unique identity.
                </p>
            </AboutContent>
        </AboutSection>
    );
};

export default About;
