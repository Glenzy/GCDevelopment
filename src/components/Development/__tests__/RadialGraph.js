import React from 'react';
import { mount } from 'enzyme';
import { RadialGraph } from '../RadialGraph';
import initialState  from '../../../reducers/initialState';


let wrapper;

const defaultProps = initialState.DevExamples.skills;
//const dataSize = defaultProps.length;

describe('The Radial Graph', () => {
    it('renders without crashing', () => {
        // given
        givenContentWithProps();
        // when
        // then
        // expect(wrapper).toMatchSnapshot();
    });
    it('should have same number of pie slices as the data array elements', () => {
        // given
        givenContentWithProps(defaultProps);
        // when
        // then
        expect(wrapper.find('.rv-radial-chart__series--pie__slice')).toHaveLength((defaultProps.length*2));
    });
});

const givenContentWithProps = (skills = defaultProps) => wrapper = mount( 
    <RadialGraph skills = { skills } />
);