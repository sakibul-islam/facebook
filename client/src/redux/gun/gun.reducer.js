import gunActions from "./gun.action.types";

const INITIAL_STATE = {
  gunMode: false,
  totalBullet: 100,
  bullet: 'haha',
  trigger: 5,
  triggered: '',
  gunInAnimation: false,
  gunOutAnimation: false
}

const gunReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case gunActions.TOGGLE_GUN_MODE:
      return {
        ...state,
        gunMode: !state.gunMode
      }
    case gunActions.ADD_GUN_IN_ANIMATION:
      return {
        ...state,
        gunInAnimation: true
      }
    case gunActions.REMOVE_GUN_IN_ANIMATION:
      return {
        ...state,
        gunInAnimation: false
      }
    case gunActions.ADD_GUN_OUT_ANIMATION:
      return {
        ...state,
        gunOutAnimation: true
      }
    case gunActions.REMOVE_GUN_OUT_ANIMATION:
      return {
        ...state,
        gunOutAnimation: false
      }
    case gunActions.GUN_TRIGGER:
      return {
        ...state,
        triggered: 'triggered'
      }
    case gunActions.GUN_TRIGGER_DONE:
      return {
        ...state,
        triggered: ''
      }
    default: 
      return {
        ...state
      }
  }
}

export default gunReducer;