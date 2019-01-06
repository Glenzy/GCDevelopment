import React from 'react';
import { mount } from 'enzyme';
import Content, { SkillLogo, SkillTitle, SkillContent } from '../Content';

let wrapper;

const defaultSkills = {
    id: 0,
    imgSrc: '../../images/React-icon.svg',
    label: 'React',
    info: 'This is a test!',

};

describe('The Development Content component', () => {
    it('should display the correct image', () => {
        // given
        givenContentWithProps();
        // when
        // then
        expect(wrapper.find(SkillLogo).prop('src')).toEqual(defaultSkills.imgSrc);
    });
    it('should have the correct label', () => {
        // given
        givenContentWithProps();
        // when
        // then
        expect(wrapper.find(SkillTitle).text()).toEqual('React');
    });
    it('should have the correct content', () => {
        // given
        givenContentWithProps();
        // when
        // then
        expect(wrapper.find(SkillContent).text()).toEqual('This is a test!');
    });
});

const givenContentWithProps = (skills = defaultSkills) => wrapper = mount( 
    <Content skills = {skills}/>
);