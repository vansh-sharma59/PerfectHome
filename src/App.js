import Contact from './pages/Contact';
import Home from './pages/Home'
import Apartments from './pages/Apartments';
import Information from './pages/Information';
import { Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apartments" element={<Apartments />} />
      <Route path="/information/:id" element={<Information />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
