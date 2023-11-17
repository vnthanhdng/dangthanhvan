import React from "react";

const About = () => {
  return (
    <div className="section max-w-[690px]">
      <div className="flex-1 padding-x">
        <div className="padding-y">
          <h1 className="about-title">About Me</h1>
          <p className="about-text">
            My full name is Đặng Thanh Vân, and most people know me as Van Thanh
            Dang. I am currently a freshman at Vanderbilt University, where I am
            attempting to spend my most culturally enhancing education studying
            Computer Science and Mathematics.
          </p>
        </div>
        <div className="padding-y">
          <h2 className="about-title">Education</h2>
          <p className="about-text">
            I spent my K-12 education in Vietnam, and later attended
            [University/College], where I studied [Your Major]. I was involved
            in [Activities/Programs] and worked on [Projects/Research].
          </p>
          <p className="about-text">
            In March 2023, I received admissions from Vanderbilt University with
            Cornelius Vanderbilt scholarship.{" "}
          </p>
        </div>
        <div className="padding-y">
          <h2 className="about-title">Research</h2>
          <p className="about-text">
            I conducted research on [Research Topics] and was involved with
            [Research Groups or Initiatives].
          </p>
        </div>
        <div className="padding-y">
          <h2 className="about-title">Contact</h2>
          <p className="about-text">
            Feel free to contact me through email at [Your Email], or on [Social
            Media Platform].
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
