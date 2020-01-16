import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const { ingredients, purchaseCanceled, purchaseContinued } = props;
  const ingredientSummary = Object.keys(ingredients) // [salad, cheese, bacon]
    .map((key) => (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>
        :
        {ingredients[key]}
      </li>
    )); // obj
  return (
    <>
      <h3>Your Order</h3>
      <p>Toppings:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>CHECKOUT</p>
      <Button type="Danger" clicked={purchaseCanceled}>CANCEL</Button>
      <Button type="Success" clicked={purchaseContinued}>CONTINUE</Button>
    </>
  );
};

export default orderSummary;
