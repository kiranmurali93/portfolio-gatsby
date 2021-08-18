import * as React from "react"
import styled from "styled-components"
import InitialWindow from "../Components/InitialWindow"
import About from "../Components/About"
import Skills from "../Components/Skills"
import Hr from "../Components/Hr"
import Projects from "../Components/Projects"

//styles
const Main = styled.main`
  margin: 0;
  padding: 0;
  background-image: linear-gradient(#000000,#302323);
  /* background-color: #1d1717; */
`

const IndexPage = () => {
  return (
    <Main>
      <title>Kiran PK | Portfolio</title>
      {/* main page */}
      < InitialWindow />
      <Hr />
      {/* about */}
      < About />
      <Hr />
      {/* skills */}
      < Skills />
      <Hr />
      {/* my works */}
      <Projects />
      <Hr />
      {/* experience */}
      {/* education */}
    </Main>
  )
}

export default IndexPage
