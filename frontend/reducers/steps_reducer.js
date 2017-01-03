import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';
import merge from 'lodash/merge';

const initialSteps = {
  1: { // this is the step with id = 1
    id: 1,
    title: "walk to store",
    done: false,
    todo_id: 1
  },
  2: { // this is the step with id = 2
    id: 2,
    title: "buy soap",
    done: false,
    todo_id: 1
  }
};

const stepsReducer = (state = initialSteps, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STEPS:
      const newState = {};
      action.steps.forEach( step => {
        newState[step.id] = step;
      });
      return newState;

    case RECEIVE_STEP:

      const newStep = {};
      newStep[action.step.id] = action.step;
      return merge(newStep, state);

    case REMOVE_STEP:
      let dupState = merge({}, state);
      delete dupState[action.id];
      return dupState;

    default:
      return state;
  }
};

export default stepsReducer;
