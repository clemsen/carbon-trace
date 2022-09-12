import styled from "styled-components";

export const SpinnerStyle = styled("div")`
  border: 5px solid transparent;
  border-top: 5px solid #2ace5e;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  margin-left: auto;
  margin-right: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
