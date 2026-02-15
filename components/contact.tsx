'use client';

import React from "react"
import { useState, FormEvent } from 'react';
import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { ref: titleRef, isVisible: titleVisible } = useRevealOnScroll({ threshold: 0.3 });
  const { ref: formRef, isVisible: formVisible } = useRevealOnScroll({ threshold: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.details || 'Failed to send email');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again.');
      console.error('Form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-background py-10 lg:py-10 px-6 md:px-[60px] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -z-10 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          <div
            ref={titleRef as any}
            className={`transition-all duration-1000 ${titleVisible ? 'reveal-left' : 'opacity-0 translate-x-[-50px]'
              }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Contact Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 tracking-tight leading-[1]">
              Let's Build <br />
              Something <span className="text-primary italic">Epic.</span>
            </h2>

            <p className="text-xl text-foreground/85 leading-relaxed max-w-lg mb-12">
              Have a revolutionary idea or a complex problem? I'm ready to help you turn it into reality with cutting-edge tech.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Email', value: 'hello@marzstack.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { label: 'Location', value: 'Remote / Global', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
              ].map((item) => (
                <div key={item.label} className="glass-card p-6 rounded-3xl border border-border/50 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground/70 mb-1">{item.label}</h4>
                  <p className="text-foreground font-bold tracking-tight">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={formRef as any}
            className={`transition-all duration-1000 delay-300 ${formVisible ? 'reveal-right' : 'opacity-0 translate-x-[50px]'
              }`}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-border/50 shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-black uppercase tracking-widest text-foreground/70 px-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/30 border border-border/50 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-foreground/20"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-black uppercase tracking-widest text-foreground/70 px-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/30 border border-border/50 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-foreground/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-black uppercase tracking-widest text-foreground/70 px-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-secondary/30 border border-border/50 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-foreground/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group relative bg-primary text-white  py-5 rounded-2xl  text-lg  hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-primary/20 disabled:opacity-50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      Transmit Message
                      <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              {submitted && (
                <div className="absolute inset-0 bg-primary flex flex-col items-center justify-center text-center p-12 animate-in zoom-in duration-500 z-20">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-6 scale-in-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Message Sent!</h3>
                  <p className="text-white/80 font-medium">Thanks for your message, I will revert as soon as possible.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
