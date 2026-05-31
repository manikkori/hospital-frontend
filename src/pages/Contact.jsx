import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Connect to your Node.js Backend
      const response = await axios.post('https://hospital-backend-ttza.onrender.com/api/inquiries', formData);
      if (response.data.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', subject: '', message: '' });
        
        // Reset success message after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="w-full min-h-screen pt-10 pb-20 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
        <span className="text-hospital-teal font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">
          Get In Touch
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          Contact City Hospital
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-hospital-light dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-hospital-teal">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Our Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      Main Healthcare Road, Medical District<br />
                      Hapur, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-hospital-light dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-hospital-teal">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Phone Number</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Emergency: 108</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Reception: +91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-hospital-light dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-hospital-teal">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Email Address</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">info@cityhospital.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embedded */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-64 md:h-80 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111956.12461971483!2d77.70295115!3d28.729904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c66db9957c8bf%3A0x6de9de8a3b5b6300!2sHapur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Map"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm h-fit">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send Us A Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-colors"
                  placeholder="+91 __________"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-colors resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-hospital-blue hover:bg-blue-800 dark:bg-hospital-teal dark:hover:bg-teal-600 text-white font-bold py-3.5 px-4 rounded-lg transition-all disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium rounded-lg text-center border border-emerald-200 dark:border-emerald-800">
                  Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="p-3 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-sm font-medium rounded-lg text-center border border-rose-200 dark:border-rose-800">
                  Failed to send message. Is your backend running?
                </div>
              )}
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;