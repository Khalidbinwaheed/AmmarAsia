
import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
    padding: 6rem 5%;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
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

const ContactContent = styled.div`
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
`;

const ContactInfo = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const ContactItem = styled.div`
    background: rgba(212, 175, 55, 0.1);
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    transition: all 0.3s ease;

    &:hover {
        background: rgba(212, 175, 55, 0.2);
        border-color: ${({ theme }) => theme.colors.primary};
    }

    h3 {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 0.5rem;
        letter-spacing: 1px;
    }

    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 1.1rem;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
            color: ${({ theme }) => theme.colors.primaryHover};
            text-decoration: underline;
        }
    }
`;

const Contact: React.FC = () => {
    return (
        <ContactSection id="contact">
            <SectionTitle>Get In Touch</SectionTitle>
            <ContactContent>
                <ContactInfo>
                    <ContactItem>
                        <h3>📧 Email</h3>
                        <p><a href="mailto:asia.designerltd@gmail.com">asia.designerltd@gmail.com</a></p>
                    </ContactItem>
                    <ContactItem>
                        <h3>📱 Phone</h3>
                        <p><a href="tel:+447717833897">07717 833897</a></p>
                    </ContactItem>
                    <ContactItem>
                        <h3>📍 Location</h3>
                        <p>Unit 11A, Bilqees Mall, 11A Walford Rd, Sparkbrook, Birmingham B11 1NP</p>
                    </ContactItem>
                    <ContactItem>
                        <h3>🕒 Hours</h3>
                        <p>11:30 AM - 7:00 PM</p>
                    </ContactItem>
                </ContactInfo>
            </ContactContent>
        </ContactSection>
    );
};

export default Contact;
