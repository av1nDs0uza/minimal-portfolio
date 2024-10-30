import React, { useState } from 'react';
import Title from './Title';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Send form data to Formcarry
    fetch('https://formcarry.com/s/LguVgkrHXB9', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log response from Formcarry
        // Handle response as needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
      });
  }

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-7/12 p-4 border-4 border-black bg-gray-50 dark:bg-gray-800 shadow-[6px_6px_0_#333]">
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            className="p-3 bg-gray-100 dark:bg-gray-700 border-4 border-black focus:outline-none focus:bg-yellow-200 dark:focus:bg-yellow-600 transition-all mb-4 shadow-[4px_4px_0_#333]"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 bg-gray-100 dark:bg-gray-700 border-4 border-black focus:outline-none focus:bg-yellow-200 dark:focus:bg-yellow-600 transition-all mb-4 shadow-[4px_4px_0_#333]"
          />
          <textarea
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Message"
            rows="5"
            className="p-3 bg-gray-100 dark:bg-gray-700 border-4 border-black focus:outline-none focus:bg-yellow-200 dark:focus:bg-yellow-600 transition-all mb-4 shadow-[4px_4px_0_#333]"
          />
          <button
            type="submit"
            className="px-8 py-3 mt-4 font-semibold text-white bg-gradient-to-r from-yellow-400 to-pink-500 border-4 border-black shadow-[6px_6px_0_#333] transform hover:scale-105 transition-transform"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
