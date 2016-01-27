const expect = require('chai').expect;

const reducer = require('../../reducers/navigate');
const initialState = require('../../initialState');

describe('navigate reducer', () => {
  it('expect to return an initial state if no valid action provided', () => {
    expect(reducer(initialState, {})).to.be.equal(initialState);
  });

  it('expect PUSH to add a new item to the navigation stack', () => {
    const pushRoute = {
      type: 'PUSH',
      payload: {
        component: null,
      },
    };

    const result = reducer(initialState, pushRoute);

    expect(result.__nav.count()).to.be.equal(1);
    expect(result.__nav.first()).to.be.equal(pushRoute.payload);
  });

  it('expect POP to remove a new item from the navigation stack', () => {
    let state = reducer(initialState, {
      type: 'PUSH',
      payload: null,
    });

    state = reducer(state, { type: 'POP' });

    expect(state.__nav.count()).to.be.equal(0);
  });
});
