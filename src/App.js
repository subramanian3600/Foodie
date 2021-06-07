import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipes from "./components/Recipes";
import {
  AppBlock,
  Title,
  FetchingMessage,
  SearchDisplayMessage,
  SearchButton,
  SearchBox,
  Form,
  SearchForm,
  FoodDisplayBox,
} from "./components/Styles";

export default function App(props) {
  const [foods, setfoods] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("chicken");
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    const fetchFoodApi = () => {
      const app_url = "https://api.edamam.com/search?";
      const app_id = process.env.REACT_APP_API_ID;
      const app_key = process.env.REACT_APP_API_KEY;
      const getResponse = async () => {
        const response = await axios
          .get(app_url + `q=${query}&app_id=${app_id}&app_key=${app_key}`)
          .catch((err) => {
            console.log(err);
          });
        setfoods(response.data.hits);
      };
      getResponse();
      setisloading(false);
    };
    fetchFoodApi();
  }, [query]);

  const GetSearchItem = (e) => {
    setsearch(e.target.value);
    setisloading(true);
    setfoods(null);
  };
  const setSearchItem = (e) => {
    e.preventDefault();
    setquery(search);
  };
  console.log(foods);

  return (
    <AppBlock>
      <Title>Foodie</Title>

      <div>
        <SearchForm>
          <Form onSubmit={setSearchItem}>
            <SearchBox
              placeholder="chicken"
              type="search"
              onChange={(e) => {
                GetSearchItem(e);
              }}
            />
            <SearchButton type="submit">Search</SearchButton>
          </Form>
        </SearchForm>

        <FoodDisplayBox>
          {isloading === true ? (
            <SearchDisplayMessage>
              Search your favorite dish to display...
            </SearchDisplayMessage>
          ) : (
            <>
              {foods === null ? (
                <FetchingMessage>Fetching data...</FetchingMessage>
              ) : (
                <>
                  {foods.map((food) => (
                    <Recipes key={food.label} data={food} />
                  ))}
                </>
              )}
            </>
          )}
        </FoodDisplayBox>
      </div>
    </AppBlock>
  );
}
