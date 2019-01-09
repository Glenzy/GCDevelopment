//General proptypes
import PropTypes from 'prop-types';
const { shape, number,bool, string, arrayOf } = PropTypes;


export const menuPropTypes = {
  Menu: shape({
    open: bool.isRequired,
    links: arrayOf(shape({
      id: number.isRequired,
      title: string.isRequired,
      navigationLink: string.isRequired,
      active: bool.isRequired,
      name: string.isRequired,
      classNames: string.isRequired,
    })).isRequired,
}).isRequired,
};