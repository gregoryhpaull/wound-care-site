import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', zipcode: '', medicare: 'Medicare', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" required
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
        <input type="text" placeholder="Last Name" required
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
      </div>
      <input type="email" placeholder="Email Address" required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="tel" placeholder="Phone" required
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        <input type="text" placeholder="Zipcode" required
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.zipcode} onChange={(e) => setFormData({...formData, zipcode: e.target.value})} />
      </div>
      <select value={formData.medicare} onChange={(e) => setFormData({...formData, medicare: e.target.value})}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option>Medicare</option>
        <option>Non Medicare</option>
      </select>
      <textarea placeholder="Tell us about the wound" rows={4} required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
      <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        {submitted ? '✓ Submitted!' : 'Submit Request'}
      </button>
    </form>
  );
}
