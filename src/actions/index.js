export const ADD_FEATURES = "ADD_FEATURES";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function newFeature(value) {
  return {
    type: ADD_FEATURES,
    payload: value,
  };
}
export function removeFeature(value) {
  return {
    type: REMOVE_FEATURE,
    payload: value,
  };
}
