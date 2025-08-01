
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/home/home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
function App() {
    const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
