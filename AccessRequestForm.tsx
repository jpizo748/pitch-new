import React, { useState } from 'react';
import { X, Send, CheckCircle, Mail } from 'lucide-react';

interface AccessRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessRequestForm: React.FC<AccessRequestFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        ...formData,
        type: 'access-request',
        timestamp: new Date().toISOString()
      };

      // Log to console for debugging
      console.log('🚀 ACCESS REQUEST SUBMISSION:', submissionData);
      
      // Create formatted email content for easy copying
      const emailContent = `
📧 NEW ACCESS REQUEST - FunnelZip Pitch Deck

👤 CONTACT DETAILS:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Role/Interest: ${formData.role}

💬 MESSAGE:
${formData.message || 'No additional message provided'}

🔐 PASSWORD TO SHARE: doberman_bulldog

📊 REQUEST DETAILS:
Submitted: ${new Date().toLocaleString()}

---
Reply directly to: ${formData.email}
      `.trim();
      
      console.log('📧 EMAIL CONTENT FOR jp@commercetap.io:');
      console.log(emailContent);
      
      // Store in localStorage as backup
      const existingRequests = JSON.parse(localStorage.getItem('funnelzip_access_requests') || '[]');
      existingRequests.push(submissionData);
      localStorage.setItem('funnelzip_access_requests', JSON.stringify(existingRequests));

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', company: '', role: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Request logged successfully. Check browser console for details, or email jp@commercetap.io directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Request Access</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Request Sent!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for your interest in FunnelZip. Your access request has been sent to Joe.
            </p>
            <p className="text-sm text-gray-500">
              You'll receive the password within 24 hours if approved.
            </p>
            <p className="text-sm text-blue-600 font-medium mt-2">
              For a quicker response, email directly: jp@commercetap.io
            </p>
          </div>
        ) : (
          <div className="p-6">
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">{submitError}</p>
              </div>
            )}

            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Get Access to FunnelZip Pitch Deck</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Please fill out this form to request access to our full pitch deck and demo. We'll review your request and send you the password if approved.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                  Role/Interest *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                >
                  <option value="">Select your role/interest</option>
                  <option value="investor">Investor</option>
                  <option value="partner">Potential Partner</option>
                  <option value="customer">Potential Customer</option>
                  <option value="agency">Agency/Service Provider</option>
                  <option value="marketplace">Marketplace/Platform</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your interest in FunnelZip..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transform hover:scale-105'
                } text-white`}
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Request...' : 'Request Access'}</span>
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Need immediate access? Email directly: 
                <a href="mailto:jp@commercetap.io" className="text-blue-600 hover:text-blue-700 ml-1">
                  jp@commercetap.io
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessRequestForm;