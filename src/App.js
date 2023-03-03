import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

import './stylesheet/header-footer.css';
import './stylesheet/home.css';
import './stylesheet/projects-courses.css';
import './stylesheet/carousal.css';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 500,
});

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='courses' element={<Courses />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
