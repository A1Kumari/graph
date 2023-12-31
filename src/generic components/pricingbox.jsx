import React from 'react';
import PropTypes from 'prop-types';
// You can create a separate CSS file for styling

const PricingBox = ({ plan, description, price, onSelectPlan }) => {
  return (
    <div className={`pricing-box ${plan ? 'selected' : ''}`}>
      <h2 className="text-2xl font-bold mb-4">{plan} Plan</h2>
      <p className="text-lg mb-4">{description}</p>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <button className="gradient-button" onClick={onSelectPlan}>
        {plan ? 'Select Plan' : 'Contact Sales'}
      </button>
    </div>
  );
};

PricingBox.propTypes = {
  plan: PropTypes.string,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onSelectPlan: PropTypes.func.isRequired,
};

export default PricingBox;
