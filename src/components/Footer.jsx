import React from 'react';
import { Stethoscope } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#164E63] dark:bg-slate-950 text-white/80 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Stethoscope className="w-6 h-6 text-secondary" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Universal</span>
          </div>
          <p className="text-sm leading-relaxed">
            Setting the standard for excellence in modern dentistry. Your smile is our top priority.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About Us', 'Services', 'Patient Info', 'Contact'].map(link => (
              <li key={link}><a href="#" className="hover:text-secondary transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
          <ul className="space-y-4">
            {['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Pediatric Care', 'Implants'].map(link => (
              <li key={link}><a href="#" className="hover:text-secondary transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Subscribe for tips on maintaining a healthy smile.</p>
          <div className="flex">
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full bg-white/10 border border-white/20 outline-none focus:border-secondary text-white" />
            <button className="bg-primary hover:bg-primary/90 px-4 rounded-r-lg font-semibold text-white transition-colors">Go</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 text-sm text-center text-white/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Universal Dental. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
