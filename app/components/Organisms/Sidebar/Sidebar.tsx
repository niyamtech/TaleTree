import React from 'react';
import './Sidebar.css';  # Import the component-specific Tailwind CSS styles

interface SidebarProps {
    children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className="Sidebar">
            {children}
        </div>
    );
};

export default Sidebar;
