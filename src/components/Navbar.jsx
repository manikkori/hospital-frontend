import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoonStar, Sun, Phone, Menu, X, Activity, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDark = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-hospital-light dark:bg-slate-900 p-2 rounded-lg transition-transform duration-300">
              <Activity className="h-6 w-6 md:h-7 md:w-7 text-hospital-teal" />
            </div>
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-slate-900 dark:text-white">
              City<span className="text-hospital-teal font-light">Hospital</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.path 
                  ? 'text-hospital-teal' 
                  : 'text-slate-600 hover:text-hospital-teal dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            {/* Admin Login Button */}
            <Link 
              to="/admin" 
              className="p-2 rounded-md border border-transparent hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-400 hover:text-hospital-teal transition-all"
              title="Staff Login"
            >
              <ShieldCheck className="w-5 h-5" />
            </Link>

            <button 
              onClick={toggleDark} 
              className="p-2 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-hospital-teal dark:hover:text-hospital-teal transition-all"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <MoonStar className="w-5 h-5" />}
            </button>
            
            <a href="tel:108" className="flex items-center gap-3 bg-hospital-blue hover:bg-blue-800 dark:bg-hospital-teal dark:hover:bg-teal-600 text-white px-5 py-2.5 rounded-lg transition-all shadow-sm">
              <Phone className="w-4 h-4 animate-pulse" />
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider font-medium opacity-80 leading-none">Emergency</span>
                <span className="text-sm font-bold leading-tight">108</span>
              </div>
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-3">
             <button onClick={toggleDark} className="p-2 text-slate-600 dark:text-slate-300">
              {isDark ? <Sun className="w-5 h-5" /> : <MoonStar className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-900 dark:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="px-4 py-4 space-y-2 flex flex-col max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`px-4 py-3 rounded-md text-base font-semibold ${
                  location.pathname === link.path
                  ? 'bg-hospital-light dark:bg-slate-900 text-hospital-teal'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Admin Link for Mobile Menu */}
            <Link 
              to="/admin" 
              className="px-4 py-3 rounded-md text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 flex items-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" />
              Staff Login
            </Link>

            <a href="tel:108" className="mt-4 flex items-center justify-center gap-2 w-full bg-hospital-blue dark:bg-hospital-teal text-white px-4 py-3 rounded-md font-bold text-center">
              <Phone className="w-4 h-4" /> Call Emergency: 108
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;