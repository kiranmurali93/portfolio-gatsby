import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs, faPython, faGit } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
        <SkillDiv>
            <div>
                <h2>Skills</h2>
            </div>
            <div className='techLogo' >
            <li><FontAwesomeIcon icon={faReact} /> </li>
            <li><FontAwesomeIcon icon={faNodeJs} /> </li>
            <li><FontAwesomeIcon icon={faPython} /> </li>
            <li><FontAwesomeIcon icon={faGit} /> </li>

            </div>
        </SkillDiv>
    )
}

export default Skills

const SkillDiv = styled.div`
    /* background-color: #1d1717; */
    padding-top: 46px;
    font-size: calc(10px + 2vmin);
    text-align: center;
    padding-bottom: 46px;
    h2{
        margin-top: 0;
        font-family: 'opensans-bold', sans-serif;
        color: #fff;
    }
    .techLogo li{
        display: inline-block;
        color: #fff;
        margin: 0 15px;
        padding: 0;
    }
`