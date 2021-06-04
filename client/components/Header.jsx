import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  color: red;
  background: black;
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow:hidden;
`;

const Head = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  background: greenyellow;
  margin: 5vmin;
  height: 90vh;
  overflow: hidden;
`;

const ProjectLink = styled.div`
  width: 40vw;
`;

const ContactLink = styled.div`
  width: 60vw;
`;

const BgPhoto = styled.div`
  z-index: 2;
  position: fixed;
  margin: 5vmin;
  height: 90vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 35%;
  background-image: url('https://www.dejan.works/img/DejanHome.png');
  /* https://www.dejan.works/img/DejanHome.png
  https://general-ez.s3-us-west-1.amazonaws.com/port3.png
  */
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-animation: bg-photo 1.2s cubic-bezier(.5, .6, .6, 1);
  -moz-animation: bg-photo 1.2s cubic-bezier(.5, .6, .6, 1);
  animation: bg-photo 1.2s cubic-bezier(.5, .6, .6, 1);
  -webkit-animation-fill-mode: backwards;
  -moz-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
`;

const Header = () => {
  const [projects, setProjects] = useState('Hello.')
  const [about, setAbout] = useState('I am')
  const [contact, setContact] = useState('Esteban')
  return (
    <Container>
      <Head>
        <div id="text">
          <ProjectLink>
            <Link to={{ pathname: '/projects' }}>
              <h1 className="one"
                onMouseEnter={() => setProjects('Projects')}
                onMouseLeave={() => setProjects('Hello.')}>{projects}</h1>
            </Link>

            <Link to={{ pathname: '/about' }}>
              <h1 onClick={()=> {}} onMouseEnter={() => setAbout('About')}
              onMouseLeave={() => setAbout('I am')}>{about}</h1>
            </Link>
          </ProjectLink>

          <ContactLink>
            <Link to={{ pathname: '/contact' }}>
              <h1 onMouseEnter={() => setContact('Contact')}
              onMouseLeave={() => setContact('Esteban')}>{contact}</h1>
            </Link>
          </ContactLink>
        </div>
      </Head>

      <BgPhoto>
      </BgPhoto>
    </Container>
  )
}

export default Header
