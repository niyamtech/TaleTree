import React from 'react';
import './Footer.css';  # Import the component-specific Tailwind CSS styles

interface FooterProps {
    children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
    return (
        <div className="Footer">
            {children}
        </div>
    );
};

export default Footer;
