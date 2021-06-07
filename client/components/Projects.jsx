import React, {useState} from 'react';
import { ImNext, ImPrevious } from 'react-icons/im';
import {projects} from '../../project-data.js';
import styled from '@emotion/styled';

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: white;
  height: 100%;
  width: 100vw;
`;

const InnerBox = styled.div`
  background-color: lightpink;
  margin: 1% 0px 1% 0px;
  width: 98vw;
  height: 100%;
`;

const HeadingText = styled.div`
  color: white;
  /* background-color: orange; */
  text-align: left;
  height: auto;
  margin: 0 0.7rem;
  padding: 10px;
  margin: 10px;
  margin: 10% 4% 0px 4%;
  flex: 1 100%;
  margin-right: 30%;
  margin-left: 10vmin;
  margin-right: 10vmin;
  h1, p {
    /* background: purple; */
    margin: 0;
    width: 100%;
  }
  h1 {
    font-size: 5vmin;
  }
  p {
    font-size: 2.2vmin;
  }
   @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    margin-left: 20%;
    margin-right: 20%;
    h1 {
      font-size: 8vmin;
    }
    p {
      font-size: 3.5vmin;
  }
  }
  @media (min-width: 1500px) {
    margin-left: 25vmin;
    margin-right: 25vmin;
  }
  @media (min-width: 2000px) {
    margin-left: 35vmin;
    margin-right: 35vmin;
  }
`;

const Line = styled.div`
  height: 2px;
  width: 10%;
  border-radius: 25px;
  border: 1px solid green;
  background: green;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-top: -10px;
    margin-bottom: 10px;
  }
`;

const ProjectFlex = styled.div`
/* background: orange; */
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;
  height: auto;
  overflow: auto;
  margin: 60px 4vmin 60px 4vmin;
  margin-left: 10vmin;
  margin-right: 10vmin;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 4vmin;
    margin-right: 4vmin;
    border-bottom: 1px solid lightblue;
  }
  @media (min-width: 1500px) {
    margin-left: 25vmin;
    margin-right: 25vmin;
  }
  @media (min-width: 2000px) {
    margin-left: 35vmin;
    margin-right: 35vmin;
  }
`;

const Project = styled.div`
  display: flex;
  height: 100%;
  /* background-color: red; */
  margin: 10px;
  flex: 1 100%;
  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  };
   {
    width: 40vmin;
    height: 30vmin;
  };
  span {
    font-size: 4vmin;
    font-weight: 900;
  };
  p {
    font-size: 1.6vmin;
  }
  align-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 20vmin;
    margin-right: 20vmin;
    h1 {
      font-size: 7vmin;
    }
    p {
      font-size: 3vmin;
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  input {
    height: 2.3vmin;
    width: 7vmin;
    border: 1px solid black;
    margin-right: 4vmin;
    border-radius: 10px;
    align-items: center;
    color: white;
    font-size: 1.3vmin;
    text-align: center;
  }
`

const Projects = () => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    if(current === projects.length-1) {
      setCurrent(p=>p=0)
    } else {
      setCurrent(p=>p+1)
      console.log(current)
    }
  }

  const previous = () => {
    if(current === 0) {
      setCurrent(p=>p=projects.length-1)
    } else {
      setCurrent(p=>p-1)
      console.log(current)
    }
  }
  return (
    <>
      <ProjectsContainer>
        <InnerBox>
          <HeadingText>
            <h1>About my work.</h1>
            <Line>

            </Line>
            <p>I build applications usgin blank and blank.  With every project I love to learn and explore new technologies and pracitce industry standarad code. I belive in the motto learn, adapt, grow and I approach all aspects of life with those three words</p>
          </HeadingText>

          <ProjectFlex>
            <Project>
              <img src="https://general-ez.s3-us-west-1.amazonaws.com/spotioke.png" />
            </Project>
            <Project>
              <p>is an application where users can do this and that. I worked on this with a team of two engineers Jeremey Fujimoto and Hayley Jones. Together we developed this application from the ground up <br/><br/> We used the following teachnologies: React, NodeJS, ExpressJS, MongoDB, Spotify WEB API, Lyrics API, Emotions Styled Components. It was an amazing experience I hope you enjoy singing along as much as I do.</p>
              <ButtonContainer>
                <input type="submit" value=
            'Live' />
                <input type="submit" value='Repo'/>
              </ButtonContainer>
            </Project>
          </ProjectFlex>

          <ProjectFlex>
            <Project>
            <p>REI Clone. For this project I recreted a Micro Serive that is part of the REI website. I created a clone of the REI Reviews Micro Service.  This clone has the following functionality: you can sort by reviews, sort by starts, input a new review using the review form <br/><br/> Tech Stack: React, NodeJS, ExpressJS, PostgreSQL, Faker (to generate fake reviews).</p>
              <ButtonContainer>
                <input type="submit" value=
            'Live' />
                <input type="submit" value='Repo'/>
              </ButtonContainer>
            </Project>
            <Project>
              <img src="https://general-ez.s3-us-west-1.amazonaws.com/rei.png" />
            </Project>
          </ProjectFlex>

          <ProjectFlex>
            <Project>
              <img src="https://general-ez.s3-us-west-1.amazonaws.com/airbnb.png" />
            </Project>
            <Project>
            <p><span>Airbnb Clone</span><br/><br/> Airbnb Clone. For this project I recreted a Micro Serive that is part of the Airbnb website. I created a clone of the Airbnb Photo Gallery Service.  This clone has the following functionality: you can open and close the search menu (search not available atm), you can click on the "show more photos" to get all pics associated with that Airbnb <br/><br/> Tech Stack: React, NodeJS, ExpressJS, MySQL.</p>
              <ButtonContainer>
                <input type="submit" value=
            'Live' />
                <input type="submit" value='Repo'/>
              </ButtonContainer>
            </Project>
          </ProjectFlex>

          <ProjectFlex>
            {/* <Project>
              <p><span>Weather App</span><br/><br/> Weather App. For this project I created a Weather App where users can search for their local weather.  <br/><br/> Tech Stack: React, NodeJS, ExpressJS, MySQL.</p>
              <ButtonContainer>
                <input type="submit" value=
            'Live' />
                <input type="submit" value='Repo'/>
              </ButtonContainer>
            </Project>
            <Project>
              <img src="https://general-ez.s3-us-west-1.amazonaws.com/airbnb.png" />
            </Project> */}
          </ProjectFlex>


        {/* <div className="previous">
          <ImPrevious size={50} onClick={() => {
            previous()
          }}/>
      </div>
        <div className="project-cards">
          <div className="project-image">
            <img src={projects[current].image} />
          </div>
          <div className="project-text">
            <h1>{projects[current].name}</h1>
            <p>{projects[current].desc}</p>
        </div>
        <div className="buttons">
          <div>
            <a href={projects[current].live} target="blank">
          <input type="submit" value="Live" />
          </a>
          </div>

          <div>
          <input type="submit" value="Repo"/>
          </div>
        </div>


        </div>

        <div className="next">
          <ImNext size={50} onClick={() => {
            next()
          }}/>
        </div> */}
        </InnerBox>

      </ProjectsContainer>
    </>
  )
}

export default Projects