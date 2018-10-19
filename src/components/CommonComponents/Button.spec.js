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
    console.log('givenButtonWithProps', givenButtonWithProps);
    // when
    const buttonElement = wrapper.find('.dummyClassA');
    buttonElement.simulate('click');
    // then
    expect(handleClickEvent.calls.length).toBe(1);
  });
  it('renders correctly', () => {
    // given
    givenButtonWithProps(defaultProps)
    //when
    .shallow(<Button />);
    //then
    expect(wrapper).toMatchSnapshot();
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
