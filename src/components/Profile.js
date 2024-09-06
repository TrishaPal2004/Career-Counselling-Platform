import React from 'react';
import './global.css';
import './Profile.css';

const App = () => {
  return (
    <div className="desktop-1">
      <header className="desktop-1-inner">
        <nav className="frame-parent">
          <div className="career-catalyst-wrapper">
            <a href="/" className="career-catalyst">Career Catalyst</a>
          </div>
          <nav className="home-parent">
            <a href="/" className="home">Home</a>
            <a href="/about" className="about">About</a>
            <a href="/contact" className="contact-us">Contact Us</a>
          </nav>
        </nav>
      </header>
      <div className="desktop-1-child">
        <div className="frame-child"></div>
      </div>
      <section className="frame-section">
        <div className="frame-group">
          <div className="frame-container">
            <div className="rectangle-parent">
              <div className="frame-item"></div>
              <h2 className="name">Name</h2>
              <div className="occupation">Occupation</div>
              <img
                className="be14f0-bfff-47cf-8d9f-256b157c-icon"
                loading="lazy"
                alt=""
                src="./public/46be14f0bfff47cf8d9f256b157c9180-1@2x.png"
              />
            </div>
            <div className="ellipse-parent">
              <div className="frame-inner"></div>
              <div className="rectangle-div"></div>
            </div>
            <h2 className="contact-info">Contact Info</h2>
            <img
              className="image-1-icon"
              loading="lazy"
              alt=""
              src="./public/image-1@2x.png"
            />
            <a href="/about" className="about1">About</a>
            <div className="phone">Phone</div>
            <div className="address">Address</div>
            <div className="text">text</div>
            <h2 className="see-quiz-results">See Quiz Results</h2>
            <div className="rectangle-group">
              <div className="frame-child1"></div>
              <b className="user-profile">User Profile</b>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="edit-profile-parent">
              <div className="edit-profile">Edit profile</div>
              <div className="share-profile-wrapper">
                <div className="share-profile">Share profile</div>
              </div>
              <div className="date-of-birth-parent">
                <div className="date-of-birth-container">
                  <p className="date-of-birth">Date of Birth</p>
                </div>
                <div className="e-mail">E-mail</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
