import Home from './Home';
import '../css/App.css';
import {Route, Routes} from 'react-router-dom';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Blogs from './Blogs';




function App() {
  return (
    <div className='main'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
