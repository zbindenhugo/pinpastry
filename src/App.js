import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import ContactUs from './pages/Contact/ContactUs';
import Home from './pages/Home/Home';
import Pastries from './pages/Pastries/Pastries';
import Pastry from './pages/Pastries/Pastry';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pastries' element={<Pastries />}>
          <Route path=':id' element={<Pastry />} />
        </Route>
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
