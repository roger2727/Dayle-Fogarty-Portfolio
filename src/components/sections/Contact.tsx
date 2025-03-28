import React, { useState } from 'react';
// import GoodReadsLogo from '../../../public/application.svg'
// import ThreadsLogo from '../../../public/threads.svg'

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Social media links
  const socialLinks = [
    {
      name: 'Instagram',
      icon: (
        <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: 'https://instagram.com/yourhandle'
    },
    {
      name: 'Threads',
      icon: (
        <div className="w-8  h-8 flex items-center justify-center">
        {/* <ThreadsLogo className="w-full h-full" /> */}
      </div>
      ),
      url: 'https://threads.net/yourhandle'
    },
    {
      name: 'Goodreads',
      icon: (
        <div className="w-8  h-8 flex items-center justify-center">
        {/* <GoodReadsLogo className="w-full h-full" /> */}
      </div>
      ),
      url: 'https://goodreads.com/author/show/yourid'
    },
    {
      name: 'Substack',
      icon: (
        <svg role="img" width="21" height="24" viewBox="0 0 21 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg" >
        <g>
            <path d="M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"/>
            <path d="M0 10.8125V24.0004L10.4991 18.1187L21 24.0004V10.8125H0Z"/>
            <path d="M20.9991 0H0V2.83603H20.9991V0Z"/>
        </g>
    </svg>
      ),
      url: 'https://yourname.substack.com'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset submitted state after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-950 text-gray-200 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with matching gradient styling */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-2">Connect With Me</h2>
          <p className="text-lg font-light text-blue-300 italic mb-3">Lets discuss stories and creative possibilities</p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="md:w-2/3 bg-gray-900 bg-opacity-60 p-8 rounded-lg border border-blue-900 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="mb-6 mx-auto w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 mb-4">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out Ill get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-red-900 bg-opacity-50 border border-red-800 text-red-100 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{errorMessage}</span>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-500 rounded-lg px-4 py-3 text-gray-200 focus:outline-none transition duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-500 rounded-lg px-4 py-3 text-gray-200 focus:outline-none transition duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-500 rounded-lg px-4 py-3 text-gray-200 focus:outline-none transition duration-300"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Writing Questions">Writing Questions</option>
                    <option value="Project Updates">Project Updates</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-500 rounded-lg px-4 py-3 text-gray-200 focus:outline-none transition duration-300"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-900/50 hover:shadow-xl flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Info - Keeping original code for this section */}
          <div className="md:w-1/3">
            {/* Connect section styled to match "My Creative Quest" */}
            <div className="mb-8">
              <h3 className="flex items-center text-2xl font-semibold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">Ways to Reach Me</span>
                <span className="ml-3 h-px w-12 bg-indigo-400"></span>
              </h3>
              
              <div className="bg-gray-800 bg-opacity-50 p-5 rounded-lg border-l-2 border-blue-400">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-900 bg-opacity-50 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-indigo-300">✧ Email</p>
                      <a href="mailto:hello@yourname.com" className="text-sm text-gray-300 hover:text-indigo-200 transition-colors duration-300">
                        hello@yourname.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-900 bg-opacity-50 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-purple-300">✧ Newsletter</p>
                      <a href="#" className="text-sm text-gray-300 hover:text-purple-200 transition-colors duration-300">
                        Subscribe to writing updates
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-900 bg-opacity-50 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-300">✧ Writing Community</p>
                      <p className="text-sm text-gray-300">
                        Find me on writing forums and local workshops
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mb-8">
        <h3 className="flex items-center text-2xl font-semibold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">Follow My Journey</span>
          <span className="ml-3 h-px w-12 bg-indigo-400"></span>
        </h3>
        
        <div className="bg-gray-800 bg-opacity-50 p-5 rounded-lg border-l-2 border-blue-400">
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300 text-indigo-300 hover:text-indigo-200"
              >
                <span className="mb-2">{social.icon}</span>
                <span className="text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;