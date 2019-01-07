// Centralized propType definitions
import PropTypes from 'prop-types';

const { shape, number, instanceOf, bool, string, objectOf, arrayOf, func, object } = PropTypes;

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
    skills:arrayOf(object).isRequired,
    actions:shape(func.isRequired),
  }).isRequired,
};

export const interactiveGraphPropTypes = {
  skills: arrayOf(PropTypes.object).isRequired,
  showExamplesAction: func.isRequired,
  prevSkill: func.isRequired,
  skill: arrayOf({
    id: number.isRequired,
    label:string.isRequired,
    angle: number.isRequired,
    radius: number.isRequired,
    imgSrc: string.isRequired,
    color: string.isRequired,
    stopOpacityA: string.isRequired,
    stopOpacityB: string.isRequired,
    active: bool.isRequired,
    info: string.isRequired,
  }).isRequired,
};

export const examplesPropTypes = {
  showExamplesAction: func.isRequired
};
export const radialGraphPropTypes = {
  skills: arrayOf(PropTypes.object).isRequired,
  actions:shape(func.isRequired),
};