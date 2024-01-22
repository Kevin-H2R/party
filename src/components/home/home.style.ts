import styled from "styled-components";
import landing from "../../assets/landing.png"

const HomeContainer = styled.div`
background-image: url(${landing});
background-size: cover;
filter: opacity;
height: 100%;

button {
  background: #A3F074;
  &:hover {
    color: initial;
    border-color: transparent;
  }
}
`

export {
  HomeContainer
}