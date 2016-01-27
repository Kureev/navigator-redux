import { PUSH, POP, REPLACE } from '../constants/navigation';

export function push(component) {
  return {
    type: PUSH,
    payload: component,
  };
}

export function pop() {
  return {
    type: POP,
  };
}

export function replace(component) {
  return {
    type: REPLACE,
    payload: component,
  }
}
