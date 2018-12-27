import React from 'react';
import { mount } from 'enzyme';
import Content, { SkillLogo, SkillTitle } from '../Content';
//import reactLogo from '../../../images/React-icon.svg';

let wrapper;

const defaultSkills = {
  id:0,
  imgSrc:'../../images/React-icon.svg',
  label:'React',
  info:'This is a test',
};

describe('The Development Content component', ()=>{
  it('should display the correct image', ()=>{
    // given
    givenContentWithProps({...defaultSkills, id: 1});
      // when
    // then
    expect(wrapper.find(SkillLogo).prop('src')).toEqual(defaultSkills.imgSrc);
  });
  it('should have the correct label', ()=>{
    // given
    givenContentWithProps();
      // when
console.log(wrapper.find(SkillTitle));
    // then
    expect(wrapper.find(SkillTitle).text()).toEqual('React');
  });

});

const givenContentWithProps = (skills = defaultSkills) => wrapper = mount(
  <Content
    skills={skills}
   />
);
