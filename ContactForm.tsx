import React, { useState } from 'react';
import { X, Send, Users, DollarSign, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'partnership' | 'investment';
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Create the submission data
      const submissionData = {
        type,
        ...formData,
        timestamp: new Date().toISOString()
      };

      // Log to console (you can see this in browser dev tools)
      console.log('🚀 NEW FORM SUBMISSION:', submissionData);
      
      // Also create a formatted version for easy copying
      const formattedSubmission = `
📧 NEW ${type.toUpperCase()} INQUIRY - FunnelZip

👤 Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Website: ${formData.website || 'Not provided'}

💬 Message:
${formData.message}

⏰ Submitted: ${new Date().toLocaleString()}
      `.trim();
      
      console.log(formattedSubmission);
      
      // Store in localStorage as backup
      const existingSubmissions = JSON.parse(localStorage.getItem('funnelzip_submissions') || '[]');
      existingSubmissions.push(submissionData);
      localStorage.setItem('funnelzip_submissions', JSON.stringify(existingSubmissions));

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success message
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', company: '', website: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">Your message has been sent. We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="p-6">
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">Error: {submitError}</p>
              </div>
            )}

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ready to eliminate compliance risks and boost your revenue? Whether you're a brand, agency, marketplace, or investor—we'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get Started Today</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourcompany.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your current challenges, what you're looking to achieve, or any specific questions..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transform hover:scale-105'
                    } text-white`}
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? 'Sending...' : 'Start the Conversation'}</span>
                  </button>
                </form>
              </div>

              {/* Information Panels */}
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                    <h4 className="text-lg font-bold text-blue-900">Partnership Opportunities</h4>
                  </div>
                  <p className="text-blue-800 mb-4">
                    FunnelZip integrates seamlessly with agencies, marketplaces, and SaaS providers. Our AI-powered validation can enhance your existing ecosystem and deliver immediate value to your clients.
                  </p>
                  <p className="text-sm text-blue-700 font-medium">
                    Perfect for: Marketing agencies, feed management platforms, e-commerce SaaS providers, and marketplace operators.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                    <h4 className="text-lg font-bold text-purple-900">Investment Opportunities</h4>
                  </div>
                  <p className="text-purple-800 mb-4">
                    FunnelZip.com has been built and bootstrapped by operators deeply experienced in e‑commerce and compliance.
                  </p>
                  <p className="text-purple-800 mb-4">
                    We're now exploring select seed‑stage partnerships to accelerate growth and expand our reach.
                  </p>
                  <p className="text-sm text-purple-700 font-medium">
                    If you're interested in learning more, feel free to reach out.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Get in Touch</h4>
                  <p className="text-gray-700 mb-2">
                    Please use the contact form to get in touch with us. We'll respond to all inquiries promptly.
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;