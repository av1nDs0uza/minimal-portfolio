import React from 'react';

function Footer() {
  return (
    <div className="py-5 text-center bg-gray-100 border-t-4 border-black shadow-neu-brutal">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="https://twitter.com/ItsAvinDsouza"
              className="p-3 bg-yellow-300 border-2 border-black text-black font-semibold inline-flex items-center rounded-md shadow-neu-brutal hover:bg-yellow-400 transition">
              <svg
                className="w-6 h-6 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/avindsouza/"
              className="p-3 bg-blue-300 border-2 border-black text-black font-semibold inline-flex items-center rounded-md shadow-neu-brutal hover:bg-blue-400 transition">
              <svg
                className="w-6 h-6 fill-current"
                role="img"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M218.123122,218.127392 L180.191928,218.127392 ... 237.033403,0.000790807055" />
                </g>
              </svg>
            </a>
            <a 
              href="https://github.com/av1nDs0uza"
              className="p-3 bg-pink-300 border-2 border-black text-black font-semibold inline-flex items-center rounded-md shadow-neu-brutal hover:bg-pink-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="w-6"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 ... A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2 font-bold text-black opacity-80 border-2 border-black p-2 bg-gray-50 inline-block shadow-neu-brutal">
        &copy; {new Date().getFullYear()} Avin Dsouza. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
