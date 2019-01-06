import React from 'react';
import { shallow } from 'enzyme';
import { Development } from '../Development';
import initialState from '../../../reducers/initialState';


let wrapper;
let DevExamples = initialState.DevExamples;
describe('The Development component', () => {
    it('shows the Radial when shownExamples is false', () => {
        // given
        givenContentWithProps(DevExamples);
        // when
        // then
        expect(wrapper.find('.graph')).toHaveLength(1);
    });
    it('Shows the Examples when shownExamples is true', () => {
        // given
        DevExamples.showExamples = true;
        givenContentWithProps(DevExamples);
        // when
        // then
        expect(wrapper.find(".examples")).toHaveLength(1);
    });
});

const givenContentWithProps = (DevExamples) => wrapper = shallow( 
    <Development DevExamples = {DevExamples}/>
);