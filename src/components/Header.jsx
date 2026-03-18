import React from 'react';

export default function Header({ theme, toggleTheme }) {
    return (
        <header className="app-header">
            <div className="header-content">
                <h1>StudySpace IIT INDORE</h1>
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </div>
        </header>
    );
}
