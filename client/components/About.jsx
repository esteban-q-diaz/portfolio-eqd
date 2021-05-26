import React from 'react';

const About = () => {
  return (
  <>
      <div className="about">
        <div className="title">
          <div className="left">
            <h1>About</h1>
          </div>

          <div className="right">
            <img src="https://general-ez.s3-us-west-1.amazonaws.com/port2.png" />
          </div>
        </div>
        <div className="description">
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
        </div>
      </div>


    </>
  )
}

export default About