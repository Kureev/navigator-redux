const { expect } = require('chai');
const { PUSH, POP, REPLACE } = require('../../constants/navigation');
const reducer = require('../../reducers/navigate');
const initialState = require('../../initialState');

describe('navigate reducer', () => {
  it('expect to return an initial state if no valid action provided', () => {
    expect(reducer(initialState, {})).to.be.equal(initialState);
  });

  it('expect PUSH to add a new item to the navigation stack', () => {
    const pushRoute = {
      type: PUSH,
      payload: 0,
    };

    const state = reducer(initialState, pushRoute);

    expect(state.__nav.stack.count()).to.be.equal(1);
    expect(state.__nav.stack.first()).to.be.equal(pushRoute.payload);
  });

  it('expect POP to remove a new item from the navigation stack', () => {
    let state = reducer(initialState, {
      type: PUSH,
      payload: 0,
    });

    state = reducer(state, {
      type: PUSH,
      payload: 1,
    });

    expect(state.__nav.stack.count()).to.be.equal(2);
    expect(state.__nav.index).to.be.equal(0);

    state = reducer(state, { type: POP });

    expect(state.__nav.stack.count()).to.be.equal(2);
    expect(state.__nav.index).to.be.equal(1);
  });

  it('expect REPLACE to replace the last stack item', () => {
    let state = reducer(initialState, {
      type: PUSH,
      payload: 0,
    });

    state = reducer(state, {
      type: REPLACE,
      payload: 1,
    });

    expect(state.__nav.stack.first()).to.be.equal(1);
  });
});
