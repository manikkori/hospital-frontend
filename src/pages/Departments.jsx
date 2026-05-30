import { HeartPulse, Brain, Bone, Baby, Eye, Stethoscope, ArrowRight } from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      id: 1,
      title: 'Cardiology',
      desc: 'Advanced heart care, angioplasty, and cardiac surgeries with 24/7 monitoring.',
      icon: HeartPulse,
      color: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-50 dark:bg-rose-900/20'
    },
    {
      id: 2,
      title: 'Neurology',
      desc: 'Expert treatment for brain, spinal cord, and nervous system disorders.',
      icon: Brain,
      color: 'text-violet-600 dark:text-violet-400',
      bg: 'bg-violet-50 dark:bg-violet-900/20'
    },
    {
      id: 3,
      title: 'Orthopedics',
      desc: 'Comprehensive care for bones, joints, ligaments, and sports injuries.',
      icon: Bone,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-900/20'
    },
    {
      id: 4,
      title: 'Pediatrics',
      desc: 'Specialized healthcare for infants, children, and adolescents.',
      icon: Baby,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    {
      id: 5,
      title: 'Ophthalmology',
      desc: 'State-of-the-art eye care, cataract surgery, and laser vision correction.',
      icon: Eye,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 6,
      title: 'General Surgery',
      desc: 'Minimally invasive and laparoscopic surgical procedures by top surgeons.',
      icon: Stethoscope,
      color: 'text-hospital-teal dark:text-hospital-teal',
      bg: 'bg-teal-50 dark:bg-teal-900/20'
    }
  ];

  return (
    <div className="w-full min-h-screen pt-10 pb-20 md:pt-16 md:pb-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
        <span className="text-hospital-teal font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">
          Centers of Excellence
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 md:mb-6">
          Our Departments
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-lg px-2">
          We bring together world-class specialists and cutting-edge technology to provide comprehensive healthcare across all major medical disciplines.
        </p>
      </div>

      {/* Grid Layout - Mobile Responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div 
                key={dept.id} 
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 hover:border-hospital-teal/50 dark:hover:border-hospital-teal/50 transition-colors shadow-sm hover:shadow-md"
              >
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-5 md:mb-6 ${dept.bg}`}>
                  <Icon className={`w-7 h-7 md:w-8 md:h-8 ${dept.color}`} />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
                  {dept.title}
                </h3>
                
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                  {dept.desc}
                </p>

                {/* Bottom Link */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-hospital-teal transition-colors">
                    Learn more
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-hospital-teal transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Departments;