import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkItem = ({title, navigationLink, onClick, text, id, classNames}) => {
  return (
    <Link to={`${navigationLink}`} className={`${classNames}`} title={title} id={id} onClick={onClick}>
      {text ? text : title}
    </Link>
  );
};

LinkItem.propTypes = {
  title: PropTypes.string,
  navigationLink: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  id: PropTypes.string,
};
LinkItem.defaultProps = {
  title:"Link title",
  id:"",
  classNames:"navLink",
};
export default LinkItem;
