import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { useContext } from 'react';
import AuthContext from './contexts/AuthContext';
import Contact from './pages/Contact'


function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <div className='h-screen flex flex-col'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/dashboard' element={user?(<Dashboard/>):(<NotFound/>)}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
