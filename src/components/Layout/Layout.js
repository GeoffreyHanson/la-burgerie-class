import React from 'react';
import PropTypes from 'prop-types';
import classes from './Layout.module.css';

const layout = (props) => {
  const { children } = props;
  return (
    // React.Fragment shorthand
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>
        {children}
      </main>
    </>
  );
};

layout.defaultProps = {
  children: PropTypes.func,
};

layout.propTypes = layout.defaultProps;

export default layout;
