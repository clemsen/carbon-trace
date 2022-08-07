import styled from "styled-components";

const StyleHomepage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .homepage-title {
    font-size: 45px;
    font-weight: 800;
  }

  .homepage-body {
    font-size: 18px;
  }

  .homepage-search-bar {
    width: 540px;
  }
`;

export default StyleHomepage;
