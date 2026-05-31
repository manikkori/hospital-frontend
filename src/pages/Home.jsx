import { ArrowRight, Calendar, Activity, ShieldPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] overflow-hidden bg-white dark:bg-slate-950">
      
      {/* Hero Section - Updated for Mobile Full Screen */}
      <section className="relative w-full flex-1 flex items-center justify-center py-12 md:py-20 min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-hospital-light dark:bg-slate-900 text-hospital-teal text-xs md:text-sm font-semibold border border-hospital-teal/20 mx-auto lg:mx-0">
                <span className="flex h-2 w-2 rounded-full bg-hospital-teal animate-pulse"></span>
                24/7 Advanced Emergency Care
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Modern Healthcare,<br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hospital-blue to-hospital-teal mt-2 inline-block">
                  Compassionate Healing
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
                City Hospital provides world-class medical facilities with next-generation technology and expert specialists, ensuring your health is in the safest hands.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link to="/contact" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-hospital-blue hover:bg-blue-800 dark:bg-hospital-teal dark:hover:bg-teal-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <Link to="/departments" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white dark:bg-slate-900 text-hospital-blue dark:text-white border border-slate-200 dark:border-slate-800 px-6 md:px-8 py-3.5 md:py-4 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  Explore Departments
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Image Grid */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-hospital-teal/10 to-hospital-blue/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-32 md:h-40 bg-hospital-light dark:bg-slate-800 rounded-lg p-5 flex flex-col justify-end border border-slate-100 dark:border-slate-700">
                      <Activity className="w-6 h-6 md:w-8 md:h-8 text-hospital-teal mb-2" />
                      <div className="font-bold text-sm md:text-base dark:text-white">ICU Setup</div>
                    </div>
                    {/* Stable Pexels Image 1 */}
                    <div className="h-40 md:h-48 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800 relative group">
                      <img 
                        src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800" 
                        alt="Hospital Building" 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    {/* Stable Pexels Image 2 */}
                    <div className="h-40 md:h-48 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800 relative group">
                       <img 
                        src="https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=800" 
                        alt="Surgery Team" 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="h-32 md:h-40 bg-hospital-blue text-white rounded-lg p-5 flex flex-col justify-end shadow-inner">
                      <ShieldPlus className="w-6 h-6 md:w-8 md:h-8 mb-2 opacity-90" />
                      <div className="font-bold text-sm md:text-base">Expert Doctors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;