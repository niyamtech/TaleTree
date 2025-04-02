import React from 'react';
import './Icon.css';  # Import the component-specific Tailwind CSS styles

interface IconProps {
    children?: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ children }) => {
    return (
        <div className="Icon">
            {children}
        </div>
    );
};

export default Icon;
