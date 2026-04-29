import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Shield, Sparkles, Activity, Clock, Heart } from 'lucide-react';

const services = [
  { icon: <Smile />, title: 'Cosmetic Dentistry', desc: 'Veneers, whitening, and smile makeovers.' },
  { icon: <Shield />, title: 'General Dentistry', desc: 'Routine checkups, cleanings, and fillings.' },
  { icon: <Sparkles />, title: 'Teeth Whitening', desc: 'Professional laser whitening in one hour.' },
  { icon: <Activity />, title: 'Orthodontics', desc: 'Clear aligners and traditional braces.' },
  { icon: <Heart />, title: 'Pediatric Care', desc: 'Gentle, fun dental care for children.' },
  { icon: <Clock />, title: 'Emergency Care', desc: '24/7 support for dental emergencies.' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">Comprehensive Care</h2>
          <p className="text-lg text-text/70">From routine cleanings to advanced cosmetic procedures, we offer everything you need for a healthy smile under one roof.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="group p-8 rounded-2xl bg-background border border-primary/5 hover:bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-card rounded-xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {React.cloneElement(svc.icon, { className: 'w-7 h-7' })}
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{svc.title}</h3>
              <p className="text-text/70 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
