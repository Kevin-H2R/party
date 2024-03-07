import styled from "styled-components";

const LoginContainer = styled.div`
  background: linear-gradient(180deg, #FFFFFF 2.5%, rgba(255, 255, 255, 0.15) 21.5%, rgba(255, 232, 249, 0.52) 43.5%, rgba(228, 204, 255, 0.88) 100%);
  .card {
    border-radius: 20px;
    box-shadow: 0px 4px 10px 0px #0000004D;
    background: white;
    .title {
      border-bottom: 1px solid #D9D9D9;
    }
    .login-input {
      border: 1px solid #676363;
      border-radius: 5px;
      padding: 8px;
      width: 100%;
    }
    .register-link {
      color: #676363;
    }
  }
`

export {LoginContainer}