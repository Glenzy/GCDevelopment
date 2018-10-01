/*import * as ActionTypes from '../constants/actionTypes';
import configureStore from './configureStore';

describe('Store', () => {
  //let dateModified;
//  beforeAll(() => {
    // hardcoded date for consistency in tests and snapshots on all machines
    //MockDate.set(new Date("1/31 23:14:01"));
    //dateModified = getFormattedDateTime();
  //});
  //afterAll(() => MockDate.reset());

  it('should do create 1 enemey', () => {
    const store = configureStore();

    const actions = [
      { type: ActionTypes.CREATE_ENEMY, 2}
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'month',
      displayResults: false,
      dateModified,
      necessaryDataIsProvidedToCalculateSavings: true,
      savings: calculateSavings(store.getState().fuelSavings)
    };

    expect(actual.fuelSavings).toEqual(expected);
  });
});
*/
