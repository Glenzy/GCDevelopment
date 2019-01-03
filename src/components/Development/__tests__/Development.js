import React from 'react';
import { shallow } from 'enzyme';
import { Development } from '../Development';
import initialState from '../../../reducers/initialState';


let wrapper;
let DevExamples = initialState.DevExamples;
describe('The Development component', () => {
    it('renders the Radial when shownExamples is false', () => {
        // given
        DevExamples.shownExamples = false;
        givenContentWithProps(DevExamples);
        // when
        // then
        expect(wrapper.find('RadialGraph')).toHaveLength(1);
    });
    it('enders the Examples when shownExamples is true', () => {
        // given
        DevExamples.shownExamples = true;
        givenContentWithProps(DevExamples);
        // when
        // then
        expect(wrapper.find("Examples")).toHaveLength(1);
    });
});

const givenContentWithProps = (DevExamples) => wrapper = shallow( 
    <Development DevExamples = { DevExamples }/>
);