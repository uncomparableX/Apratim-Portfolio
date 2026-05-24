import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Undergraduate Student</h4>
                <h5>Indian Institute of Technology, Dharwad</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
             Pursuing a B.Tech in EEE at IIT Dharwad with interests in software engineering, AI systems, robotics, automation, & product innovation beyond core electrical engineering. Passionate about building impactful solutions, leading teams in hackathons, and turning ideas into real world products through technology & engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School (+2)</h4>
                <h5>Sri Krishna Mission School</h5>
              </div>
              <h3>Graduated</h3>
            </div>
            <p>
             Developed a strong foundation in Physics, Chemistry, Mathematics, & Computer Science, developing early problem solving & analytical skills. Actively participated in science exhibitions and competitions, securing top positions through innovation, creativity, & execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
