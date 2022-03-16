const logger = store => next => action => {
    // console.group('group',action.type)
    // console.info('dispatching l', action.type)
    let result = next(action)
    // console.log('next state', store.getState())
    console.groupEnd()
    return result
  }
  export default logger