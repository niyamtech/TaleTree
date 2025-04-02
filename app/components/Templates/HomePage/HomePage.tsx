import React from 'react';
import './HomePage.css';  # Import the component-specific Tailwind CSS styles

interface HomePageProps {
    children?: React.ReactNode;
}

const HomePage: React.FC<HomePageProps> = ({ children }) => {
    return (
        <div className="HomePage">
            {children}
        </div>
    );
};

export default HomePage;
