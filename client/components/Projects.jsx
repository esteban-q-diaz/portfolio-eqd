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
  /* border: 1px solid; */
  margin: 0 0.7rem;
  padding: 10px;
  margin: 10px;
  margin: 10% 4% 0px 4%;
  flex: 1 100%;
  margin-right: 30%;
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
    /* background: blue; */
    margin-left: 20%;
    margin-right: 20%;
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
`;

const ProjectFlex = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  height: auto;
  overflow: auto;
  margin: 0px 4vmin 0px 4vmin;
   @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Project = styled.div1`
  display: flex;
  height: 100%;
  background-color: red;
  border: 1px solid;
  /* margin: 0 0.7rem; */
  /* padding: 10px; */
  margin: 10px;
  flex: 1 100%;
  img {
    width: 40vmin;
    height: 30vmin;
  };
  p {
    font-size: 2vmin;
  }
  align-content: center;
  flex-wrap: wrap;
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
            <p>I build applications usgin blank and blank.  With every project I love to learn and explore new technologies and pracitce industry standarad code</p>
          </HeadingText>

          <ProjectFlex>
            <Project>
              <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" />
            </Project>
            <Project>
              <p>This is the information about this one app</p>
            </Project>
          </ProjectFlex>

          <ProjectFlex>
            <Project>
              <p>This is the information about this one app</p>
            </Project>
            <Project>
              <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" />
            </Project>
          </ProjectFlex>

          <ProjectFlex>
            <Project>
              <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" />
            </Project>
            <Project>
              <p>This is the information about this one app</p>
            </Project>
          </ProjectFlex>

          <ProjectFlex>
            <Project>
              <p>This is the information about this one app</p>
            </Project>
            <Project>
              <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" />
            </Project>
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