import styled from "styled-components";

const LoginContainer = styled.div`
  background: linear-gradient(180deg, #FFFFFF 2.5%, rgba(255, 255, 255, 0.15) 21.5%, rgba(255, 232, 249, 0.52) 43.5%, rgba(228, 204, 255, 0.88) 100%);
  .login-input {
    border: 1px solid #676363;
    border-radius: 5px;
    padding: 8px;
    width: 100%;
    font-weight: normal;
    &:focus-visible {
      outline: none;
    }
  }
  .register-link {
    color: #676363;
  }
  .grouped-input-top {
    border-radius: 5px 5px 0 0;
  }
  
  .grouped-input-bottom {
    border-radius: 0 0 5px 5px;
    border-top: none;
  }
`

export {LoginContainer}