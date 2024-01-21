import styled from "styled-components";
import landing from "../../assets/landing.jpg"

const HomeContainer = styled.div`
background-image: url(${landing});
background-size: cover;
filter: opacity;
height: 100%;
`

export {
  HomeContainer
}