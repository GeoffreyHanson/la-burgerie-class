import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const { ingredients } = props;

  // Getting an array of keys from ingredient.
  const ingredientsArray = Object.keys(ingredients); // [salad, bacon, cheese, meat]

  // Maps the ingredients
  let transformedIngredients = ingredientsArray
  // returns an array of n = the amount of ingredients.
  // TODO: What does this return?
    .map((ingredientKey) => [...Array(ingredients[ingredientKey])] // [?]

      // Creates a BurgerIngredient component for each item in the array.
      .map((_, index) => (
        // TODO: Restructure without using indexes in keys.
        <BurgerIngredient
          key={ingredientKey + index}
          type={ingredientKey}
        />
      )))
  // Checking if the array is empty.
    .reduce((array, element) => array.concat(element), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Would you like something on your burger?</p>;
  }

  console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number),
};

export default burger;
