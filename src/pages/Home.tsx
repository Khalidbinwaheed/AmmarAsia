
import React from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Collection from '../components/Sections/Collection';
import Contact from '../components/Sections/Contact';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Asia Designer Boutique Birmingham | Luxury Bridal & Asian Wear</title>
                <meta name="description" content="Asia Designer Boutique in Birmingham (Bilqees Mall). Premium Asian fashion, luxury bridal wear, and Pakistani designer clothing in Sparkbrook. Call 07717 833897." />
                <meta name="keywords" content="Asia Designer, Asia Designer Boutique, Luxury Fashion, Birmingham Boutique, Bilqees Mall, Designer Clothing, Asian Fashion, Sparkbrook, Pakistani Fashion, Indian Fashion" />
                <link rel="canonical" href="https://asiadesignerboutique.com/" />
                
                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://asiadesignerboutique.com/" />
                <meta property="og:title" content="Asia Designer Boutique - Luxury Fashion | Birmingham" />
                <meta property="og:description" content="Redefining Luxury Fashion. Explore our exclusive collection of crafted garments that empower your unique identity." />
                <meta property="og:image" content="https://www.asiadesignerboutique.com/assets/images/logo2.png" />
                <meta property="og:locale" content="en_GB" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://asiadesignerboutique.com/" />
                <meta name="twitter:title" content="Asia Designer Boutique - Luxury Fashion | Birmingham" />
                <meta name="twitter:description" content="Redefining Luxury Fashion. Explore our exclusive collection of crafted garments that empower your unique identity." />
                <meta name="twitter:image" content="https://www.asiadesignerboutique.com/assets/images/logo2.png" />
                
                {/* Schema Markup */}
                <script type="application/ld+json">
                {`
                    {
                      "@context": "https://schema.org",
                      "@type": "FashionStore",
                      "name": "Asia Designer Boutique",
                      "image": [
                        "https://www.asiadesignerboutique.com/assets/images/logo2.png",
                        "https://www.asiadesignerboutique.com/assets/images/herosection.jpg"
                      ],
                      "@id": "https://www.asiadesignerboutique.com",
                      "url": "https://www.asiadesignerboutique.com/",
                      "telephone": "+447717833897",
                      "email": "asia.designerltd@gmail.com",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Unit 11A, Bilqees Mall, 11A Walford Rd",
                        "addressLocality": "Sparkbrook, Birmingham",
                        "postalCode": "B11 1NP",
                        "addressCountry": "UK"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 52.4631,
                        "longitude": -1.8795
                      },
                      "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday",
                          "Sunday"
                        ],
                        "opens": "11:30",
                        "closes": "19:00"
                      },
                      "sameAs": [
                        "https://www.instagram.com/asiadesignerboutique",
                        "https://www.tiktok.com/@asia.designerboutique"
                      ],
                      "priceRange": "$$",
                      "paymentAccepted": "Cash, Credit Card",
                      "areaServed": "Birmingham"
                    }
                `}
                </script>
            </Helmet>

            <Hero />
            <About />
            <Collection />
            <Contact />
        </>
    );
};

export default Home;
