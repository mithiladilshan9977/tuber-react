import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

import './TuberFinalPage.css';

function TuberFinalPage( ) {
  return (
    <div className="final-page">
      {/* Add your content for the final page */}
      {/* Example: */}
      <h1>Thank You for Signing Up!</h1>
      <p>Your submission has been received. You are now a TUBER driver.</p>
    </div>
  );
}

// Define the prop types
TuberFinalPage.propTypes = {
  setFormSubmitted: PropTypes.func.isRequired, // Assuming setFormSubmitted is a function
};

export default TuberFinalPage;
