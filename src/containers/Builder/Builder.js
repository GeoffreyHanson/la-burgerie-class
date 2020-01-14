import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
      purchasable: false,
    };
  }

  // TODO: What's wrong with this?
  addIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;

    const oldCount = ingredients[type]; // 0
    console.log(`oldCount: ${oldCount}`);

    const updatedCount = oldCount + 1; // 1
    console.log(`updatedCount: ${updatedCount}`);

    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount; // ?
    const additionalCost = INGREDIENT_PRICES[type];

    const oldPrice = totalPrice;
    const newPrice = oldPrice + additionalCost;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatedPurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;

    const oldCount = ingredients[type]; // 0
    console.log(`oldCount: ${oldCount}`);

    // Avoiding creating an array of length -1
    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1; // -1
    console.log(`updatedCount: ${updatedCount}`);

    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount; // ?
    const deductedCost = INGREDIENT_PRICES[type];

    const oldPrice = totalPrice;
    const newPrice = oldPrice - deductedCost;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatedPurchaseState(updatedIngredients);
  }

  // Checking whether or not to update purchasable
  updatedPurchaseState(ingredients) {
    // const { ingredients } = this.state;

    // const ingredients = {
    //   ...ingredients
    // };
    const ingredientSum = Object.keys(ingredients)
      .map((ingredientKey) => ingredients[ingredientKey])
      .reduce((sum, element) => sum + element, 0);
    this.setState({ purchasable: ingredientSum > 0 });
  }

  render() {
    const { ingredients, purchasable, totalPrice } = this.state;
    const disabledInfo = {
      ...ingredients,
    };

    // TODO: Use Object.keys w/ forEach instead.
    for (const key in disabledInfo) {
      // Setting each key to the boolean result
      disabledInfo[key] = disabledInfo[key] <= 0; // {salad: true, meat: false, ...}
    }

    return (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={totalPrice}
          purchasable={purchasable}
        />
      </>
    );
  }
}

export default Builder;
