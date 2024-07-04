import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-dark py-5 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3>VISION & MISSION</h3>
            <p>The Cleaning Company was established in the 25 year . It was founded by Mr. sudharsan who is currently CEO of the company. </p>
             <p> The company was built with the aspiration of providing service to address the cleaning and housekeeping requirements of residential as well as commercial spaces.</p>
             <p> The idea was further cemented by the Indian Government’s Clean India initiative. "We believe a clean environment is necessary for our society, we hire and train people to first be clean and then spread the joy of cleanliness around them".</p>
          </div>
          <div className="col-md-6">
            <h3>Contact</h3>
            <p>Phone: 6369610976</p>
            <p>Email: <a href="mailto:CleanEase@gmail.com" className="text-dark">CleanEase@gmail.com</a></p>
            
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <p>&copy; {currentYear} CleanEase. All rights reserved.</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="#" className="text-dark">Terms of Use</a></li>
              <li className="list-inline-item mx-2">|</li>
              <li className="list-inline-item"><a href="#" className="text-dark">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;