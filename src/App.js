
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route,  } from 'react-router-dom';
import Service from './pages/Service';
import SuccessPage from './pages/Success';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/about'element={<About/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path='/services'element={<Service/>}/>
          <Route path='/success'element={<SuccessPage/>}/>
          <Route path='/portfolio'element={<Portfolio/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
