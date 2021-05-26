import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [projects, setProjects] = useState('Hello.')
  const [about, setAbout] = useState('I am')
  const [contact, setContact] = useState('Esteban')
  return (
    <div className="header-bg">
      <div className="header">

        <div id="text">
          <div id="projects-link">
          <Link to={{ pathname: '/projects' }}>
            <h1 className="one"
              onMouseEnter={() => setProjects('Projects')}
              onMouseLeave={() => setProjects('Hello.')}>{projects}</h1>
          </Link>
          </div>

          <div id="about-link">
            <Link to={{ pathname: '/about' }}>
              <h1 onClick={()=> {}} onMouseEnter={() => setAbout('About')}
              onMouseLeave={() => setAbout('I am')}>{about}</h1>
            </Link>
          </div>

          <div id="contact-link">
            <Link to={{ pathname: '/contact' }}>
              <h1 onMouseEnter={() => setContact('Contact')}
              onMouseLeave={() => setContact('Esteban')}>{contact}</h1>
            </Link>
          </div>

        </div>
      </div>

      <div className="bg-photo">
      </div>
    </div>
  )
}

export default Header