import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";


const reducer = (state, action) => {
  console.log(state, action);

  if(action.type === "PLUS") {
    return {
      ...state,
      count: state.count + 1,
    }
  }

  if(action.type === "MINUS") {
    return {
      ...state,
      count: state.count - 1,
    }
  }

  if(action.type === "RESET") {
    return {
      ...state,
      count: 0,
    }
  }

  return {
    count: 0,
    version: "v0.0.1",
    title: "Count"
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
        <App/>
      </Provider>
);

