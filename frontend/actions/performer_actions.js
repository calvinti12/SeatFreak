import * as PerformerApiUtil from '../util/performer_api_util';

export const RECEIVE_PERFORMER = "RECEIVE_PERFORMER";
export const RECEIVE_PERFORMERS = "RECEIVE_PERFORMERS";
export const RECEIVE_PERFORMER_ERRORS = "RECEIVE_PERFORMER_ERRORS";

export const receivePerformer = payload => {
  return {
    type: RECEIVE_PERFORMER,
    performer: payload.performer,
    events: payload.events
  }
}

export const receivePerformers = performers => {
  return {
    type: RECEIVE_PERFORMERS,
    performers
  };
};

export const requestPerformer = performerId => dispatch => {
  return PerformerApiUtil.fetchPerformer(performerId).then(
    payload => dispatch(receivePerformer(payload)),
    errors => dispatch(receivePerformerErrors(errors.responseJSON))
  );
};

export const requestPerformers = category => dispatch =>  {
  return PerformerApiUtil.fetchPerformers(category).then(
    performers => dispatch(receivePerformers(performers)),
    errors => dispatch(receivePerformerErrors(errors.responseJSON))
  );
};
