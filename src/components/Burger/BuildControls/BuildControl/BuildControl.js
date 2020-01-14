import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
  const {
    added, removed, disabled, label,
  } = props;
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button
        type="button"
        className={classes.Less}
        onClick={removed}
        disabled={disabled}
      >
        Less
      </button>
      <button
        type="button"
        className={classes.More}
        onClick={added}
      >
        More
      </button>
    </div>
  );
};

// buildControl.propTypes = {}

export default buildControl;
