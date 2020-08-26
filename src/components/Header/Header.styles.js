import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #121212;
  padding: 10px;
`;

export const HeaderBrand = styled.div`
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 15px;
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-right: 20px;
`;

export const HeaderLink = styled.div`
  a {
    text-decoration: none;
    color: white;
  }
  font-weight: bold;
  text-align: center;
  margin: 5px;
  margin-right: 10vw;
  a:hover {
    color: #789abc;
    transition: 0.5s ease;
  }
`;
