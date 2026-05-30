import { Maximize2 } from 'lucide-react';

const Gallery = () => {
  const images = [
    { 
      id: 1, 
      url: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1200', 
      title: 'Hospital Building Exterior', 
      span: 'md:col-span-2 md:row-span-2' 
    },
    { 
      id: 2, 
      url: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=800', 
      title: 'Advanced OT', 
      span: 'col-span-1 row-span-1' 
    },
    { 
      id: 3, 
      url: 'https://images.pexels.com/photos/1179532/pexels-photo-1179532.jpeg?auto=compress&cs=tinysrgb&w=800', 
      title: 'Waiting Lounge', 
      span: 'col-span-1 row-span-1' 
    },
    { 
      id: 4, 
      url: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1000', 
      title: 'Pathology Lab', 
      span: 'md:col-span-2 row-span-1' 
    },
    { 
      id: 5, 
      url: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=800', 
      title: 'Private Ward', 
      span: 'col-span-1 row-span-2' 
    },
    { 
      id: 6, 
      url: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800', 
      title: 'Medical Team', 
      span: 'col-span-1 row-span-1' 
    },
    { 
      id: 7, 
      url: 'https://images.pexels.com/photos/3279203/pexels-photo-3279203.jpeg?auto=compress&cs=tinysrgb&w=800', 
      title: 'ICU Equipment', 
      span: 'col-span-1 row-span-1' 
    },
    { 
      id: 8, 
      url: 'https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=1000', 
      title: 'Pharmacy', 
      span: 'md:col-span-2 row-span-1' 
    },
    { 
      id: 9, 
      url: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800', 
      title: 'Research Center', 
      span: 'col-span-1 row-span-1' 
    }
  ];

  return (
    <div className="w-full min-h-screen pt-10 pb-20 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
        <span className="text-hospital-teal font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">
          Infrastructure
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          Hospital Gallery
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-lg">
          Take a tour of our state-of-the-art facilities, advanced equipment, and comfortable patient care environments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[240px]">
          {images.map((img) => (
            <div 
              key={img.id} 
              className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 ${img.span}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Maximize2 className="text-white w-6 h-6 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg md:text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;