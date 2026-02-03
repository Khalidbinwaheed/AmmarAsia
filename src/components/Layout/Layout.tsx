
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../UI/WhatsAppButton';
import styled from 'styled-components';

const MainContent = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <MainContent>
                {children}
            </MainContent>
            <WhatsAppButton />
            <Footer />
        </>
    );
};

export default Layout;
