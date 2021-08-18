import React from 'react'
import styled from 'styled-components'
import { faDownload} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    return (
        <Section>
        <SectionMainDiv>
                <h1>About Me</h1>
                <p>Computer Science Undergrad at School Of Engineering, CUSAT. I'm from Kerala,India. I'm a student developer and an organiser for different tech events.</p>
                <div className="row">
                
                <Button className="download">
                    <p>
                    <FontAwesomeIcon icon={faDownload} /> 
                        <a href="https://kiranmurali93.github.io/portfolio-react/resume/Kiran_PK_Resume.pdf" className="button">
                            Download Resume
                        </a>
                    </p>
                </Button>
                </div>
        
        </SectionMainDiv>

    </Section>
    )
}

const Section = styled.section`
    /* background: #1d1717; */
    padding-top: 46px;
    padding-bottom: 66px;
    overflow: hidden;
    font-size: calc(4px + 2vmin);
    text-align: center;
    h1 {
        font-family: 'opensans-bold', sans-serif;
        color: #fff;
        margin-bottom: 12px;
    }
    p{
        color: #7A7A7A;;
    }
    
`

const SectionMainDiv = styled.div`
    align-items: center;
    margin: 18px;
    .download{
        background-color: #444;
        margin-left: auto;
        margin-right: auto;
        p {
            color: #fff;
        }
    }
`
const Button = styled.button`
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    a{
        color: #fff;
        text-decoration: none;
        padding: 10px;
    }
`

export default About
