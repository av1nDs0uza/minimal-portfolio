import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
   return (
      <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-4 border-black dark:border-white rounded-lg overflow-hidden transition-shadow duration-200 hover:shadow-lg"
      >
         <img
            src={imgUrl}
            alt={title} 
            className="w-full h-36 md:h-48 object-cover cursor-pointer border-b-4 border-black dark:border-white"
         />
         <div className="w-full p-4 bg-gray-100 dark:bg-gray-800">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-bold">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
               {stack.map((item, index) => (
                  <span 
                     key={index}
                     className="inline-block px-2 py-1 font-semibold border-2 border-black dark:border-white rounded-md bg-white dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
   );
}

export default PortfolioItem;
