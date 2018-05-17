import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import myApp from './reducers';
import Results from './components/results';

const store = createStore(myApp);
function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store} />
      <br />
      <Results store={store} />
    </div>,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();
registerServiceWorker();
