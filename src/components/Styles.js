import styled from "styled-components";

export const AppBlock = styled.div`
  background-color: aliceblue;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: black;
  margin: 0;
`;
export const FoodDisplayBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: aliceblue;
`;
export const SearchForm = styled.div`
  width: 300px;
  padding: 5px;
  display: block;
  position: relative;
  margin: 0 auto;
`;
export const Form = styled.form`
  padding: 10px;
  width: 100%;
  height: 80px;
`;
export const SearchBox = styled.input`
  width: 200px;
  height: 30px;
`;
export const SearchButton = styled.button`
  height: 30px;
  margin-left: 10px;
`;
export const SearchDisplayMessage = styled.h1`
  text-align: center;
  font-size: 1.3rem;
`;
export const FetchingMessage = styled.h1`
  text-align: center;
  font-size: 1.3rem;
`;
export const FoodTitle = styled.h1`
  padding: 10px;
  font-size: 2rem;
`;

export const FoodBox = styled.div`
  width: 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
export const FoodImage = styled.img`
  padding: 10px;
  border-radius: 10px;
  transition: transform .5s;
  &:hover {
    transform: scale(1.2);
  }
`;
export const FoodLink = styled.a`
  color: black;
  text-decoration: none;
`;
