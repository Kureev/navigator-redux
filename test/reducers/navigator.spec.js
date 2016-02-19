const {expect} = require('chai');
const reducer = require('../../reducers');
const {push, pop, replace, replaceAtIndex, replaceTo} = require('../../actions');
const initialState = require('../../makeNavState')();

describe('navigate reducer', () => {
  it('expect to return an initial state if no valid action provided', () => {
    expect(reducer(initialState, {})).to.be.equal(initialState);
  });

  it('expect PUSH to add a new item to the navigation stack', () => {
    const pushRoute = push();
    const state = reducer(initialState, pushRoute);

    expect(state.stack.count()).to.be.equal(1);
    expect(state.stack.first()).to.be.equal(pushRoute.payload);
  });

  it('expect POP to move index one step back', () => {
    let state = reducer(initialState, push());
    state = reducer(state, push());

    expect(state.stack.count()).to.be.equal(2);
    expect(state.index).to.be.equal(0);

    state = reducer(state, pop());

    expect(state.stack.count()).to.be.equal(2);
    expect(state.index).to.be.equal(1);
  });

  it('expect POP -> PUSH to replace the first item of the stack', () => {
    let state = reducer(initialState, push());
    state = reducer(state, push());

    expect(state.stack.count()).to.be.equal(2);
    expect(state.index).to.be.equal(0);

    state = reducer(state, pop());

    expect(state.stack.count()).to.be.equal(2);
    expect(state.index).to.be.equal(1);

    state = reducer(state, push('test'));

    expect(state.stack.count()).to.be.equal(2);
    expect(state.index).to.be.equal(0);
    expect(state.stack.first()).to.be.equal('test');
  });

  it('expect REPLACE to replace the last stack item', () => {
    let state = reducer(initialState, push());
    state = reducer(state, push());
    state = reducer(state, replace('test'));

    expect(state.stack.count()).to.be.equal(2);
    expect(state.stack.first()).to.be.equal('test');
  });


  it('expect REPLACE_AT_INDEX to replace the route at the index passed', () => {
    let state = reducer(initialState, push('test0'));
    state = reducer(state, push('test1'));
    state = reducer(state, push('test2'));
    state = reducer(state, push('test3'));
    state = reducer(state, replaceAtIndex('test4', 2));

    expect(() => { reducer(state, replaceAtIndex('test4', 10)); }).to.throw(Error);
    expect(() => { reducer(state, replaceAtIndex('test4', -1)); }).to.throw(Error);

    expect(state.stack.count()).to.be.equal(4);
    expect(state.stack.get(0)).to.be.equal('test3');
    expect(state.stack.get(1)).to.be.equal('test2');
    expect(state.stack.get(2)).to.be.equal('test4');
    expect(state.stack.get(3)).to.be.equal('test0');
  });

  it('expect REPLACE_TO to replace all stack for the route', () => {
    let state = reducer(initialState, push(0));
    state = reducer(state, push(1));
    state = reducer(state, replaceTo('test'));

    expect(state.stack.count()).to.be.equal(1);
    expect(state.stack.first()).to.be.equal('test1');
  });
});
