import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.map((project, index) => (
                    <PortfolioItem 
                        key={index}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                        className="bg-gray-100 border-4 border-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
