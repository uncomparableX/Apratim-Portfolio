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
              Pursuing a B.Tech at IIT Dharwad with interests spanning software engineering, AI systems, automation, and product innovation beyond core electrical engineering. Passionate about building impactful solutions, leading teams in hackathons, and turning ideas into real-world products through technology and engineering.
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
              Developed a strong foundation in mathematics, physics, and computer science, which sparked an early interest in problem solving, technology, and innovation. Actively participated in hackathons and collaborative competitions, serving as team lead in multiple events and securing top positions through leadership and creative execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;