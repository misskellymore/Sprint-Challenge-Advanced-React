import React, {useState} from 'react';
import useDarkMode from './hooks/useDarkMode.js';





const Button = () => {

      
    const { theme, toggleTheme } = useDarkMode()

    return (
    
        <div style={{
            background: theme === 'dark' ? '#000' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
          }}>

<button type="button" onClick={toggleTheme}>
            Dark Mode
        </button>

        </div>
        

    );

};


export default Button;
