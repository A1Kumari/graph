import React, { useState } from 'react';
import "./style.css";
import PricingBox from '../generic components/pricingbox';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white">
      <h1 className="text-4xl font-bold mb-8">Choose Your Plan</h1>

      <div className="flex justify-center space-x-4">
        {/* Basic Plan */}
        <PricingBox
          plan="Basic"
          description="Perfect for individuals"
          price="$9.99/month"
          onSelectPlan={() => handleSelectPlan('basic')}
        />

        {/* Pro Plan */}
        <PricingBox
          plan="Pro"
          description="Great for small teams"
          price="$19.99/month"
          onSelectPlan={() => handleSelectPlan('pro')}
        />

        {/* Enterprise Plan */}
        <PricingBox
          plan="Enterprise"
          description="Ideal for large organizations"
          price="Contact Us"
          onSelectPlan={() => handleSelectPlan('enterprise')}
        />
      </div>

      {/* Selected Plan Details Card */}
      {selectedPlan && (
        <div className="selected-plan-details mt-8">
          <h2 className="text-2xl font-bold mb-4">{`${selectedPlan.charAt(0).toUpperCase()}${selectedPlan.slice(1)} Plan Details`}</h2>
          {/* Additional details based on the selected plan */}
          {selectedPlan === 'basic' && (
            <div>
              <p>Up to 10 graphs</p>
              <p>Up to 500 chatbot queries</p>
            </div>
          )}
          {selectedPlan === 'pro' && (
            <div>
              <p>Up to 50 graphs</p>
              <p>Up to 1000 chatbot queries</p>
              <p>Email + live chat support</p>
            </div>
          )}
          {selectedPlan === 'enterprise' && (
            <div>
              <p>Unlimited graphs</p>
              <p>Ability to upload custom PDFs</p>
              <p>24/7 phone + email support</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PricingPage;
