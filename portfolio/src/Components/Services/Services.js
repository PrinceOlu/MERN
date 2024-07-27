import React from "react";

export default function Services() {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* Description */}
        <div className="services-desc-container">
          <h1>
            What I <span>Deliver</span>
          </h1>
          <p>
            Creating scalable web applications and designing user-friendly
            interfaces.
          </p>
          <button>Hire me!</button>
        </div>
        {/* Items */}
        <div className="services-items-container">
          <div className="services-item">
            <i
              className="fa-solid fa-code"
              style={{ fontSize: "24px", color: "#007bff", margin: "10px" }}
            ></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                Web development involves creating and maintaining websites and
                web applications. It includes front-end development, which
                focuses on the user interface and user experience using HTML,
                CSS, and JavaScript, and back-end development, which involves
                server-side programming, databases, and application logic using
                languages like Node.js, PHP, and frameworks such as Express and
                Django. I work to ensure websites are functional, responsive,
                and visually appealing across different devices and browsers.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i
              className="fa-solid fa-mobile"
              style={{ fontSize: "24px", color: "#007bff", margin: "10px" }}
            ></i>
            <div className="item-desc">
              <h3>Mobile App Development</h3>
              <p>
                Mobile app development is the process of creating software
                applications that run on mobile devices, such as smartphones and
                tablets. This involves designing and coding apps for various
                platforms, primarily iOS and Android, using programming
                languages like Swift, Objective-C, Java, and Kotlin.
                Additionally, cross-platform development frameworks such as
                React Native and Flutter allow for building apps that work on
                multiple operating systems with a single codebase. Mobile app
                developers focus on creating intuitive, responsive, and
                efficient applications, ensuring seamless performance and a
                great user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
