import React from "react";
import { FoodTitle, FoodLink, FoodImage, FoodBox } from "./Styles";

export default function Recipes(props) {
  const fooddisplay = [props.data];

  return (
    <>
      <FoodBox>
        <FoodLink href={fooddisplay[0].recipe.url} target="_blank">
          <FoodImage
            src={fooddisplay[0].recipe.image}
            alt={fooddisplay[0].recipe.label}
          />

          <FoodTitle>{fooddisplay[0].recipe.label}</FoodTitle>
        </FoodLink>
      </FoodBox>
    </>
  );
}
