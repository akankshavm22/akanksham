import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Send, Copy, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_dfbw97d';
const EMAILJS_TEMPLATE_ID = 'template_8obu6o1';
const EMAILJS_PUBLIC_KEY = '0P5U2yBi52e9du3d7';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'akankshavm22@gmail.com', // Your email address
        reply_to: formData.email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast('Message sent successfully! I\'ll get back to you within 24 hours.', {
          duration: 5000,
          description: 'Thank you for reaching out. Your message has been delivered.'
        });
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Fallback: Create mailto link
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Akanksha Mane's Portfolio Contact Form
      `.trim();
      
      const mailtoLink = `mailto:akankshavm22@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
      
      toast('Unable to send message automatically. Please try alternative method:', {
        duration: 8000,
        action: {
          label: 'Open Email Client',
          onClick: () => window.open(mailtoLink, '_blank')
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
      toast(`${type === 'email' ? 'Email' : 'Phone'} copied to clipboard!`);
    } catch (err) {
      toast('Failed to copy to clipboard');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'akankshavm22@gmail.com',
      href: 'mailto:akankshavm22@gmail.com',
      copyable: true,
      copied: copiedEmail,
      onCopy: () => copyToClipboard('akankshavm22@gmail.com', 'email')
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/akankshavm22',
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/akankshavmane/',
      color: 'hover:text-blue-600'
    },
    {
      icon: FileText,
      label: 'Medium',
      href: 'https://medium.com/@akankshavm22',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities in cybersecurity, collaboration, or innovative projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Send className="w-6 h-6 mr-3 text-cyan-500" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`transition-all duration-200 focus:ring-2 focus:ring-cyan-500 ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : ''
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`transition-all duration-200 focus:ring-2 focus:ring-cyan-500 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : ''
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md bg-background text-foreground transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none ${
                      errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-input'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="internship">Internship Inquiry</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="cybersecurity">Cybersecurity Discussion</option>
                    <option value="research">Research Partnership</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={1000}
                    className={`transition-all duration-200 focus:ring-2 focus:ring-cyan-500 ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : ''
                    }`}
                  />
                  <div className="flex justify-between items-center">
                    {errors.message && (
                      <div className="flex items-center text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </div>
                    )}
                    <div className={`text-xs ml-auto ${
                      formData.message.length > 900 
                        ? 'text-orange-500' 
                        : formData.message.length > 950 
                        ? 'text-red-500' 
                        : 'text-muted-foreground'
                    }`}>
                      {formData.message.length}/1000 characters
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending via EmailJS...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                {/* EmailJS Status Indicator */}
                <div className="mt-2 text-center">
                  <p className="text-xs text-muted-foreground">
                    Powered by EmailJS • Messages delivered instantly
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <a
                          href={contact.href}
                          className="text-muted-foreground hover:text-cyan-500 transition-colors duration-200"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                    {contact.copyable && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={contact.onCopy}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        {contact.copied ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Connect with Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center space-x-2 p-4 rounded-lg border hover:shadow-md transition-all duration-300 transform hover:scale-105 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{social.label}</span>
                    </a>
                  ))}
                </div>
                

              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
}