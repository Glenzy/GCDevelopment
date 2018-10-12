import React from 'react';
import renderer from 'react-test-renderer';
import Routes from './Routes';
import { MemoryRouter } from 'react-router';

describe('the routes component', () =>{
  it ('should display the correct image', () => {
    //const widths = [375, 768, 1440];
    const tree = renderer.create(
      <MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
        <Routes/>
      </MemoryRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
