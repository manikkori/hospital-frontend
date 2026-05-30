import { HeartPulse, Brain, Bone, Baby, Eye, Stethoscope, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Treatments = () => {
  const treatmentCategories = [
    {
      id: 1,
      category: "Cardiac Treatments",
      icon: HeartPulse,
      color: "text-rose-600 dark:text-rose-400",
      bg: "bg-rose-50 dark:bg-rose-900/20",
      treatments: [
        "Angioplasty & Stenting",
        "Coronary Artery Bypass Grafting (CABG)",
        "Pacemaker Implantation",
        "Heart Valve Repair & Replacement",
        "Echocardiography (ECG)"
      ]
    },
    {
      id: 2,
      category: "Neurological Procedures",
      icon: Brain,
      color: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-violet-900/20",
      treatments: [
        "Brain Tumor Surgery",
        "Spinal Cord Stimulation",
        "Epilepsy Treatment",
        "Stroke Management",
        "Deep Brain Stimulation (DBS)"
      ]
    },
    {
      id: 3,
      category: "Orthopedic Surgeries",
      icon: Bone,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      treatments: [
        "Total Knee Replacement",
        "Hip Replacement Surgery",
        "Arthroscopic Surgery",
        "Fracture Fixation",
        "Spine Fusion Surgery"
      ]
    },
    {
      id: 4,
      category: "Pediatric Care",
      icon: Baby,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      treatments: [
        "Neonatal Intensive Care (NICU)",
        "Pediatric Surgery",
        "Vaccination & Immunization",
        "Childhood Asthma Treatment",
        "Growth & Development Assessment"
      ]
    },
    {
      id: 5,
      category: "Eye Care (Ophthalmology)",
      icon: Eye,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      treatments: [
        "Laser Vision Correction (LASIK)",
        "Cataract Surgery",
        "Glaucoma Treatment",
        "Corneal Transplant",
        "Diabetic Retinopathy Care"
      ]
    },
    {
      id: 6,
      category: "General & Laparoscopic",
      icon: Stethoscope,
      color: "text-hospital-teal",
      bg: "bg-teal-50 dark:bg-teal-900/20",
      treatments: [
        "Gallbladder Removal",
        "Hernia Repair",
        "Appendectomy",
        "Thyroid Surgery",
        "Minimally Invasive Surgeries"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen pt-10 pb-20 md:pt-16 md:pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
        <span className="text-hospital-teal font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">
          Medical Services
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          Treatments Offered
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-lg">
          We provide a comprehensive range of medical and surgical treatments using the latest technology and evidence-based protocols.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {treatmentCategories.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col h-full"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {item.category}
                  </h3>
                </div>
                
                {/* Treatments List */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {item.treatments.map((treatment, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-hospital-teal shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm md:text-base group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {treatment}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Footer Link */}
                <div className="mt-auto pt-2">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-hospital-teal hover:text-hospital-blue transition-colors group"
                  >
                    Consult for {item.category.split(' ')[0]} 
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Treatments;