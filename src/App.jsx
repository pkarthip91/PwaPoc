import React from 'react'
import logo from './maybank-logo.png';
import './App.css';
import PWAInstallerPrompt from 'react-pwa-installer-prompt';



function App() {

  
  
  return (
      <div className="App bg-main">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
          <p>
           Maybank Digital Innovation
          </p>
         
          <PWAInstallerPrompt 
      render={({ onClick }) => (
        <button type="button" onClick={onClick}>
          Install
        </button>
      )}
      callback={(data) => console.log(data)} 
    />

        </header>
      </div>
  )
}

export default App
