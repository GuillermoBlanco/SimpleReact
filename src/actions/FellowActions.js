import dispatcher from '../dispatcher';

export function disenrollFellow(name, course) {
  dispatcher.dispatch({ type: 'DISENROLL_FELLOW', name, course });
}

export function enrollFellow(name, course) {
  dispatcher.dispatch({ type: 'ENROLL_FELLOW', name, course });
}
