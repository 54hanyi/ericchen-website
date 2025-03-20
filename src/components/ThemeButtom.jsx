import React from 'react'


function ThemeButtom({ theme, toggleTheme }) {
    
    return (
        <>
            <div className="theme-btn" onClick={toggleTheme}>
                <img src={theme === 'light' ? `${import.meta.env.BASE_URL}images/light.png` : `${import.meta.env.BASE_URL}images/dark.png`} alt="Theme" />
            </div>
        </>
  )
}

export default ThemeButtom