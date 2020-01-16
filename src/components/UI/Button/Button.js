import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
  const { children, clicked, type } = props;
  const { Button } = classes;
  return (
    <button
      type="button"
      // TODO: Write out how this works... Lec 170
      className={
        [
          Button,
          classes[type],
        ].join(' ')
      }
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default button;
