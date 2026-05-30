import { Calendar, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Robert Wilson",
      specialty: "Chief Cardiologist",
      degree: "MBBS, MD (Cardiology), FACC",
      experience: "20+ Years",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      name: "Dr. Sarah Jenkins",
      specialty: "Neurologist",
      degree: "MBBS, MD, DM (Neurology)",
      experience: "15+ Years",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      specialty: "Orthopedic Surgeon",
      degree: "MBBS, MS (Ortho)",
      experience: "12+ Years",
      image: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      name: "Dr. Emily Thompson",
      specialty: "Pediatrician",
      degree: "MBBS, MD (Pediatrics)",
      experience: "10+ Years",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      name: "Dr. David Miller",
      specialty: "General Surgeon",
      degree: "MBBS, MS (Surgery), FACS",
      experience: "18+ Years",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      name: "Dr. Anita Patel",
      specialty: "Gynecologist",
      degree: "MBBS, MD (Obs & Gyn)",
      experience: "14+ Years",
      image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="w-full min-h-screen pt-10 pb-20 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
        <span className="text-hospital-teal font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">
          Meet Our Experts
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          Our Doctor's Panel
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-lg">
          Our team of highly qualified and experienced medical professionals is dedicated to providing the best possible healthcare to our patients.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div key={doc.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow group">
              
              <div className="h-64 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-hospital-teal flex items-center gap-1 shadow-sm">
                  <Star className="w-3 h-3 fill-current" /> 5.0
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{doc.name}</h3>
                <p className="text-hospital-teal font-medium text-sm mb-4">{doc.specialty}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Award className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                    <span>{doc.degree}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Experience: {doc.experience}</span>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-hospital-blue dark:bg-slate-800 dark:hover:bg-hospital-teal text-slate-700 hover:text-white dark:text-slate-300 dark:hover:text-white py-3 rounded-xl font-semibold transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;