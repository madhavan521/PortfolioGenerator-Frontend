import React from 'react';

const Features = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center">Features</h2>
        <div className="row mt-4">
          {[
            "Easy to Use: User-friendly form to fill out details.",
            "5 Unique Designs: Multiple options to choose from.",
            "Edit Anytime: Modify your portfolio details with ease.",
            "Responsive Designs: Works perfectly on any device.",
            "View the Portfolio"
          ].map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 ">
                <div className="card-body">
                  <h5 className="card-title">Feature {index + 1}</h5>
                  <p className="card-text">{feature}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
