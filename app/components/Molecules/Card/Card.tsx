import React from 'react';
import './Card.css';  # Import the component-specific Tailwind CSS styles

interface CardProps {
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="Card">
            {children}
        </div>
    );
};

export default Card;
