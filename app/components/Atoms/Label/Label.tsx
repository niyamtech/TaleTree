import React from 'react';
import './Label.css';  # Import the component-specific Tailwind CSS styles

interface LabelProps {
    children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
    return (
        <div className="Label">
            {children}
        </div>
    );
};

export default Label;
