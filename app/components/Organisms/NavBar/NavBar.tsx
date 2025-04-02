import React from 'react';
import './NavBar.css';  # Import the component-specific Tailwind CSS styles

interface NavBarProps {
    children?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
    return (
        <div className="NavBar">
            {children}
        </div>
    );
};

export default NavBar;
