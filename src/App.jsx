import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Test imports for navigation components
import Navbar from './components/Navbar'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Breadcrumbs from './components/Breadcrumbs'
import MegaMenu from './components/MegaMenu'
import HamburgerMenu from './components/HamburgerMenu'
import Drawer from './components/Drawer'
import Scrollspy from './components/Scrollspy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      {/* Test components */}
      <div style={{ margin: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h2>Navigation Components Test</h2>
        <p>All navigation components imported successfully!</p>
        <p>Components available:</p>
        <ul>
          <li>Navbar: {typeof Navbar}</li>
          <li>Header: {typeof Header}</li>
          <li>Sidebar: {typeof Sidebar}</li>
          <li>Breadcrumbs: {typeof Breadcrumbs}</li>
          <li>MegaMenu: {typeof MegaMenu}</li>
          <li>HamburgerMenu: {typeof HamburgerMenu}</li>
          <li>Drawer: {typeof Drawer}</li>
          <li>Scrollspy: {typeof Scrollspy}</li>
        </ul>
      </div>
    </>
  )
}

export default App
