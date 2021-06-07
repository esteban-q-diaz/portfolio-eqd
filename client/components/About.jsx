import React from 'react';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  background: greenyellow;
  margin: 3vmin;
  height: 90vh;
  color: black;
  overflow-y: scroll;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 3;
`;

const Right = styled.div`
  flex: 1;
  img {
    width: 50px;
    cursor: pointer;
  }
`;

const Description = styled.div`
  text-align: left;
  margin: 0px 7vmin 0px 7vmin;
  line-height: 30px;
  font-size: 2.5vmin;
`;

const About = () => {
  return (
  <>
  <AboutContainer>
        <Title>
          <Left>
            <h1>About</h1>
          </Left>

          <Right>
            <img src="https://general-ez.s3-us-west-1.amazonaws.com/port2.png" />
          </Right>
        </Title>

        <Description>
          <p>
          My software engineering career began with music. I was diligently pursuing a full-time career as a DJ/Music producer artist and to give myself a better chance at success, I had to be multi-dimensional. I set goals and deliverables, handled bookings and one of the most life-changing things I learned was creating my artist website.
          <br/>
          <br/>
          I've always been interested in problem-solving and the more I dove into programming the more my passion for creating full-stack web/mobile applications grew. I am now a full-stack engineer proficient in creating user-friendly front-ends with the ability to optimize backends to handle a large amount of data inputs.
          <br/>
          <br/>
          You can check out my projects here: https://github.com/esteban-q-diaz/
          <br/>
          <br/>
          Please feel free to message me!
          <br/>
          <br/>
          Frontend: React / React Native / Redux, Axios, ES6, Backbone, HTML, CSS, jQuery, Babel, Webpack
          Backend: Node.js, Express
          Databases: MySQL, PostgreSQL, MongoDB, Mongoose, SQLite
          Deployment: Docker, AWS (EC2, S3)
          Testing: Jest, Enzyme, Mocha / Chai,
          Tools: Git, Github, NPM
          </p>
        </Description>

      </AboutContainer>
    </>
  )
}

export default About