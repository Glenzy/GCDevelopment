import React from 'react';
import { shallow } from 'enzyme';
import LinkItem from './Link';
import { Link } from 'react-router-dom';


let wrapper;

const onClick = jest.fn();
const defaultProps = {
  navigationLink:"https://google.com.au",
  onClick,
  text:"Google",
};

describe('the links component', ()=>{
  it('should call click handler when clicked', ()=>{
    // given
    givenLinkWithProps(defaultProps);
      // when
    wrapper.simulate('click');
    // then
    expect(onClick.mock.calls.length).toBe(1);
  });
  it('renders displays Link correctly', () => {
    // given
    givenLinkWithProps(defaultProps);
    //when
    //.shallow(<Button />);
    //then
    //expect(wrapper.find(Link).props().to).toEqual("Google");
    expect(wrapper).toMatchSnapshot();
  });
  it('renders applies the navigationLink correctly', () => {
    // given
    givenLinkWithProps(defaultProps);
    //when
    //then
    expect(wrapper.find(Link).prop("to")).toEqual('https://google.com.au');
  });
});

const givenLinkWithProps = ({onClick, navigationLink, text, id, classNames, title}) => wrapper = shallow(
  <LinkItem
    title={title}
    navigationLink={navigationLink}
    onClick={onClick}
    text={text}
    id={id}
    classNames={classNames}
  />
);
