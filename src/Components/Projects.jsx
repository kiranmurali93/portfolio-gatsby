import React from 'react';
import styled from 'styled-components';
import ProjectCards from './ProjectCards';
import {portfolio} from '../data/resumeData.json'

const Projects = () => {
    return (
        <MyWorkDiv>
            <h2>Projects</h2>
            <div className='projectCardsDiv' >
                {portfolio.projects?.map((project) => {
                    return <ProjectCards project = {project}/>
                })}
            </div>
        </MyWorkDiv>
    )
};

export default Projects;

const MyWorkDiv = styled.div`
    color: #fff;
    padding-bottom: 46px;
    padding-top: 46px;
    font-size: calc(10px + 2vmin);
    font-family: 'opensans-bold', sans-serif;
    text-align: center;
    .projectCardsDiv{
        grid-template-columns: repeat(auto-fit,minmax(12rem,16rem));
        gap: 3rem;
        justify-content: center;
        display: grid;

    }
`
