import gunActions from './gun.action.types';

export const toggleGunMode = () => ({
  type: gunActions.TOGGLE_GUN_MODE
})

export const addGunInAnimation = () => ({
  type: gunActions.ADD_GUN_IN_ANIMATION
})
export const removeGunInAnimation = () => ({
  type: gunActions.REMOVE_GUN_IN_ANIMATION
})

export const addGunOutAnimation = () => ({
  type: gunActions.ADD_GUN_OUT_ANIMATION
})

export const removeGunOutAnimation = () => ({
  type: gunActions.REMOVE_GUN_OUT_ANIMATION
})

export const gunTrigger = () => ({
  type: gunActions.GUN_TRIGGER
})

export const gunTriggeredDone = () => ({
  type: gunActions.GUN_TRIGGER_DONE
})