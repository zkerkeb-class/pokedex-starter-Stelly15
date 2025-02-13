import React from 'react'
import reactLogo from '../../assets/react.svg'
const Header = () => {
    return(
        <div>
            <p>header</p>
            <a href="https://vite.dev" target="_blank">
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
    )
        
    
}

export default Header;