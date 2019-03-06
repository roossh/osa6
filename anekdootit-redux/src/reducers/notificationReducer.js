const initialState = null

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data.content
    default:
      return state
  }
}

export const setNotification = (content, seconds) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        content
      }
    })
    setTimeout(() => dispatch({
      type: 'SET_NOTIFICATION',
      data: {content: null}
    }), seconds*1000)
  }
}

export default notificationReducer