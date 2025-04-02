import React from 'react';
import './Header.css';  # Import the component-specific Tailwind CSS styles

interface HeaderProps {
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <div className="Header">
            {children}
        </div>
    );
};

export default Header;
