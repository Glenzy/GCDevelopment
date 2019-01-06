// Centralized propType definitions
import PropTypes from 'prop-types';

const { shape, number, instanceOf, bool, string, objectOf, arrayOf, func } = PropTypes;

export const gamePropTypes = {
  handleClickEvent: PropTypes.func.isRequired,
  Game: shape({
    enemy: shape({
      id: number.isRequired,
      x: number.isRequired,
      y: number.isRequired,
      velocity: shape({
        x: number.isRequired,
        y: number.isRequired,
        lastXchange: instanceOf(Date).isRequired,
        lastYchange: instanceOf(Date).isRequired,
      }).isRequired,
    }).isRequired,
    player: shape({
      score: number.isRequired,
      x: number.isRequired,
      y: number.isRequired,
      velocity: objectOf(PropTypes.number).isRequired,
      lives: number.isRequired,
    }).isRequired,
}).isRequired,
};

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

export const developmentSkillsPropTypes = {
  skills:arrayOf(PropTypes.object).isRequired,
};

export const developmentPropTypes = {
  DevExamples:shape({
    showExamples: bool.isRequired,
    skills:arrayOf(PropTypes.object).isRequired,
    actions:func.isRequired,
  }).isRequired,
};