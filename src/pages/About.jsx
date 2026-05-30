import { CheckCircle2, Users, Building, ShieldCheck, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { id: 1, label: 'Years of Excellence', value: '25+', icon: Award },
    { id: 2, label: 'Expert Doctors', value: '150+', icon: Users },
    { id: 3, label: 'Hospital Beds', value: '500+', icon: Building },
    { id: 4, label: 'Successful Surgeries', value: '10k+', icon: ShieldCheck },
  ];

  return (
    <div className="w-full min-h-screen pt-10 pb-20 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
        <span className="text-hospital-teal font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">
          Know About Us
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          Committed To Your Health & Happiness
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-hospital-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            {/* Image link updated here */}
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop" 
              alt="Medical Team" 
              className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
              Providing World-Class Healthcare Services Since 1998
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              City Hospital is a multi-specialty tertiary care hospital bringing together the most advanced medical technology and expert doctors. Our mission is to provide compassionate, high-quality, and affordable healthcare to everyone.
            </p>
            
            <div className="space-y-4 pt-4">
              {['24/7 Emergency & Trauma Care', 'Advanced ICU & CCU Facilities', 'Highly Experienced Medical Professionals', 'State-of-the-art Laboratory & Pharmacy'].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-hospital-teal flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-hospital-light dark:bg-slate-800 text-hospital-teal mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;