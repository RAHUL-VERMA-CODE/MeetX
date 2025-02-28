import { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Card from './components/card.jsx';
import SignUpPage from './components/signUpPage.jsx';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/card');
    }
  }, [navigate, location.pathname]);

  return (
    <Routes>
      <Route path='/card' element={<Card />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  );
}

export default App;



