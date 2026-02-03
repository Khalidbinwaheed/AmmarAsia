
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import images
import img1 from '../../assets/images/asia1.jpeg';
import img2 from '../../assets/images/asia2.jpeg';
import img3 from '../../assets/images/asia3.jpeg';
import img5 from '../../assets/images/asia5.jpg';

const CollectionSection = styled.section`
    padding: 6rem 5%;
    background: ${({ theme }) => theme.colors.background};
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

const CollectionGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const CollectionItem = styled(motion.div)`
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 3/4;
    position: relative;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    transition: all 0.5s ease;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.2);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.4);
        
        &::after {
            opacity: 1;
        }
    }
`;

const CollectionImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.7s ease;

    ${CollectionItem}:hover & {
        transform: scale(1.08);
    }
`;

const CTA = styled.p`
    text-align: center;
    margin-top: 3rem;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 1px;
    font-style: italic;
`;

const Collection: React.FC = () => {
    const images = [
        { src: img1, alt: "Luxury Asian Designer Suit" },
        { src: img2, alt: "Elegant Pakistani Party Wear" },
        { src: img3, alt: "Contemporary Luxury Fashion" },
        { src: img5, alt: "Exclusive Designer Collection" },
    ];

    return (
        <CollectionSection id="collection">
            <SectionTitle>Featured Collection</SectionTitle>
            <CollectionGrid>
                {images.map((img, index) => (
                    <CollectionItem
                        key={index}
                        whileHover={{ y: -10 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <CollectionImage src={img.src} alt={img.alt} loading="lazy" />
                    </CollectionItem>
                ))}
            </CollectionGrid>
            <CTA>If you want to see more, please visit the shop</CTA>
        </CollectionSection>
    );
};

export default Collection;
