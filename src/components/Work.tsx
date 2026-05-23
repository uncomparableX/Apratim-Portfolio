import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Nasiko-AI-agent",
    category: "AI Agent System",
    tools: "Logic Orchestration, LLMs, Assistant Behavior",
    github: "https://github.com/uncomparableX/Nasiko-AI-agent",
    live: null,
  },
  {
    title: "NeonFracture",
    category: "Web Based Multiplayer Game",
    tools: "Creative Coding, Interactive UI, Game Logic",
    github: "https://github.com/uncomparableX/NeonFracture",
    live: null,
  },
  {
    title: "ATLAS-ai-coding-agent",
    category: "AI / Developer Tool",
    tools: "Agentic Systems, Context Management, Developer Workflows",
    github: "https://github.com/uncomparableX/ATLAS-ai-coding-agent",
    live: null,
  },
  {
    title: "Apratim-iitdh-Portfolio",
    category: "Interactive 3D Portfolio",
    tools: "React, Three.js, GSAP, Physics UI",
    github: "https://github.com/uncomparableX/Apratim-iitdh-portfolio",
    live: null,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div 
                      className="carousel-image-wrapper" 
                      style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        gap: '1.5rem',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '1rem',
                        padding: '2rem'
                      }}
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                          padding: '12px 24px',
                          border: '1px solid white',
                          borderRadius: '8px',
                          color: 'white',
                          textDecoration: 'none',
                          fontWeight: 'bold',
                          letterSpacing: '1px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'black'; }}
                        onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}
                      >
                        VIEW SOURCE ON GITHUB
                      </a>
                      
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noreferrer"
                          style={{
                            color: 'white',
                            textDecoration: 'underline',
                            fontSize: '1rem',
                            opacity: 0.8
                          }}
                        >
                          Visit Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;