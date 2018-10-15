import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div onClick={props.handleClickEvent} className={props.styleClasses} name={props.name}>
      {props.content}
    </div>
  );
};

Button.propTypes = {
  handleClickEvent: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  styleClasses: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default Button;
