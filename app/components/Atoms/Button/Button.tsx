import React from 'react';
import './Button.css';  # Import the component-specific Tailwind CSS styles

interface ButtonProps {
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <div className="Button">
            {children}
        </div>
    );
};

export default Button;
