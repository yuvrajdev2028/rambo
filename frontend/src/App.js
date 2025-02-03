import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Community from './pages/Community';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { useContext } from 'react';
import AuthContext from './contexts/AuthContext';


function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/dashboard' element={user?(<Dashboard/>):(<NotFound/>)}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
