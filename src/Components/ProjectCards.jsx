import React from 'react'
import styled from 'styled-components';
// import { Cards } from 'react-responsive-cards'

const ProjectCards = ( props ) => {
      return (
        <Card>
          <a href= {props.project.url} target="_blank">
          <div className='card_body'>
            <img src={props.project.image}></img>
            <h2 className='card_title'>{props.project.title}</h2>
            <p className='card_description'>{props.project.description}</p>
          </div>
            <div className='card_button_div'>
            {props.project.category.map((value) => {
              return <button className='card_button' >{value}</button>
            })}
            </div>

          </a>
        </Card>
      );
}

export default ProjectCards

const Card = styled.div`
  overflow: hidden;
  display: flex;
  box-shadow: 0 2px 15px;
  flex-direction: column;
  border-radius: 10px;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 200ms ease-in;
  font-size: calc(10px + 2vmin);
  img{
    height: 12rem;
    width: 100%;
    object-fit: cover;
  }
  a{
    color: #fff;
    text-decoration: none;
  }
  .card_title{
    padding: 1rem;
    font-size: calc(5px + 2vmin);
  }
  .card_description{
    padding: 0 1rem;
    font-size: calc(2px + 2vmin);
  }
  .card_button_div{
    display: flex;
    justify-content: space-around;
    padding: 10px;
    padding-bottom: 30px;
  }
  .card_button{
    width: 40%;
    font-size: calc(5px + 1vmin);;
  }
`