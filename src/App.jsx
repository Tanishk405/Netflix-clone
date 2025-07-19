import React, { useEffect } from 'react'
import Home from "./pages/Home/Home"
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import LandingPage from "./pages/LandingPage/Landing"
import Login from "./pages/Login/Login"
import Player from "./pages/Player/Player"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { Helmet, HelmetProvider } from 'react-helmet-async';  // Changed from react-helmet






// ... existing imports ...

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const currentPath = location.pathname;

      if (user) {
        if (currentPath === '/login' || currentPath === '/beforepage') {
          navigate('/');
        }
      } else {
        if (currentPath === '/') {
          navigate('/beforepage');
        }
      }
    });

    return () => unsubscribe();
  }, [navigate, location.pathname]);

  const handleSearch = (result) => {
    navigate(`/player/movie/${result.id}`);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='App'>
        <Routes>
          {/* <Route path='/' element={<Home onSearch={handleSearch} />} />
          <Route path='/login' element={<Login />} />
          <Route path='beforepage' element={<LandingPage />} />
          <Route path='/player/:id' element={<Player />} /> */}

            <Route path='/' element={<Home onSearch={handleSearch} />} />
            <Route path='/login' element={<Login />} />
            <Route path='beforepage' element={<LandingPage />} />
            <Route path='/player/:type/:id' element={<Player />} />

        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;













// function App() {

//   const navigate = useNavigate();

//   useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//     const currentPath = window.location.pathname;

//     if (user) {
//       // If logged in, redirect away from landing/login to home
//       if (currentPath === '/login' || currentPath === '/beforepage') {
//         navigate('/');
//       }
//     } else {
//       // If not logged in and currently at `/`, go to landing
//       if (currentPath === '/') {
//         navigate('/beforepage');
//       }
//     }
//   });

//   return () => unsubscribe();
// }, [navigate]);




//   return (
//       <HelmetProvider>
//       <Helmet>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Helmet>
//       {/* Your app content */}

//     <div className='App'>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/login' element={<Login/>} />
//         <Route path='beforepage' element={<LandingPage/>} />
//         <Route path='/player/:id' element={<Player/>} />
//       </Routes>

//     </div>
//     </HelmetProvider>
//   )
// }

// export default App