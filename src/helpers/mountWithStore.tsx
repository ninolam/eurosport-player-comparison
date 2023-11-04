// import { Provider } from 'react-redux'
// import { mount } from 'enzyme'
// import configureStore from 'redux-mock-store'

// export const mountWithStore = (
//   component,
//   mockState,
//   mockDispatch = jest.fn()
// ) => {
//   const mockStore = configureStore([])

//   const store = mockStore(mockState)
//   store.dispatch = mockDispatch

//   return mount(
//     <Provider store={store}>
//       {component}
//     </Provider>
//   )
// }