import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = () => {
  return (
    <MacWindow>
        <div className="resume-window">
            <iframe src="./YUG-MALVIYA-Resume.pdf" frameBorder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume