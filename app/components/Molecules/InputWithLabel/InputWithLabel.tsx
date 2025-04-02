import React from 'react';
import './InputWithLabel.css';  # Import the component-specific Tailwind CSS styles

interface InputWithLabelProps {
    children?: React.ReactNode;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ children }) => {
    return (
        <div className="InputWithLabel">
            {children}
        </div>
    );
};

export default InputWithLabel;
