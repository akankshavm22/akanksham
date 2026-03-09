import { Mail, MapPin, Phone, Send, Github, Linkedin, ExternalLink, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-mono text-cyan-400 mb-4">
            &lt;Contact Me /&gt;
          </h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg">Let's discuss cybersecurity, research, or collaboration opportunities</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-mono text-cyan-400 mb-6">Get in Touch</h2>
              <p className="text-slate-300 mb-8">
                I'm always open to discussing cybersecurity projects, research collaborations, mentorship opportunities, or potential career opportunities in defensive security.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-mono text-sm mb-1">Location</h3>
                    <p className="text-slate-400 text-sm">Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-mono text-sm mb-1">Email</h3>
                    <a
                      href="mailto:akankshavm22@gmail.com"
                      className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                    >
                      akankshavm22@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-mono text-sm mb-1">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-mono text-sm mb-1">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/akankshavmane/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors inline-flex items-center gap-1"
                    >
                      linkedin.com/in/akankshavmane
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Github className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-mono text-sm mb-1">GitHub</h3>
                    <a
                      href="https://github.com/akankshavm22"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors inline-flex items-center gap-1"
                    >
                      github.com/akankshavm22
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900 border border-cyan-500/20 rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NzI5OTEyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cybersecurity Workspace"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-mono text-cyan-400">Send a Message</h2>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-mono text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-cyan-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-md text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-cyan-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-md text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-mono text-cyan-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-md text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-mono text-cyan-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-md text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-cyan-500 text-slate-950 rounded-md font-mono hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-slate-900 border border-cyan-500/20 rounded-lg p-6"
            >
              <h3 className="text-lg font-mono text-cyan-400 mb-4">Areas of Interest</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Cybersecurity Projects',
                  'Research Collaboration',
                  'Mentorship',
                  'Career Opportunities',
                  'Security Consulting',
                  'Technical Writing',
                ].map((interest, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">{interest}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
