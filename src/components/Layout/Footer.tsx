
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const FooterSection = styled.footer`
    background: ${({ theme }) => theme.colors.background};
    padding: 3rem 5%;
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
`;

const SocialMedia = styled.div`
    margin-bottom: 2rem;

    h3 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        letter-spacing: 2px;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`;

const SocialLink = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem; // Adjusted for React Icons size
    transition: all 0.3s ease;
    display: inline-block;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryHover};
        transform: translateY(-5px) scale(1.1);
        filter: drop-shadow(0 8px 16px rgba(212, 175, 55, 0.5));
    }
`;

const Copyright = styled.p`
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(212, 175, 55, 0.2);
    line-height: 1.6;
`;

const Footer: React.FC = () => {
    return (
        <FooterSection>
            <SocialMedia>
                <h3>Follow Us</h3>
                <SocialIcons>
                    <SocialLink href="https://www.instagram.com/asiadesignerboutique?igsh=MTlobnJsdmd4dG4yag%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </SocialLink>
                    <SocialLink href="https://www.tiktok.com/@asia.designerboutique?_r=1&_t=ZN-934KfPwSqco" target="_blank" rel="noopener noreferrer">
                        <FaTiktok />
                    </SocialLink>
                </SocialIcons>
            </SocialMedia>
            <Copyright>
                &copy; 2026 Asia Designer Boutique Limited. All rights reserved. <br />
                Company Registration Number: 16948264
            </Copyright>
        </FooterSection>
    );
};

export default Footer;
