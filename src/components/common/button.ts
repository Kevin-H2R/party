import styled from "styled-components";

const Button = styled.button<{ $primary?: boolean; $rounded?: boolean }>`
  background: ${props => props.$primary ? "#A3F074": "initial"};
  padding: 0.65rem 1rem;
  color: black;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: ${props => props.$rounded ? '9999px': '10px'};
  &:hover {
    color: initial;
    border-color: transparent;
  }
`

export {Button}