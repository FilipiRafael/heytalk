// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';

export function AppRoutes() {

  // const [user, setUser] = useState('');
  // const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} /> 
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  )

};
