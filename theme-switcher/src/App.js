import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import './index.css';

function ThemedApp() {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
