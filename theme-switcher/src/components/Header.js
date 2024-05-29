import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'react-feather';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="p-4 flex justify-between items-center bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
            <h1 className="text-lg font-semibold">Theme Switcher - HA29-05-2024</h1>
            <button
                onClick={toggleTheme}
                className="flex items-center p-2 rounded-full bg-yellow-400 dark:bg-gray-600 hover:bg-yellow-500 dark:hover:bg-gray-700"
            >
                {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
                <span className="ml-2">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
        </header>
    );
};

export default Header;
