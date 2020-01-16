import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
  const { show, clicked } = props;
  const { Backdrop } = classes;
  return (
    // TODO implement keyboard listeners?
    show ? (<div className={Backdrop} onClick={clicked} />) : null
  );
};

export default backdrop;
