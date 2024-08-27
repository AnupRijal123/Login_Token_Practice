import './styles/App.css';
import Homepage from './pages/Homepage.js';
import Loginpage from './pages/Loginpage.js';
import Registerpage from './pages/Registerpage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(false);

  //checking token in localStorage again and again to see token present or not 
  setInterval(() => {
    let token = localStorage.getItem('token');
    if (token !== null) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, 1000);

  return (
    <BrowserRouter>
      <div className="main-container">
        <Routes>
          {
            user === false ?
              (<Route path="/" element={<Loginpage />} />) :
              (<Route path="/" element={<Homepage />} />)
          }
          {
            user === false &&
            <Route path="/register" element={<Registerpage />} />

          }

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
