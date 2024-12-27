import React, { useState } from 'react';

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    walletAddress: '',
    attachments: null,
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachments: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission process
    console.log("Form Submitted", formData);
    setShowSuccessPopup(true);
    // Reset form after submission
    setFormData({
      title: '',
      description: '',
      walletAddress: '',
      attachments: null,
    });
  };

  return (
    <div
      className="proposal-form-container"
      style={{
        background:
          'linear-gradient(to right, #03045E, #03346E, #021526), radial-gradient(circle at center, rgba(255, 255, 255, 0.3), transparent)',
        minHeight: '100vh',
      }}
    >
      <div className="flex justify-center items-center pt-20 h-full">
        {/* Transparent Glass Box with Lighter Color */}
        <div
          className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-lg shadow-md"
          style={{
            width: '70%', // Increases the width of the form
            maxWidth: '900px', // Optional, to limit the maximum width
          }}
        >
          <h2 className="text-white font-semibold text-lg mb-4 text-center">
            Create a Proposal
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Title Field */}
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 text-white bg-transparent border border-white/30 rounded-md focus:outline-none"
                placeholder="Proposal Title"
                required
              />
            </div>

            {/* Description Field */}
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 text-white bg-transparent border border-white/30 rounded-md focus:outline-none"
                placeholder="Proposal Description"
                rows="4"
                required
              />
            </div>

            {/* Wallet Address Field */}
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="walletAddress">
                Wallet Address (MetaMask)
              </label>
              <input
                type="text"
                id="walletAddress"
                name="walletAddress"
                value={formData.walletAddress}
                onChange={handleChange}
                className="w-full p-2 text-white bg-transparent border border-white/30 rounded-md focus:outline-none"
                placeholder="MetaMask Wallet Address"
                required
              />
            </div>

            {/* Attachments Field */}
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="attachments">
                Attachments
              </label>
              <input
                type="file"
                id="attachments"
                name="attachments"
                onChange={handleFileChange}
                className="w-full p-2 text-white bg-transparent border border-white/30 rounded-md focus:outline-none"
                multiple
              />
            </div>

            {/* Submit Button */}
            <div className="mb-4 text-center">
              <button
                type="submit"
                className="px-4 py-2 text-white rounded-md"
                style={{
                  backgroundColor: '#00a1a0',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#008e8d')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#00a1a0')}
              >
                Submit Proposal
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
            <h3 className="text-xl font-semibold text-green-500">Proposal Submitted Successfully!</h3>
            <p className="text-white mt-2">Your proposal has been submitted successfully. Thank you!</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalForm;
