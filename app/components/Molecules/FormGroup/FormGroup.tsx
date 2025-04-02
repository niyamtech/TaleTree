import React from 'react';
import './FormGroup.css';  # Import the component-specific Tailwind CSS styles

interface FormGroupProps {
    children?: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ children }) => {
    return (
        <div className="FormGroup">
            {children}
        </div>
    );
};

export default FormGroup;
