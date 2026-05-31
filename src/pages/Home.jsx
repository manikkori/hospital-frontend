import { ArrowRight, Calendar, Activity, ShieldPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] overflow-hidden bg-white dark:bg-slate-950">
      
      <section className="relative w-full flex-1 flex items-center py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Content - Bigger and better aligned for mobile */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-hospital-light dark:bg-slate-900 text-hospital-teal text-xs md:text-sm font-semibold border border-hospital-teal/20 mx-auto lg:mx-0 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-hospital-teal animate-pulse"></span>
                24/7 Advanced Emergency Care
              </div>
              
              <h1 className="text-[42px] leading-[1.15] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Modern Healthcare,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hospital-blue to-hospital-teal mt-2 inline-block pb-1">
                  Compassionate Healing
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
                City Hospital provides world-class medical facilities with next-generation technology and expert specialists, ensuring your health is in the safest hands.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
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

            {/* Image Grid - NOW VISIBLE ON MOBILE */}
            <div className="relative mt-8 lg:mt-0 block">
              <div className="absolute inset-0 bg-gradient-to-tr from-hospital-teal/20 to-hospital-blue/20 rounded-2xl blur-3xl opacity-50 dark:opacity-20"></div>
              <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-4 md:p-6 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="h-28 md:h-40 bg-hospital-light dark:bg-slate-800 rounded-xl p-4 md:p-5 flex flex-col justify-end border border-slate-100 dark:border-slate-700 shadow-sm">
                      <Activity className="w-6 h-6 md:w-8 md:h-8 text-hospital-teal mb-2" />
                      <div className="font-bold text-sm md:text-base dark:text-white">ICU Setup</div>
                    </div>
                    <div className="h-36 md:h-48 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 relative group shadow-sm">
                      <img 
                        src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800" 
                        alt="Hospital Building" 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                    <div className="h-36 md:h-48 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 relative group shadow-sm">
                       <img 
                        src="https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=800" 
                        alt="Surgery Team" 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="h-28 md:h-40 bg-hospital-blue dark:bg-hospital-teal text-white rounded-xl p-4 md:p-5 flex flex-col justify-end shadow-inner">
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