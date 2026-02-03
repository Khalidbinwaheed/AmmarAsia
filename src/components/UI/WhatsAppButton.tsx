
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`;

const WhatsAppLink = styled.a`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
    font-size: 35px;
    box-shadow: 2px 2px 3px #999;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    animation: ${float} 3s ease-in-out infinite;

    &:hover {
        background-color: #128c7e;
        transform: scale(1.1);
    }
`;

const WhatsAppButton: React.FC = () => {
    // UK phone number format required by WhatsApp API (remove leading 0, add country code)
    // 07717 833897 -> 447717833897
    const phoneNumber = "447717833897";
    const message = "Hello, I'm interested in an appointment at Asia Designer Boutique.";
    
    return (
        <WhatsAppLink 
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp />
        </WhatsAppLink>
    );
};

export default WhatsAppButton;
