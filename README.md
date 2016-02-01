## What is this?
Few days ago I started this project as a spin-off from [navigator-rfc])(https://github.com/ericvicenti/navigation-rfc). This repo is an implementation of the super-simple navigator behavior (without animated transitions! Please, keep it in mind).

## Motivation
To make a proof of concept for react-native navigator (based on navigator-rfc), driven by redux.

## Getting started
First of all, check [an example](https://github.com/Kureev/navigator-redux/tree/master/example/Basic) I've made. In `index.ios.js` you'll find the most important parts.

### Installation
As usual:
```bash
$ npm i navigator-redux --save
```
Then include it in your code:
```js
import {NavigatorRedux, makeNavState, navigationReducer} from 'navigator-redux';
```
And finally, use it to make your navigation to work:
```jsx
const store = createStore(
  navigationReducer,
  makeNavState([<SomeInitialView/>])
);

AppRegistry.registerComponent('Basic', () => () => (
  <Provider store={store}>
    <NavigatorRedux />
  </Provider>
));
```


## Status
- [x] Simple navigation
- [ ] Animated transitions
