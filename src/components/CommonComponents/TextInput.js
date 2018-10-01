import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  let wrapperClass = 'form-group';
  let errors = props.errors;
  if (errors && errors.length) {
    errors = props.errors[0].message;
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label className="form-label" htmlFor={props.name}>
        {props.label}
      </label>
        <div className="field">
          <input
            type={props.type}
            name={props.name}
            className="form-control"
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            onBlur={props.onBlur}
          />
          {errors && errors.length > 0 && <div className="alert alert-danger">{errors}</div>}
        </div>
    </div>);
};

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.object),
};
TextInput.defaultProps = {
  errors: [],
  placeholder: '',
  onBlur: () => {},
  type:'text',
  name:'',
  label:'',
};

export default TextInput;
