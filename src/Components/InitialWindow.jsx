import React, {useEffect} from 'react'
import styled from "styled-components"
import Typed from 'typed.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faYoutube, faGithub, faInstagram, faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons'

const InitialWindow = () => {
    const name = 'Kiran PK';
    const ele = React.useRef(null);
    const typed = React.useRef(null);
    // console.log(Data.main.social);
    useEffect(() => {
        const options = {
        strings : ["Maker.", "Developer.", "Designer.","Youtuber."],
            typeSpeed: 100,
            backSpeed: 80,
            loop: true
        }
    typed.current = new Typed(ele.current, options)
    return() => typed.current.destroy();
        },[])
    return (
        <Header>
            <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
    
            <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            </ul>
    
            </nav>
    
            <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">I'm {name}.</h1>
                <div className="container_div1">
                    <p>I'm a <span className="typed-text"></span><span className="TypeCursor" ref={ele}>&nbsp;</span></p>
                </div>
                <hr />
                <ul className="social">
                    {/* {networks} */}
                    <li><a href='/'><i>
                    <FontAwesomeIcon icon={faFacebook} />
                    </i></a></li>

                    <li><a href='/'><i>
                    <FontAwesomeIcon icon={faYoutube} />
                    </i></a></li>
                    
                    <li><a href='/'><i>
                    <FontAwesomeIcon icon={faGithub} />
                    </i></a></li>
                    
                    <li><a href='/'><i>
                    <FontAwesomeIcon icon={faLinkedin} />
                    </i></a></li>
                    
                    <li><a href='/'><i>
                    <FontAwesomeIcon icon={faInstagram} />
                    </i></a></li>

                    <li><a href='/'><i>
                    <FontAwesomeIcon icon={faTwitter} />
                    </i></a></li>
                    
                </ul>
            </div>
            </div>
    
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
    
            </Header>
        
    )
}

export default InitialWindow;


const Header = styled.header`
    /* background-color: #1d1717; */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    width: 100%;
    padding: 0;
    margin: 0;
    &:before{
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    }
        #nav-wrap ul, #nav-wrap li, #nav-wrap a {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
    }

    #nav-wrap {
    font: 12px 'opensans-bold', sans-serif;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin: 0 auto;
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    }
    .opaque { background-color: #333; }

    #nav-wrap > a.mobile-btn { display: none; }

    ul#nav {
    min-height: 48px;
    width: auto;
    text-align: center;
    }
    ul#nav li {
    position: relative;
    list-style: none;
    height: 48px;
    display: inline-block;
}
    ul#nav li a {

    display: inline-block;
    padding: 8px 13px;
    line-height: 32px;
        text-decoration: none;
    text-align: left;
    color: #fff;

        -webkit-transition: color .2s ease-in-out;
        -moz-transition: color .2s ease-in-out;
        -o-transition: color .2s ease-in-out;
        -ms-transition: color .2s ease-in-out;
        transition: color .2s ease-in-out;
    }

    ul#nav li a:active { background-color: transparent !important; }
    ul#nav li.current a { color: #F06000; }

    .banner{
        display: inline-block;
        vertical-align: middle;
        margin: 0 auto;
        width: 85%;
        padding-bottom: 30px;
        text-align: center;
        }
    .banner-text { width: 100%; }
    .banner-text h1 {
        font-size: 3em ;
        font-family:'opensans-bold', sans-serif;
        color: #fff;
        letter-spacing: -2px;
        margin: 0 auto 18px auto;
        text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);
        }
    .banner-text h3 {
        font: 18px/1.9em 'librebaskerville-regular', serif;
        color: #A8A8A8;
        margin: 0 auto;
        width: 70%;
        text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
        }
    .banner-text h3 span a{
        color: #fff;
    }
    .banner-text hr {
    width: 60%;
    margin: 18px auto 24px auto;
    border-color: #2F2D2E;
    border-color: rgba(150, 150, 150, .1);
    }
    .container_div1 {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .container_div1 p {
    font-size: 1.5rem;
    color: #5a5858;
    letter-spacing: 0.1rem;
    text-align: center;
    overflow: hidden;
    }
    .TypeCursor{
        color: #dd7732;
    }
    .typed-cursor{
    opacity: 1;
    color: #dd7732;
    animation: typedjsBlink 0.7s infinite;
    -webkit-animation: typedjsBlink 0.7s infinite;
    animation: typedjsBlink 0.7s infinite;
    }
    @keyframes typedjsBlink{
    50% { opacity: 0.0; }
    }
    @-webkit-keyframes typedjsBlink{
    0% { opacity: 1; }
    50% { opacity: 0.0; }
    100% { opacity: 1; }
    }
    .typed-fade-out{
    opacity: 0;
    transition: opacity .25s;
    -webkit-animation: 0;
    animation: 0;
    }
    @media (max-width:750px) {
    .container_div1 p {
        font-size: 2rem;
        }
    }
    .social {
    margin: 24px 0;
    padding: 0;
    font-size: 30px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, .8);
    }

    .social li {
   display: inline-block;
   margin: 0 15px;
   padding: 0;
}
    .social li a { color: #fff; }
    .social li a:hover { color: #11ABB0; }

    .scrolldown a {
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -29px;
    color: #fff;
    display: block;
    height: 42px;
    width: 42px;
    font-size: 42px;
    line-height: 42px;
    color: #fff;
    border-radius: 100%;

    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    }
    .scrolldown a:hover { color: #11ABB0; }
`