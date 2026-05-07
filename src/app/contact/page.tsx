"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Briefcase, Globe, MapPin, Send } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Let's Connect" 
          subtitle="I'm currently available for full-time roles and exciting freelance projects. Feel free to reach out for a collaboration or just a friendly hello."
        />

        <div className="grid md:grid-cols-2 gap-24">
          {/* Contact Details */}
          <div>
            <div className="flex flex-col gap-12">
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Me</h3>
                  <a href={`mailto:${portfolioData.socials.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {portfolioData.socials.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                  <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    saksham-tikekar
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Available worldwide (Remote)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-border">
              <h3 className="text-xl font-bold mb-8">Follow My Work</h3>
              <div className="flex gap-6">
                <a href={portfolioData.socials.github} className="p-4 rounded-full bg-muted hover:bg-accent hover:text-white transition-all">
                  <Code2 size={24} />
                </a>
                <a href={portfolioData.socials.twitter} className="p-4 rounded-full bg-muted hover:bg-accent hover:text-white transition-all">
                  <Globe size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <form 
              action="https://formspree.io/f/saksham.tikekar19@gmail.com"
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-blue-500 focus:outline-none transition-colors text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-blue-500 focus:outline-none transition-colors text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Describe your project or goals..."
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-blue-500 focus:outline-none transition-colors resize-none text-white"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-500 active:scale-95 transition-all uppercase tracking-widest text-xs"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
