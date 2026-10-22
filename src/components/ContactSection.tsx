import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  prefilledSubject?: string;
  onClearPrefill?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledSubject,
  onClearPrefill,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'General Inquiries',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendMethod, setSendMethod] = useState<'formsubmit' | 'mailto'>('formsubmit');

  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        interest: `Product Inquiry: ${prefilledSubject}`,
        message: `Hello Somera Farms team, I am interested in placing an inquiry or order regarding ${prefilledSubject}. Please provide pricing, supply schedules, and delivery logistics.`,
      }));
    }
  }, [prefilledSubject]);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(`[Somera Farms Inquiry] ${formData.interest} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\n` +
      `Email Address: ${formData.email}\n` +
      `Phone / WhatsApp: ${formData.phone || 'Not provided'}\n` +
      `Inquiry Category: ${formData.interest}\n\n` +
      `Message / Order Details:\n${formData.message}\n\n` +
      `Sent via Somera Farms & Trading Ltd Web Portal`
    );
    return `mailto:${COMPANY_INFO.businessEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSending(true);

    try {
      // POST directly to FormSubmit service targeting somerafarms.trading@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.businessEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Inquiry: ${formData.interest} from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          interest: formData.interest,
          message: formData.message,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSendMethod('formsubmit');
        setSubmitted(true);
      } else {
        // Fallback to local email client
        window.location.href = constructMailtoUrl();
        setSendMethod('mailto');
        setSubmitted(true);
      }
    } catch {
      // Direct email client fallback
      window.location.href = constructMailtoUrl();
      setSendMethod('mailto');
      setSubmitted(true);
    } finally {
      setIsSending(false);
      if (onClearPrefill) onClearPrefill();
    }
  };

  return (
    <section id="contact" className="py-20 bg-stone-50/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>10. Communications & Engagement</span>
            <span aria-hidden="true">·</span>
            <span>Reach Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Contact & Operational Inquiries
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Get in touch for commercial palm oil orders, outgrower partnerships, seedling nursery procurement, or general agro-processing trade inquiries.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Document Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-stone-900 font-display">
                Company Head Office
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-800 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold">Location & Address</strong>
                    <p className="text-stone-600">{COMPANY_INFO.location}</p>
                    <p className="text-stone-500 text-xs mt-0.5">
                      Landmark: <span className="text-stone-800 font-medium">{COMPANY_INFO.landmark}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-800 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <strong className="block text-stone-900 font-semibold">Direct Recipient Email</strong>
                    <a
                      href={`mailto:${COMPANY_INFO.businessEmail}`}
                      className="text-emerald-900 hover:underline font-mono text-xs break-all"
                    >
                      {COMPANY_INFO.businessEmail}
                    </a>
                    <button
                      onClick={() => handleCopy(COMPANY_INFO.businessEmail)}
                      className="ml-2 text-[11px] text-stone-500 hover:text-stone-900 inline-flex items-center gap-1 cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail === COMPANY_INFO.businessEmail ? (
                        <span className="text-emerald-700 font-semibold inline-flex items-center gap-0.5">
                          <Check className="w-3 h-3" /> Copied
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-0.5">
                          <Copy className="w-3 h-3" /> Copy
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-800 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <strong className="block text-stone-900 font-semibold">Administrative Email</strong>
                    <a
                      href={`mailto:${COMPANY_INFO.administrativeEmail}`}
                      className="text-emerald-900 hover:underline font-mono text-xs break-all"
                    >
                      {COMPANY_INFO.administrativeEmail}
                    </a>
                    <button
                      onClick={() => handleCopy(COMPANY_INFO.administrativeEmail)}
                      className="ml-2 text-[11px] text-stone-500 hover:text-stone-900 inline-flex items-center gap-1 cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail === COMPANY_INFO.administrativeEmail ? (
                        <span className="text-emerald-700 font-semibold inline-flex items-center gap-0.5">
                          <Check className="w-3 h-3" /> Copied
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-0.5">
                          <Copy className="w-3 h-3" /> Copy
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-800 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold">Telephone & WhatsApp</strong>
                    <p className="text-stone-600 text-xs">
                      Official lines in activation; please route correspondence to our business email or use the inquiry form.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Email Action Button */}
            <div className="p-4 rounded-xl bg-emerald-950 text-white space-y-2">
              <p className="text-xs font-semibold text-emerald-200">
                Prefer your own email client?
              </p>
              <p className="text-xs text-stone-300">
                You can write directly to our desk at <strong className="text-white">{COMPANY_INFO.businessEmail}</strong>.
              </p>
              <div className="pt-1">
                <a
                  href={`mailto:${COMPANY_INFO.businessEmail}?subject=Direct%20Inquiry%20to%20Somera%20Farms`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 underline"
                >
                  <span>Launch Mail App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick Note about operational hours */}
            <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-600">
              <p>
                <strong>Operational Hours:</strong> Monday – Saturday: 7:00 AM – 5:00 PM GMT. Processing plant milling shifts run up to 24 hours during peak harvest cycles.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-stone-200 shadow-2xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 font-display">
                  Inquiry Transmitted to Somera Farms
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your message regarding{' '}
                  <span className="text-emerald-900 font-medium">"{formData.interest}"</span> has been dispatched to{' '}
                  <strong className="text-stone-900">{COMPANY_INFO.businessEmail}</strong>.
                </p>
                {sendMethod === 'mailto' && (
                  <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 p-2.5 rounded-lg max-w-md mx-auto">
                    Your local email client has been prepared with this inquiry. If it did not open automatically, please click below or email us directly.
                  </p>
                )}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={constructMailtoUrl()}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-850 rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Open in Email App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        interest: 'General Inquiries',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    Send an Inquiry or Order Request
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Your request will be routed directly to{' '}
                    <strong className="text-emerald-950 font-medium">{COMPANY_INFO.businessEmail}</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kwame Mensah"
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-800 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-800 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number or WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+233 XX XXX XXXX"
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-800 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-800 focus:bg-white"
                    >
                      <option value="General Inquiries">General Company Inquiries</option>
                      <option value="Palm Oil Wholesale Order">Palm Oil Bulk / Wholesale Supply</option>
                      <option value="Fresh Fruit Bunches Supply">Fresh Fruit Bunches (FFB) Offtake / Supply</option>
                      <option value="Outgrower Programme">Outgrower Farmer Programme</option>
                      <option value="Seedling Nursery Procurement">Seedling Nursery Purchase (100k capacity)</option>
                      <option value="Cassava Gari Order">Cassava Gari Distribution</option>
                      <option value="Agro-Processing Partnership">Agro-Processing & Industrial Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe your supply volume, timeline, location, or questions..."
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-800 focus:bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-emerald-900 hover:bg-emerald-850 disabled:bg-emerald-950/50 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>{isSending ? 'Sending to somerafarms.trading@gmail.com...' : 'Submit Inquiry to somerafarms.trading@gmail.com'}</span>
                    <Send className="w-3.5 h-3.5 text-amber-300" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};