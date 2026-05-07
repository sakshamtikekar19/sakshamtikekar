"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code2, Briefcase, Globe, MapPin, Send } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolio";

export default function ContactPage() {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/saksham.tikekar19@gmail.com", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

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
                <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-600/20 text-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white font-space">Email Me</h3>
                  <a href={`mailto:${portfolioData.socials.email}`} className="text-white/60 hover:text-white transition-colors">
                    {portfolioData.socials.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-600/20 text-blue-500">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white font-space">LinkedIn</h3>
                  <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    saksham-tikekar
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-600/20 text-blue-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white font-space">Location</h3>
                  <p className="text-white/60">
                    Available worldwide (Remote)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/5">
              <h3 className="text-xl font-bold mb-8 text-white uppercase tracking-widest text-xs">Follow My Work</h3>
              <div className="flex gap-6">
                <a href={portfolioData.socials.github} className="p-4 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all">
                  <Code2 size={24} />
                </a>
                <a href={portfolioData.socials.twitter} className="p-4 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all">
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
            className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
          >
            {status === "SUCCESS" ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-12">
                <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-600/30">
                  <Send className="text-blue-500 animate-pulse" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Message Sent!</h3>
                  <p className="text-white/40 text-sm font-mono">CORE_SYS: DISPATCH_SUCCESS</p>
                </div>
                <button 
                  onClick={() => setStatus("IDLE")}
                  className="mt-4 text-xs font-black uppercase tracking-widest text-blue-500 hover:text-blue-400"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                  disabled={status === "SENDING"}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-500 active:scale-95 transition-all uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "SENDING" ? "Processing..." : "Send Message"} <Send size={18} />
                </button>
                {status === "ERROR" && (
                  <p className="text-red-500 text-xs font-mono text-center">CORE_SYS: ERROR_DISPATCH_FAILED. TRY_AGAIN.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
