import React from 'react'


function ThemeButtom({ theme, toggleTheme }) {
    
    return (
        <>
            <div className="theme-btn" onClick={toggleTheme}>
                <img src={theme === 'light' ? "/images/light.png" : "/images/dark.png"} alt="Theme" />
            </div>
        </>
  )
}

export default ThemeButtom