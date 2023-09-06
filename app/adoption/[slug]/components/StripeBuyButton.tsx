import React, { useEffect } from 'react';

const StripeBuyButton = () => {
  useEffect(() => {
    // Load Stripe Buy Button script dynamically
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <stripe-buy-button
      buy-button-id="buy_btn_1NnGi9APMRyY9MbLF6Xb4SB9"
      publishable-key="pk_test_51NnGdQAPMRyY9MbL17QHm1MUAuW7AKV9ljhApUHUXJLf3ltEDj5xWhpp8Fua2vHZHcwLH8MGlo2Zr4D5qWuxQwBa00hjmH9blw"
    />
  );
};

export default StripeBuyButton;
