//General proptypes
import PropTypes from 'prop-types';
const { shape, number,bool, string } = PropTypes;

export const menuPropTypes = {
  Menu: shape({
    open: bool.isRequired,
    links: shape({
      id: number.isRequired,
      title: string.isRequired,
      navigationLink: string.isRequired,
      active: bool.isRequired,
      name: string.isRequired,
      classNames: string.isRequired,
    }).isRequired,
}).isRequired,
};