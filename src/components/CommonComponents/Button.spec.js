import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

let wrapper;

const handleClickEvent = jest.fn();
const defaultProps = {
  handleClickEvent,
  content: "Test",
  styleClasses: "dummyClassA dummyClassB"
};

describe('the button component', ()=>{
  it('should call click handler when clicked', ()=>{
    // given
    givenButtonWithProps(defaultProps);
      // when
    wrapper.simulate('click');
    // then
    expect(handleClickEvent.mock.calls.length).toBe(1);
  });
  it('renders correctly', () => {
    // given
    givenButtonWithProps(defaultProps);
    //when
    //.shallow(<Button />);
    //then
    expect(wrapper.text()).toEqual("Test");
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});

const givenButtonWithProps = ({handleClickEvent, content, styleClasses}) => wrapper = shallow(
  <Button
    handleClickEvent={handleClickEvent}
    content={content}
    styleClasses={styleClasses}
    name="Button"
  />
);
