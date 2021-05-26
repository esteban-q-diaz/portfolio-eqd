import React, {useState} from 'react';
import { ImNext, ImPrevious } from 'react-icons/im';
import {projects} from '../../project-data.js'

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
      <div className="projects">
<div className="previous">
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
        </div>


      </div>
    </>
  )
}

export default Projects