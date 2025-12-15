// import './App.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar'
import Home from './pages/Home';
import Pizzas from './pages/Pizza';
import Footer from './components/Footer'
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import CartProvider from './CartContext';
import PizzasProvider from './PizzasContext';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [usuarioRegistrado, setUsuarioRegistrado] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);    
    setUsuarioRegistrado(null);
  };

  return (
    <PizzasProvider>
      <CartProvider>
        <div className='conteiner'>
        <div>
          <Navbar1 
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
        </div>        
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/register'
            element={<Register setUsuarioRegistrado={setUsuarioRegistrado} />}
          />
          <Route
            path='/login'
            element={<Login usuarioRegistrado={usuarioRegistrado} onLogin={handleLogin} />}
          />
          <Route
            path='/cart'
            element={<Cart />}
          />
          <Route
            path='/pizza/p001'
            element={<Pizzas/>}
          />
          <Route
            path='/profile'
            element={isLoggedIn && <Profile/>}
          />
          <Route
            path='*'
            element={<NotFound/>}
          />
        </Routes>
        <div>
          <Footer/>
        </div>
      </div>
      </CartProvider>
    </PizzasProvider>
  );
};

export default App;
