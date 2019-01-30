// Centralized propType definitions
import PropTypes from 'prop-types';
const { shape, number,bool, string, arrayOf, func, object } = PropTypes;

export const developmentContentPropTypes = {
  skills:shape({
    id: number.isRequired,
    label:string.isRequired,
    imgSrc: string.isRequired,
    info: string.isRequired,
  }).isRequired
};

export const developmentPropTypes = {
  DevExamples:shape({
    showExamples: bool.isRequired,
    skills:arrayOf(object).isRequired,
    actions:shape(func.isRequired),
  }).isRequired,
};

export const interactiveGraphPropTypes = {
  skills: arrayOf(object).isRequired,
  showExamplesAction: func.isRequired,
  prevSkill: func.isRequired,
  skill: arrayOf(shape({
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
  })).isRequired,
};

export const examplesPropTypes = {
  showExamplesAction: func.isRequired
};
export const radialGraphPropTypes = {
  skills: arrayOf(object).isRequired,
  actions:shape(func.isRequired),
};