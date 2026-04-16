import { X, User, Mail, Phone, ShieldCheck } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  pageSource?: string;
  isInline?: boolean;
}

export default function QuoteForm({ isOpen, onClose, pageSource, isInline }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: 'auto',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen && !isInline) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY || "1befa18a-33ad-4ccb-a7e3-802a7825768a";
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          insurance_type: formData.insuranceType,
          message: formData.message || `New quote request for ${formData.insuranceType}`,
          page_source: pageSource || 'Main Website',
          from_name: "Rainbow Insurance Website",
          subject: `New Quote Request: ${formData.insuranceType.toUpperCase()}`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert('Thank you! Susan and her expert team will contact you shortly with the best rates in Fort Worth!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          insuranceType: 'auto',
          message: ''
        });
        if (onClose) onClose();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your request. Please call us directly at 817-922-8031.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <motion.div 
      initial={isInline ? {} : { opacity: 0, y: 20, scale: 0.95 }}
      animate={isInline ? {} : { opacity: 1, y: 0, scale: 1 }}
      className={`bg-white rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)] max-w-md w-full overflow-hidden relative border-4 border-rainbow-gold ${isInline ? 'shadow-none border-2' : ''}`}
    >
      {!isInline && (
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:rotate-90 transition-transform z-20 bg-black/20 rounded-full p-1"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <div className="bg-gradient-to-r from-rainbow-pink via-rainbow-rose to-rainbow-pink p-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent" />
        <h2 className="text-2xl font-bold mb-1 relative z-10 text-white">Get Your Best Rate!</h2>
        <p className="text-sm opacity-95 relative z-10 font-medium">Susan and her expert team are ready to help!</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-3">
        <div className="bg-amber-50 p-3 rounded-lg border border-rainbow-gold/20 mb-4 text-center">
          <p className="text-xs font-bold text-rainbow-amber uppercase tracking-wider">The Best Service • The Best Policies • The Best Rates</p>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-2">
            <User className="w-3 h-3 text-rainbow-gold" /> Full Name
          </label>
          <input 
            type="text" 
            required
            placeholder="Your Name"
            className="w-full px-3 py-2 border-2 border-gray-100 rounded-lg focus:border-rainbow-gold focus:outline-none transition-colors text-sm"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-2">
              <Mail className="w-3 h-3 text-rainbow-gold" /> Email
            </label>
            <input 
              type="email" 
              required
              placeholder="Email"
              className="w-full px-3 py-2 border-2 border-gray-100 rounded-lg focus:border-rainbow-gold focus:outline-none transition-colors text-sm"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-2">
              <Phone className="w-3 h-3 text-rainbow-gold" /> Phone
            </label>
            <input 
              type="tel" 
              required
              placeholder="Phone"
              className="w-full px-3 py-2 border-2 border-gray-100 rounded-lg focus:border-rainbow-gold focus:outline-none transition-colors text-sm"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-2">
            <ShieldCheck className="w-3 h-3 text-rainbow-gold" /> Insurance Type
          </label>
          <select 
            className="w-full px-3 py-2 border-2 border-gray-100 rounded-lg focus:border-rainbow-gold focus:outline-none transition-colors text-sm bg-white"
            value={formData.insuranceType}
            onChange={e => setFormData({...formData, insuranceType: e.target.value})}
          >
            <option value="auto">Auto / Car Insurance</option>
            <option value="home">Home Insurance</option>
            <option value="business">Business Insurance</option>
            <option value="bundle">Bundle & Save</option>
            <option value="sr22">SR-22 Filing</option>
          </select>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-rainbow-gold to-rainbow-amber text-white py-3 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg mt-2 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Get My Free Quote Now!'}
        </button>
        
        <p className="text-center text-[10px] text-gray-400 mt-2 leading-tight">
          We work for YOU, not the insurance companies. Believe in us for the best protection in Fort Worth.
        </p>
      </form>
    </motion.div>
  );

  if (isInline) return formContent;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {formContent}
    </div>
  );
}
