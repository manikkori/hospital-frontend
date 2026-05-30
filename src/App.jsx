import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Departments from './pages/Departments'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Doctors from './pages/Doctors';
import Gallery from './pages/Gallery';
import Treatments from './pages/Treatments';
import AdminLogin from './pages/AdminLogin';
import Footer from './components/Footer';
// Baaki pages ke dummy placeholders 
// const Treatments = () => <div className="p-10 text-2xl text-center font-bold mt-20 text-slate-500">Treatments Page Coming Soon...</div>;
// const Doctors = () => <div className="p-10 text-2xl text-center font-bold mt-20 text-slate-500">Doctor's Panel Coming Soon...</div>;
// const Gallery = () => <div className="p-10 text-2xl text-center font-bold mt-20 text-slate-500">Gallery Coming Soon...</div>;
// const Contact = () => <div className="p-10 text-2xl text-center font-bold mt-20 text-slate-500">Contact Us Coming Soon...</div>;
// const Admin = () => <div className="p-10 text-2xl text-center font-bold mt-20 text-slate-500">Admin Dashboard Coming Soon...</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-[calc(100vh-80px)] bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
      
        </Routes>
        
      </main>
      <Footer />
    </Router>
  );
}

export default App;