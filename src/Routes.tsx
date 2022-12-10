// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';

export function AppRoutes() {

  // const [user, setUser] = useState('');
  // const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} /> 
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  )

};
