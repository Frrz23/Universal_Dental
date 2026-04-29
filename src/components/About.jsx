import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-card">
            <img src="/images/patient.png" alt="Happy patient" className="w-full h-[600px] object-cover" />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-xl border border-primary/10 max-w-xs">
            <p className="text-primary font-bold text-4xl mb-1">15+</p>
            <p className="text-text/80 font-medium">Years of creating beautiful smiles</p>
          </div>
        </motion.div>

        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-text leading-tight">
            We're changing the way you feel about the dentist.
          </h2>
          <p className="text-lg text-text/70 leading-relaxed">
            Universal Dental was founded on a simple principle: dentistry shouldn't be scary. We've built our entire clinic around your comfort, using the latest technology to ensure painless treatments and stunning results.
          </p>
          
          <ul className="space-y-4 pt-4">
            {['State-of-the-art 3D imaging', 'Anxiety-free sedation options', 'Transparent pricing & payment plans', 'Eco-friendly clinic practices'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-text/80 font-medium">
                <CheckCircle2 className="text-cta w-6 h-6 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          
          <div className="pt-6">
            <button className="btn-secondary bg-white/50 px-8 py-4 text-lg">Meet Our Doctors</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
