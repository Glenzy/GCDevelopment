import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('the button component', ()=>{
  beforeAll();
  it('should display correctly', ()=>{
    const handleClickEvent = jest.fn();
    const   content = 'Button test';
    const styleClasses = 'dummyClassA dummyClassB';
    const name = 'Button';
      const tree = renderer.create(
        <Button
          handleClickEvent={handleClickEvent}
          content={content}
          styleClasses={styleClasses}
          name={name}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
  });
});
