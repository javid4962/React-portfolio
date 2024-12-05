import React, { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { fadeIn, fadeInUp, staggerContainer } from '../utils/animations';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_6aadhss', // Replace with your EmailJS service ID
        'template_iggdox4', // Replace with your EmailJS template ID
        formRef.current,
        'hXKQPG9jfycmux4L2' // Replace with your EmailJS public key
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Toaster position="top-right" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 text-gray-600"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-6 h-6 text-blue-500" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-500">
                  {personalInfo.email}
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-600"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-6 h-6 text-blue-500" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-500">
                  {personalInfo.phone}
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-600"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-6 h-6 text-blue-500" />
                <span>{personalInfo.location}</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-600 hover:to-indigo-600'
              }`}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}