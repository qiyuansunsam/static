import React, { useEffect, useState } from 'react';
import { FiExternalLink, FiHome, FiBookOpen, FiMapPin, FiMinus, FiPlus } from 'react-icons/fi';

const Experience = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const data = [
    {
      id: 'exp-freelance',
      type: 'work',
      role: 'Freelance Developer',
      company: 'Upwork & Fiverr',
      duration: 'Mar 2025 – Present',
      location: 'Remote',
      summary: 'Full-Stack · AI Integration',
      startYear: 2025.25,
      endYear: 2025.75,
      side: 'right',
      details: {
        overview: 'Providing end-to-end development services for international clients, specializing in modern web applications and AI integration.',
        responsibilities: [
          'Design and develop custom portfolio sites',
          'Build and deploy AI/ML models',
          'Integrate AI into existing systems',
          'Create RESTful APIs and microservices',
          'Database architecture and optimization'
        ],
        achievements: [
          'Maintained 5.0 star rating',
          'Completed 10+ projects',
          '60% client retention rate',
          'Top rated developer status'
        ],
        stack: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'TensorFlow']
      }
    },
    {
      id: 'exp-yagao',
      type: 'work',
      role: 'Software Engineering / ML Intern',
      company: 'YaGao Digital Technology',
      duration: 'Dec 2024 – Feb 2025',
      location: 'Guangzhou, China',
      summary: 'ML Pipeline · Stock Prediction',
      startYear: 2024.92,
      endYear: 2025.17,
      side: 'left',
      wikiUrl: 'https://baike.baidu.com/item/%E5%B9%BF%E5%B7%9E%E5%B8%82%E4%BA%9A%E9%AB%98%E6%95%B0%E7%A0%81%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/4034528',
      details: {
        overview: 'Brought on through referral to tackle critical ML infrastructure issues. Successfully re-engineered the entire model training pipeline, uncovering and fixing a major data leakage problem.',
        responsibilities: [
          'Re-architected ML pipeline from ground up',
          'Identified critical data leakage causing overfitting',
          'Implemented robust cross-validation framework',
          'Optimized hyperparameters using Bayesian methods',
          'Deployed production-ready prediction models'
        ],
        achievements: [
          '88% accuracy in stock trend prediction (up from 45%)',
          'R² of 0.98 for volume change metrics',
          '68% accuracy on 20-class classification',
          'Eliminated $100k+ potential trading losses',
          '60% reduction in model training time'
        ],
        stack: ['Python', 'TensorFlow', 'Quantaxis', 'Pandas', 'NumPy', 'Node.js', 'Docker']
      }
    },
    {
      id: 'education-usyd',
      type: 'education',
      institution: 'The University of Sydney',
      degree: 'B. Advanced Computing & Commerce',
      duration: '2020 – 2025',
      location: 'Sydney, Australia',
      summary: 'Double degree · Distinction',
      startYear: 2020,
      endYear: 2025.92,
      side: 'right',
      details: {
        overview: 'Pursuing a double degree combining technical expertise in Computer Science with business acumen from Commerce, maintaining a Distinction grade average throughout.',
        curriculum: [
          'Advanced Algorithms & Data Structures',
          'Machine Learning & AI Systems',
          'Distributed Computing & Cloud Architecture',
          'Business Information Systems',
          'Financial Technology & Analytics'
        ],
        highlights: [
          'Distinction average across 40+ subjects',
          'Focus on ML/AI and full-stack development',
          'Active in competitive programming',
          'Research assistant in NLP lab'
        ]
      }
    }
  ];

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--primary-black)', color: 'var(--primary-white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 20px 80px' }}>
        

        {/* Simplified Timeline */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', minHeight: '1200px' }}>
          
          {/* Simple center line */}
          <div style={{ 
            position: 'absolute', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            top: '0', 
            height: '100%', 
            width: '2px', 
            background: 'linear-gradient(to bottom, var(--primary-white), var(--metallic-dark), var(--secondary-black))',
            zIndex: 0
          }} />

          {/* Experience Cards */}
          <div style={{ width: '100%', maxWidth: '1000px', position: 'relative' }}>
            
            {/* Freelance - Right Side */}
            <div style={{ 
              position: 'absolute', 
              right: '0', 
              top: '0', 
              width: '45%',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '0.2s',
              zIndex: activeCard === 'exp-freelance' ? 30 : 2
            }}>
              {data.filter(d => d.id === 'exp-freelance').map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCard(item.id)}
                  style={{
                    cursor: 'pointer',
                    border: '1px solid var(--secondary-black)',
                    backgroundColor: 'var(--primary-black)',
                    padding: '30px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: activeCard === item.id ? 20 : 1
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'var(--metallic-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--secondary-black)';
                  }}
                >
                  {/* Connection line to timeline */}
                  <div style={{
                    position: 'absolute',
                    left: '-30px',
                    top: '40px',
                    width: '30px',
                    height: '1px',
                    backgroundColor: 'var(--metallic-dark)'
                  }} />
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <FiHome size={20} color="var(--primary-white)" />
                    <span style={{ fontSize: '0.8rem', color: 'var(--metallic-dark)', fontFamily: 'monospace' }}>
                      {item.duration}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '10px', color: 'var(--primary-white)' }}>
                    {item.role}
                  </h3>
                  <p style={{ color: 'var(--metallic)', fontSize: '0.9rem', marginBottom: '15px' }}>{item.company}</p>
                  
                  <p style={{ color: 'var(--metallic-dark)', fontSize: '0.8rem', marginBottom: '20px' }}>{item.summary}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--metallic-dark)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FiMapPin size={12} />
                      {item.location}
                    </span>
                    <div style={{ color: 'var(--metallic-dark)', transition: 'color 0.3s ease' }}>
                      {activeCard === item.id ? <FiMinus size={16} /> : <FiPlus size={16} />}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {activeCard === item.id && (
                    <div style={{ 
                      marginTop: '30px', 
                      paddingTop: '30px', 
                      borderTop: '1px solid var(--secondary-black)',
                      animation: 'fadeIn 0.3s ease-out',
                      position: 'relative',
                      zIndex: 10,
                      backgroundColor: 'var(--primary-black)'
                    }}>
                      <p style={{ color: 'var(--metallic)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                        {item.details.overview}
                      </p>
                      
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ 
                          fontSize: '0.7rem', 
                          textTransform: 'uppercase', 
                          letterSpacing: '1px', 
                          color: 'var(--metallic-dark)', 
                          marginBottom: '10px' 
                        }}>
                          Responsibilities
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {item.details.responsibilities.map((resp, i) => (
                            <li key={i} style={{ 
                              color: 'var(--metallic)', 
                              fontSize: '0.9rem', 
                              display: 'flex', 
                              alignItems: 'flex-start', 
                              gap: '10px',
                              marginBottom: '5px'
                            }}>
                              <span style={{ 
                                width: '4px', 
                                height: '4px', 
                                backgroundColor: 'var(--metallic-dark)', 
                                borderRadius: '50%', 
                                marginTop: '8px',
                                flexShrink: 0
                              }} />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ 
                          fontSize: '0.7rem', 
                          textTransform: 'uppercase', 
                          letterSpacing: '1px', 
                          color: 'var(--metallic-dark)', 
                          marginBottom: '10px' 
                        }}>
                          Key Achievements
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {item.details.achievements.map((achievement, i) => (
                            <li key={i} style={{ 
                              color: 'var(--metallic)', 
                              fontSize: '0.9rem', 
                              display: 'flex', 
                              alignItems: 'flex-start', 
                              gap: '10px',
                              marginBottom: '5px'
                            }}>
                              <span style={{ 
                                width: '4px', 
                                height: '4px', 
                                backgroundColor: 'var(--metallic-dark)', 
                                borderRadius: '50%', 
                                marginTop: '8px',
                                flexShrink: 0
                              }} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 style={{ 
                          fontSize: '0.7rem', 
                          textTransform: 'uppercase', 
                          letterSpacing: '1px', 
                          color: 'var(--metallic-dark)', 
                          marginBottom: '10px' 
                        }}>
                          Tech Stack
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {item.details.stack.map((tech, i) => (
                            <span key={i} style={{ 
                              fontSize: '0.8rem', 
                              padding: '5px 10px', 
                              border: '1px solid var(--secondary-black)', 
                              color: 'var(--metallic-dark)' 
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* YaGao - Left Side */}
            <div style={{ 
              position: 'absolute', 
              left: '0', 
              top: '200px', 
              width: '45%',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '0.4s',
              zIndex: activeCard === 'exp-yagao' ? 30 : 2
            }}>
              {data.filter(d => d.id === 'exp-yagao').map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCard(item.id)}
                  style={{
                    cursor: 'pointer',
                    border: '1px solid var(--secondary-black)',
                    backgroundColor: 'var(--primary-black)',
                    padding: '30px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: activeCard === item.id ? 20 : 1
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'var(--metallic-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--secondary-black)';
                  }}
                >
                  {/* Connection line to timeline */}
                  <div style={{
                    position: 'absolute',
                    right: '-30px',
                    top: '40px',
                    width: '30px',
                    height: '1px',
                    backgroundColor: 'var(--metallic-dark)'
                  }} />
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <FiHome size={20} color="var(--primary-white)" />
                    <span style={{ fontSize: '0.8rem', color: 'var(--metallic-dark)', fontFamily: 'monospace' }}>
                      {item.duration}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '10px', color: 'var(--primary-white)' }}>
                    {item.role}
                  </h3>
                  <p style={{ color: 'var(--metallic)', fontSize: '0.9rem', marginBottom: '5px' }}>{item.company}</p>
                  
                  <a 
                    href={item.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '5px', 
                      fontSize: '0.8rem', 
                      color: 'var(--metallic-dark)', 
                      textDecoration: 'none', 
                      marginBottom: '15px',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--metallic)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--metallic-dark)';
                    }}
                  >
                    <span>Company Wiki (In Chinese)</span>
                    <FiExternalLink size={12} />
                  </a>
                  
                  <p style={{ color: 'var(--metallic-dark)', fontSize: '0.8rem', marginBottom: '20px' }}>{item.summary}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--metallic-dark)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FiMapPin size={12} />
                      {item.location}
                    </span>
                    <div style={{ color: 'var(--metallic-dark)', transition: 'color 0.3s ease' }}>
                      {activeCard === item.id ? <FiMinus size={16} /> : <FiPlus size={16} />}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {activeCard === item.id && (
                    <div style={{ 
                      marginTop: '30px', 
                      paddingTop: '30px', 
                      borderTop: '1px solid var(--secondary-black)',
                      animation: 'fadeIn 0.3s ease-out',
                      position: 'relative',
                      zIndex: 10,
                      backgroundColor: 'var(--primary-black)'
                    }}>
                      <p style={{ color: 'var(--metallic)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                        {item.details.overview}
                      </p>
                      
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ 
                          fontSize: '0.7rem', 
                          textTransform: 'uppercase', 
                          letterSpacing: '1px', 
                          color: 'var(--metallic-dark)', 
                          marginBottom: '10px' 
                        }}>
                          Responsibilities
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {item.details.responsibilities.map((resp, i) => (
                            <li key={i} style={{ 
                              color: 'var(--metallic)', 
                              fontSize: '0.9rem', 
                              display: 'flex', 
                              alignItems: 'flex-start', 
                              gap: '10px',
                              marginBottom: '5px'
                            }}>
                              <span style={{ 
                                width: '4px', 
                                height: '4px', 
                                backgroundColor: 'var(--metallic-dark)', 
                                borderRadius: '50%', 
                                marginTop: '8px',
                                flexShrink: 0
                              }} />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ 
                          fontSize: '0.7rem', 
                          textTransform: 'uppercase', 
                          letterSpacing: '1px', 
                          color: 'var(--metallic-dark)', 
                          marginBottom: '10px' 
                        }}>
                          Key Achievements
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {item.details.achievements.map((achievement, i) => (
                            <li key={i} style={{ 
                              color: 'var(--metallic)', 
                              fontSize: '0.9rem', 
                              display: 'flex', 
                              alignItems: 'flex-start', 
                              gap: '10px',
                              marginBottom: '5px'
                            }}>
                              <span style={{ 
                                width: '4px', 
                                height: '4px', 
                                backgroundColor: 'var(--metallic-dark)', 
                                borderRadius: '50%', 
                                marginTop: '8px',
                                flexShrink: 0
                              }} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 style={{ 
                          fontSize: '0.7rem', 
                          textTransform: 'uppercase', 
                          letterSpacing: '1px', 
                          color: 'var(--metallic-dark)', 
                          marginBottom: '10px' 
                        }}>
                          Tech Stack
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {item.details.stack.map((tech, i) => (
                            <span key={i} style={{ 
                              fontSize: '0.8rem', 
                              padding: '5px 10px', 
                              border: '1px solid var(--secondary-black)', 
                              color: 'var(--metallic-dark)' 
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Education - Right Side */}
            <div style={{ 
              position: 'absolute', 
              right: '0', 
              top: '600px', 
              width: '45%',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '0.6s',
              zIndex: activeCard === 'education-usyd' ? 30 : 2
            }}>
              {data.filter(d => d.id === 'education-usyd').map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCard(item.id)}
                  style={{
                    cursor: 'pointer',
                    border: '1px solid var(--secondary-black)',
                    backgroundColor: 'var(--primary-black)',
                    padding: '30px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: activeCard === item.id ? 20 : 1
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'var(--metallic-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--secondary-black)';
                  }}
                >
                  {/* Connection line to timeline */}
                  <div style={{
                    position: 'absolute',
                    left: '-30px',
                    top: '40px',
                    width: '30px',
                    height: '1px',
                    backgroundColor: 'var(--metallic-dark)'
                  }} />
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <FiBookOpen size={20} color="var(--metallic-dark)" />
                    <span style={{ fontSize: '0.8rem', color: 'var(--metallic-dark)', fontFamily: 'monospace' }}>
                      {item.duration}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '10px', color: 'var(--primary-white)' }}>
                    {item.degree}
                  </h3>
                  <p style={{ color: 'var(--metallic)', fontSize: '0.9rem', marginBottom: '15px' }}>{item.institution}</p>
                  
                  <p style={{ color: 'var(--metallic-dark)', fontSize: '0.8rem', marginBottom: '20px' }}>{item.summary}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--metallic-dark)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FiMapPin size={12} />
                      {item.location}
                    </span>
                    <div style={{ color: 'var(--metallic-dark)', transition: 'color 0.3s ease' }}>
                      {activeCard === item.id ? <FiMinus size={16} /> : <FiPlus size={16} />}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {activeCard === item.id && (
                    <div style={{ 
                      marginTop: '30px', 
                      paddingTop: '30px', 
                      borderTop: '1px solid var(--secondary-black)',
                      animation: 'fadeIn 0.3s ease-out',
                      position: 'relative',
                      zIndex: 10,
                      backgroundColor: 'var(--primary-black)'
                    }}>
                      <p style={{ color: 'var(--metallic)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                        {item.details.overview}
                      </p>
                      
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ 
                          fontSize: '0.7rem', 
                          textTransform: 'uppercase', 
                          letterSpacing: '1px', 
                          color: 'var(--metallic-dark)', 
                          marginBottom: '10px' 
                        }}>
                          Core Curriculum
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {item.details.curriculum.map((course, i) => (
                            <li key={i} style={{ 
                              color: 'var(--metallic)', 
                              fontSize: '0.9rem', 
                              display: 'flex', 
                              alignItems: 'flex-start', 
                              gap: '10px',
                              marginBottom: '5px'
                            }}>
                              <span style={{ 
                                width: '4px', 
                                height: '4px', 
                                backgroundColor: 'var(--metallic-dark)', 
                                borderRadius: '50%', 
                                marginTop: '8px',
                                flexShrink: 0
                              }} />
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 style={{ 
                          fontSize: '0.7rem', 
                          textTransform: 'uppercase', 
                          letterSpacing: '1px', 
                          color: 'var(--metallic-dark)', 
                          marginBottom: '10px' 
                        }}>
                          Highlights
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {item.details.highlights.map((highlight, i) => (
                            <li key={i} style={{ 
                              color: 'var(--metallic)', 
                              fontSize: '0.9rem', 
                              display: 'flex', 
                              alignItems: 'flex-start', 
                              gap: '10px',
                              marginBottom: '5px'
                            }}>
                              <span style={{ 
                                width: '4px', 
                                height: '4px', 
                                backgroundColor: 'var(--metallic-dark)', 
                                borderRadius: '50%', 
                                marginTop: '8px',
                                flexShrink: 0
                              }} />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;