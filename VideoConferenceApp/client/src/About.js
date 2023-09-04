import React from "react";
import "./About.css"; // Import your CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="blinking-text">About Our Video Conference App</h1>
        <p>Discover the power of seamless communication.</p>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="https://www.uctoday.com/wp-content/uploads/2022/02/Video-Conferencing-Tech-for-2022.jpg" alt="Video Conference"  width={"85%"} height={"85%"}/>
        </div>
        <div className="about-text">
          <p>
            Our cutting-edge video conference app brings people together from around the world, allowing them to connect, collaborate, and communicate effortlessly.
          </p>
          <p>
            Whether it's business meetings, virtual events, or catching up with loved ones, our app provides crystal-clear video and audio quality, real-time chat, screen sharing, and much more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
