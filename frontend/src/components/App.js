import Home from './Home';
import '../css/App.css';
import {Route,BrowserRouter as Router, Routes} from 'react-router-dom';

import Login from './admin/Login';
import Signup from './admin/Signup';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Blogs from './Blogs';
import Navbar from './Navbar';


const elem = (
  <Router>
      <Navbar />
      <Routes> 
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/admin' element={<Login />} />
      </Routes>
  </Router>
);

const adminElem = (
<Router>
  
  <Routes> 
    <Route path='/admin' element={<Login />} />
    <Route path='/admin/signup' element={<Signup />} />
  </Routes>
</Router> 
);

function App() {

  const path = window.location.pathname;
  console.log(path.includes('/admin'))
  


  return (
    <div className='main'>
      {path.includes('/admin') !== true ? elem : adminElem}
    </div>
  );
}

export default App;
