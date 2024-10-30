import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-1 md:mb-3 bg-pink-200 text-black border-4 border-black p-2">
                Avin Dsouza
            </h1>
            <p className="text-lg md:text-2xl mb-3 font-semibold text-black bg-yellow-300 border-2 border-black p-1">
                Software Engineer
            </p>
            <p className="text-md max-w-xl font-bold text-gray-800 bg-blue-100 border-2 border-black p-3 shadow-lg">
                I'm an aspiring software engineer with a strong interest in cybersecurity. All coding projects
                are built from the ground up, from planning and designing all the way
                to solving real-life problems with code.
            </p>
        </div>
    );
}

export default Intro;
