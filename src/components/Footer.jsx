const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side - Copyright */}
        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} City Hospital. All rights reserved.
        </div>
        
        {/* Right Side - Developer Credit Button */}
        <a 
          href="https://manik-eta.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 transition-all hover:shadow-sm"
        >
          Developed by Manik Kori
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;