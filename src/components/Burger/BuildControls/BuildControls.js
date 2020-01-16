import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
  const {
    disabled, ingredientAdded, ingredientRemoved, ordered, price, purchasable,
  } = props;
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price:
        {' '}
        <strong>
          {/* Rounding to two decimal places. */}
          {price.toFixed(2)}
        </strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}
      <button
        type="button"
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={ordered}
      >
        ORDER
      </button>
    </div>
  );
};

export default buildControls;
