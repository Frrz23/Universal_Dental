import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-20">
        <img src="/images/patient.png" alt="Happy dental patient" className="w-full h-full object-cover opacity-20 md:opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40"></div>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-[60%] bg-secondary/30 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text leading-tight">
            Design Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Perfect Smile</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text/80 max-w-lg leading-relaxed">
            Experience world-class dental care in a luxurious, relaxing environment. We combine modern technology with a gentle touch to give you a confident smile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="btn-primary text-lg py-4 px-8 flex items-center justify-center gap-2 shadow-lg shadow-cta/30">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </button>
            <button className="btn-secondary bg-white/50 backdrop-blur-sm text-lg py-4 px-8 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="/images/clinic.png" alt="Modern Clinic Interior" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-card/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4 transform transition-transform hover:scale-105">
                <div className="text-4xl">⭐</div>
                <div>
                  <p className="font-bold text-text">4.9/5 Average Rating</p>
                  <p className="text-sm text-text/70">From over 2,000 happy patients</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-secondary/50 to-transparent rounded-full blur-xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
