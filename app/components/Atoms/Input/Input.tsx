import React from 'react';
import './Input.css';  # Import the component-specific Tailwind CSS styles

interface InputProps {
    children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ children }) => {
    return (
        <div className="Input">
            {children}
        </div>
    );
};

export default Input;
