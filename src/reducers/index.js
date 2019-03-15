const reducers = {
  'LOGIN': (state, payload) => {
  }
}

const reducer = (state = state, action) => {
  const { type, payload } = action;
  const ctxReducer = reducers[type];
  return ctxReducer ? ctxReducer(state, payload) : state;
}

export default reducer
