// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

export function AppRoutes() {

  // const [user, setUser] = useState('');
  // const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <Router>
      <Routes>
        {true ? (
          <Route path='/home' element={<Home />} />
        ) : (
          <>
            {/* <Route path='/' element={<SignIn />} setUser={setUser} setIsAuth={setIsAuth} />
            <Route path='/signup' element={<SignUp />} setUser={setUser} setIsAuth={setIsAuth} /> */}
          </>
        )}
      </Routes>
    </Router>
  )

};
