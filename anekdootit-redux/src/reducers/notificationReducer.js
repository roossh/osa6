const initialState = null

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data.content
    default:
      return state
  }
}

export const setNotification = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    data: {
      content
    }
  }
}

export const notify = (content) => {
  setTimeout(() => setNotification(content), 5000)
  setNotification(null)
}

export default notificationReducer