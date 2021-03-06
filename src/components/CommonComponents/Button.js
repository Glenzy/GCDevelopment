import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button onClick={props.handleClickEvent} className={props.styleClasses} name={props.name}>
      {props.content}
    </button>
  );
};

Button.propTypes = {
  handleClickEvent: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  styleClasses: PropTypes.string.isRequired,
  name: PropTypes.string
};
Button.defaultProps = {
  name:"",
};
export default Button;
