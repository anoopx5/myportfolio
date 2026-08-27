import React, { useState } from "react";
import { Mail, Phone, ArrowUpRight, ArrowRight, CheckCircle2, Copy, Check, Send } from "lucide-react";
import { submitInquiryToFirebase } from "../../services/firebase";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  projectType: string;
  details: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    business: "",
    projectType: "Business Website",
    details: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "anoopkumarx9@gmail.com";
  const directPhone = "+91 9847805902";
  const phoneClean = "+919847805902";

  const projectTypes = [
    "Business Website",
    "Landing Page",
    "Ecommerce",
    "Website Redesign",
    "UI / UX",
    "Other"
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.details.trim()) newErrors.details = "Please share a few details about your project.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const encodeFormData = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // 1. Submit to Firebase Firestore "inquiries" collection
      const firebasePromise = submitInquiryToFirebase({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business: formData.business,
        projectType: formData.projectType,
        details: formData.details
      });

      // 2. Submit to Netlify Forms endpoint for detection and email notifications
      const netlifyPromise = fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business: formData.business,
          projectType: formData.projectType,
          details: formData.details
        })
      }).catch((err) => console.warn("Netlify form submission notice:", err));

      // Wait for submissions
      await Promise.allSettled([firebasePromise, netlifyPromise]);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting inquiry:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(directPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-gradient-to-b from-white via-[#F0F9FF] to-white border-t border-[#E2EEF6] scroll-mt-16 overflow-hidden">
      
      {/* Soft Blue Radial Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[400px] sm:h-[500px] bg-gradient-to-r from-[#00ADEF]/18 via-[#BAE6FD]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Final Dramatic Minimal CTA Banner */}
        <div className="rounded-3xl border border-[#E2EEF6] bg-white p-8 sm:p-14 mb-16 shadow-card text-center space-y-6 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
            <span>LET’S CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight max-w-3xl mx-auto leading-tight">
            Let’s build something <br />
            <span className="font-serif italic font-normal text-[#00ADEF]">worth visiting.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto leading-relaxed">
            Have a business, idea or project that needs a better online presence?
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#inquiry-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#111827] hover:bg-[#00ADEF] text-white font-medium text-sm shadow-md hover:shadow-blue-glow transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${email}?subject=Project%20Inquiry%20for%20Anoop`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#F0F9FF] text-[#111827] hover:text-[#00ADEF] font-medium text-sm border border-[#E2EEF6] hover:border-[#BAE6FD] transition-all shadow-sm"
            >
              <span>Email Me</span>
              <Mail className="w-4 h-4 text-[#00ADEF]" />
            </a>
          </div>
        </div>

        {/* Contact Information & Form Layout */}
        <div id="inquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#111827] tracking-tight">
                Direct Contact
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Reach out directly via email, phone, or submit the inquiry form with your requirements.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              
              {/* Email Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E2EEF6] shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] text-[#00ADEF] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#00ADEF]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wider">Email</div>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-semibold text-[#111827] hover:text-[#00ADEF] transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white hover:bg-[#F0F9FF] text-[#4B5563] hover:text-[#111827] border border-[#E2EEF6] transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`mailto:${email}?subject=Project%20Inquiry`}
                    className="p-2 rounded-lg bg-[#111827] text-white text-xs hover:bg-[#00ADEF] transition-colors"
                    title="Send Email"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E2EEF6] shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] text-[#00ADEF] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#00ADEF]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wider">Phone / WhatsApp</div>
                    <a
                      href={`https://wa.me/${phoneClean}?text=Hi%20Anoop,%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#111827] hover:text-[#00ADEF] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{directPhone}</span>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded-md font-normal">WhatsApp ↗</span>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-white hover:bg-[#F0F9FF] text-[#4B5563] hover:text-[#111827] border border-[#E2EEF6] transition-colors cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`https://wa.me/${phoneClean}?text=Hi%20Anoop,%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#111827] text-white text-xs hover:bg-[#00ADEF] transition-colors"
                    title="Open WhatsApp Chat"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E2EEF6] text-xs text-[#4B5563] leading-relaxed shadow-sm">
              <span className="text-[#00ADEF] font-semibold">✦</span> Available for client engagements, new builds, and website redesigns.
            </div>
          </div>

          {/* Compact Premium Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#E2EEF6] bg-white p-6 sm:p-10 shadow-card">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827]">
                    Inquiry Sent Successfully
                  </h3>
                  <p className="text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#111827]">{formData.name}</strong>! I have received your request regarding <strong className="text-[#00ADEF]">{formData.projectType}</strong> and will get back to you shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          business: "",
                          projectType: "Business Website",
                          details: ""
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#F0F9FF] hover:bg-[#E0F2FE] text-[#0284C7] font-medium text-xs border border-[#BAE6FD] transition-all cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Hidden inputs for Netlify Form processing */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="border-b border-[#E2EEF6] pb-3">
                    <h3 className="text-xl font-bold text-[#111827]">
                      Project Inquiry
                    </h3>
                    <p className="text-xs text-[#4B5563] mt-1">
                      Share your contact info and project requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
                        Name <span className="text-[#00ADEF]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#F0F9FF]/40 border text-sm text-[#111827] placeholder-[#6B7280] focus:outline-none focus:bg-white focus:border-[#00ADEF] transition-all ${
                          errors.name ? "border-rose-400" : "border-[#E2EEF6]"
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
                        Email <span className="text-[#00ADEF]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="your@email.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#F0F9FF]/40 border text-sm text-[#111827] placeholder-[#6B7280] focus:outline-none focus:bg-white focus:border-[#00ADEF] transition-all ${
                          errors.email ? "border-rose-400" : "border-[#E2EEF6]"
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
                        Mobile / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F0F9FF]/40 border border-[#E2EEF6] text-sm text-[#111827] placeholder-[#6B7280] focus:outline-none focus:bg-white focus:border-[#00ADEF] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
                        Business / Company
                      </label>
                      <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        placeholder="e.g. Brand Name"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F0F9FF]/40 border border-[#E2EEF6] text-sm text-[#111827] placeholder-[#6B7280] focus:outline-none focus:bg-white focus:border-[#00ADEF] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
                      Project Type <span className="text-[#00ADEF]">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F0F9FF]/40 border border-[#E2EEF6] text-sm text-[#111827] focus:outline-none focus:bg-white focus:border-[#00ADEF] transition-all cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
                      Project Details <span className="text-[#00ADEF]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      name="details"
                      value={formData.details}
                      onChange={(e) => {
                        setFormData({ ...formData, details: e.target.value });
                        if (errors.details) setErrors({ ...errors, details: "" });
                      }}
                      placeholder="Tell me about your business goals, target audience, timeline, or requirements..."
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F0F9FF]/40 border text-sm text-[#111827] placeholder-[#6B7280] focus:outline-none focus:bg-white focus:border-[#00ADEF] transition-all resize-none ${
                        errors.details ? "border-rose-400" : "border-[#E2EEF6]"
                      }`}
                    />
                    {errors.details && <p className="text-[11px] text-rose-500">{errors.details}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#111827] hover:bg-[#00ADEF] text-white font-medium text-sm shadow-md hover:shadow-blue-glow transition-all duration-300 active:scale-[0.99] cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );

};

