import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-5 ">
      <div className="container">
        <h2 className="text-center">User Testimonials</h2>
        <div className="row mt-4">
          {[
            { quote: "Creating my portfolio was so easy, and I love the design options!", user: "Happy User" },
            { quote: "This saved me hours of work—such a helpful tool for job seekers!", user: "Satisfied Client" }
          ].map((testimonial, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{testimonial.quote}</p>
                    <footer className="blockquote-footer">{testimonial.user}</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
