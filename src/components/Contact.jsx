import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-background rounded-3xl overflow-hidden shadow-lg border border-primary/10 grid grid-cols-1 lg:grid-cols-2">
          
          {/* Info Side */}
          <div className="p-12 md:p-16 bg-primary text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/80 mb-12">We'd love to hear from you. Our friendly team is always here to chat.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Location</h4>
                  <p className="text-white/80">123 Health Ave, Medical District<br/>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Phone</h4>
                  <p className="text-white/80">(555) 123-4567<br/>Emergency: (555) 999-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Hours</h4>
                  <p className="text-white/80">Mon-Fri: 8am - 8pm<br/>Sat: 9am - 4pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:p-16 bg-card">
            <h3 className="text-2xl font-bold text-text mb-8">Request an Appointment</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text/70 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-background text-text" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text/70 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-background text-text" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text/70 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-background text-text" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text/70 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-background text-text">
                  <option>General Checkup</option>
                  <option>Teeth Whitening</option>
                  <option>Consultation</option>
                  <option>Emergency</option>
                </select>
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-lg mt-4">Send Request</button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
