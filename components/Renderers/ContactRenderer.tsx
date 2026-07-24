'use client';

import React, { useState } from 'react';
import { profileData } from '@/data/profile';
import { Mail, Phone, MapPin, Send, CheckCircle2, Terminal, Linkedin, Github } from 'lucide-react';

export const ContactRenderer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'IT Support / Network Engineering Opportunity',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const getMailtoUrl = () => {
    const bodyText = `Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`;
    return `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(bodyText)}`;
  };

  const getGmailUrl = () => {
    const bodyText = `Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profileData.email)}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(bodyText)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      // Trigger native email client or redirect
      window.location.href = getMailtoUrl();
      setStatus('sent');
    }, 600);
  };

  return (
    <div className="font-mono text-xs sm:text-sm my-3 space-y-4 text-[#F0F6FC]">
      <div className="text-[#8B949E] text-xs flex items-center justify-between border-b border-[#30363D] pb-1">
        <span>INTERACTIVE TERMINAL CONTACT CLIENT</span>
        <span>SMTP LISTENER: ACTIVE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Contact Info Card */}
        <div className="p-4 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4 font-mono">
          <div className="flex items-center space-x-3 border-b border-[#30363D] pb-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#58A6FF] bg-[#0D1117] shrink-0">
              <img 
                src="/images/profile.png" 
                alt="Ridho Febrian" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-[#F0F6FC] font-bold text-sm">Ridho Febrian</div>
              <div className="text-[#58A6FF] text-[11px]">IT Support & Network Engineer</div>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <div className="space-y-1">
              <span className="text-[11px] text-[#8B949E] block uppercase">Email Address:</span>
              <a href={`mailto:${profileData.email}`} className="text-[#F0F6FC] hover:text-[#58A6FF] hover:underline flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#58A6FF]" />
                <span>{profileData.email}</span>
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] text-[#8B949E] block uppercase">Phone Number:</span>
              <a href={`tel:${profileData.phone}`} className="text-[#F0F6FC] hover:text-[#3FB950] hover:underline flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#3FB950]" />
                <span>{profileData.phone}</span>
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] text-[#8B949E] block uppercase">Location:</span>
              <div className="text-[#F0F6FC] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D29922]" />
                <span>{profileData.location}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#30363D] space-y-2">
              <span className="text-[11px] text-[#8B949E] block uppercase">Professional Networks:</span>
              <div className="flex gap-2">
                <a 
                  href={profileData.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-2.5 py-1 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#58A6FF] rounded text-xs flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={profileData.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-2.5 py-1 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#F0F6FC] rounded text-xs flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 p-4 bg-[#161B22] border border-[#30363D] rounded-xl space-y-3">
          <div className="flex items-center space-x-2 text-[#3FB950] font-bold border-b border-[#30363D] pb-2">
            <Send className="w-4 h-4" />
            <span>Send Terminal Message to Ridho</span>
          </div>

          {status === 'sent' ? (
            <div className="p-6 bg-[#0D1117] border border-[#3FB950]/50 rounded-xl space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-8 h-8 text-[#3FB950] shrink-0" />
                <div>
                  <h3 className="text-base font-bold text-[#F0F6FC]">Message Prepared & Mail Client Launched!</h3>
                  <p className="text-xs text-[#8B949E]">
                    Your message payload has been generated for <span className="text-[#58A6FF] font-bold">{profileData.email}</span>.
                  </p>
                </div>
              </div>

              {/* Message Payload Summary Box */}
              <div className="p-3 bg-[#161B22] border border-[#30363D] rounded-lg text-xs font-mono space-y-1.5 text-[#C9D1D9]">
                <div><span className="text-[#8B949E]">To:</span> {profileData.email}</div>
                <div><span className="text-[#8B949E]">From:</span> {formData.name} &lt;{formData.email}&gt;</div>
                <div><span className="text-[#8B949E]">Subject:</span> {formData.subject}</div>
                <div className="pt-2 border-t border-[#30363D] text-[#8B949E] text-[11px] whitespace-pre-wrap font-sans">
                  {formData.message}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={getMailtoUrl()}
                  className="px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs font-mono flex items-center space-x-1.5 font-bold cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Mail App (Mailto)</span>
                </a>

                <a
                  href={getGmailUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#58A6FF] rounded text-xs font-mono flex items-center space-x-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Compose in Gmail</span>
                </a>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(profileData.email);
                    setCopiedEmail(true);
                    setTimeout(() => setCopiedEmail(false), 2000);
                  }}
                  className="px-3 py-1.5 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#F0F6FC] rounded text-xs font-mono flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>{copiedEmail ? '✓ Email Copied!' : 'Copy Email Address'}</span>
                </button>

                <button
                  onClick={() => {
                    const fullText = `To: ${profileData.email}\nSubject: ${formData.subject}\n\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
                    navigator.clipboard.writeText(fullText);
                    setCopiedMessage(true);
                    setTimeout(() => setCopiedMessage(false), 2000);
                  }}
                  className="px-3 py-1.5 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#F0F6FC] rounded text-xs font-mono flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>{copiedMessage ? '✓ Message Copied!' : 'Copy Full Message'}</span>
                </button>
              </div>

              <div className="pt-2 border-t border-[#30363D] flex justify-between items-center">
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', subject: 'IT Support / Network Engineering Opportunity', message: '' });
                  }}
                  className="text-xs text-[#8B949E] hover:text-[#58A6FF] underline font-mono cursor-pointer"
                >
                  ← Edit or Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] text-[#8B949E] block">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter / Hiring Manager"
                    className="w-full bg-[#0D1117] border border-[#30363D] rounded px-3 py-1.5 text-xs text-[#F0F6FC] focus:outline-none focus:border-[#58A6FF]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-[#8B949E] block">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="recruiter@company.com"
                    className="w-full bg-[#0D1117] border border-[#30363D] rounded px-3 py-1.5 text-xs text-[#F0F6FC] focus:outline-none focus:border-[#58A6FF]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-[#8B949E] block">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#0D1117] border border-[#30363D] rounded px-3 py-1.5 text-xs text-[#F0F6FC] focus:outline-none focus:border-[#58A6FF]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-[#8B949E] block">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Ridho, we reviewed your MTCNA & IT Support experience at Pan Pacific Hotel and would like to discuss..."
                  className="w-full bg-[#0D1117] border border-[#30363D] rounded px-3 py-1.5 text-xs text-[#F0F6FC] focus:outline-none focus:border-[#58A6FF] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-2 bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50 text-white font-bold rounded text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                {status === 'sending' ? (
                  <span>Dispatching Message via SMTP...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Ridho</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
