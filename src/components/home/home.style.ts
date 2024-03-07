import styled from "styled-components";

const HomeContainer = styled.div`
.main-image {
  aspect-ratio: 1;
  width: 500px;
  box-shadow: 0px 10px 10px 0px #0000001A;
}
.left-pane {
  background: linear-gradient(180deg, rgba(228, 204, 255, 0) -12.5%, rgba(228, 204, 255, 0) 7.15%, rgba(228, 204, 255, 0.59) 100%, #F5F5F5 100%);
}
.right-pane {
  background: url('./gather.jpg');
  background-size: cover;
  background-position: left center;
}
.text-gradient {
  color: black;
  background: linear-gradient(rgba(250, 115, 120, 0.19), #9529B0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`

const HomeContainerMobile = styled.div`
background: linear-gradient(180deg, rgba(228, 204, 255, 0) -12.5%, rgba(228, 204, 255, 0) 7.15%, rgba(228, 204, 255, 0.59) 100%, #F5F5F5 100%);
.text-gradient {
  color: black;
  background: linear-gradient(rgba(250, 115, 120, 0.19), #9529B0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gather-image {
  aspect-ratio: 1;
  border-radius: 50%;
}
`

export {
  HomeContainer,
  HomeContainerMobile
}