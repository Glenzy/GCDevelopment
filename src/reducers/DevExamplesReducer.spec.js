import  DevExamplesReducer  from './DevExamplesReducer';
describe('The dev example reducer', () =>{
  it ('should return the same state for an unrecognized action', () =>{
    const state = {moo: 'cow'};
    const newState = DevExamplesReducer(state, {type:"UPDATE_THE_MOO"});
    expect(newState).toEqual(state);
  });
});
