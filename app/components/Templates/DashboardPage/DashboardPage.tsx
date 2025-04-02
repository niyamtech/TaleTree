import React from 'react';
import './DashboardPage.css';  # Import the component-specific Tailwind CSS styles

interface DashboardPageProps {
    children?: React.ReactNode;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ children }) => {
    return (
        <div className="DashboardPage">
            {children}
        </div>
    );
};

export default DashboardPage;
