import React, {useState} from 'react';

const NavBar = () => {
  const [projects, setProjects] = useState('Hello.')
  const [about, setAbout] = useState('I am')
  const [contact, setContact] = useState('Esteban')
  let w = window.innerWidth
  return (
    <>
      <div className="header-container">
        <div id="text">
          <h1 onMouseEnter={() => setProjects('Projects')}
          onMouseLeave={() => setProjects('Hello.')}>{projects}</h1>
          {/* <h1 onMouseEnter={() => setAbout('About')}
          onMouseLeave={() => setAbout('I am')}>{about}</h1>
          <h1 onMouseEnter={() => setContact('Contact')}
          onMouseLeave={() => setContact('Esteban')}>{contact}</h1> */}
        </div>

        <div id="image">
          <img id="source-image" src="../port2.png"/>
        </div>
      </div>
    </>
  )
}

export default NavBar