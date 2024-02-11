import styled from "styled-components";

const HomeContainer = styled.div`
button {
  background: #A3F074;
  &:hover {
    color: initial;
    border-color: transparent;
  }
}
.main-image {
  aspect-ratio: 1;
  width: 500px;
  box-shadow: 0px 10px 10px 0px #0000001A;
}
.left-pane {
  background: linear-gradient(180deg, rgba(228, 204, 255, 0) -12.5%, rgba(228, 204, 255, 0) 7.15%, rgba(228, 204, 255, 0.59) 100%, #F5F5F5 100%);
}
.right-pane {
  background: linear-gradient(180deg, #FFFFFF 3.85%, rgba(255, 255, 255, 0.145) 38.12%, rgba(250, 249, 252, 0.246972) 61.1%, #D9CEE8 99.22%);
}
`

export {
  HomeContainer
}