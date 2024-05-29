import React from 'react';

const Main = () => {
  return (
    <main className="flex-1 p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <p className="text-lg">
        Welcome to My App!
         Toggle the theme using dark/light switcher in the header.
      </p>
      <img src={`${process.env.PUBLIC_URL}/switcher.png`} alt="swicher" className="max-w-4xl mx-auto h-auto object-cover mt-8" />

    </main>
  );
};

export default Main;
