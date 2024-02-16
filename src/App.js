import Contact from './pages/Contact';
import Home from './pages/Home'
import Apartments from './pages/Apartments';
import Information from './pages/Information';
import { Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apartments" element={<Apartments />} />
      <Route path="/information/:id" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
