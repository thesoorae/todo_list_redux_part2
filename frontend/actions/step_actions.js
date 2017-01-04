export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";
import * as APIUtil from '../util/todo_api_util.js';
import {receiveErrors} from './error_actions';

export const receiveSteps = (steps) =>({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = (step) =>({
  type: RECEIVE_STEP,
  step
});

export const removeStep = (id) => ({
  type: REMOVE_STEP,
  id
});

export const fetchAllSteps = () => dispatch => (
  APIUtil.fetchAllSteps().then(
    steps => dispatch(receiveSteps(steps)),
    console.log
  )
);

export const createStep = (step) => dispatch => (
  APIUtil.createStep(step).then(
    newstep => dispatch(receiveStep(newstep)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const updateStep = (step) => dispatch => (
    APIUtil.updateStep(step).then(
      newstep => dispatch(receiveStep(newstep)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const deleteStep = (step) => dispatch => (
    APIUtil.deleteStep(step).then(
      oldstep => dispatch(removeStep(oldstep.id)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);
