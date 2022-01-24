import { configureStore } from '@reduxjs/toolkit';
import contacts from '../slices/contacts';
import filter from '../slices/filter';

const rootReducer = {
  contacts,
  filter,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import { rootReducer } from '../reducers/index';

// const store = createStore(rootReducer, devToolsEnhancer());
// export default store;
