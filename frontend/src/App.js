// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Community from './pages/Community';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
// import RecentPosts from './pages/RecentPosts';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { useState } from 'react';


function App() {
  const [isLoggedin,setIsLoggedIn]=useState(false);

  return (
    <div className="App">
      <Navbar isLoggedin={isLoggedin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/dashboard' element={isLoggedin?(<Dashboard/>):(<NotFound/>)} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        {/* <Route path='/recentposts' element={<RecentPosts/>} /> */}
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
