import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../../rendererStore'
import Notification from '../notification/components/Notification'

render(
  <Provider store={store}>
    <Notification />
  </Provider>,
  document.getElementById('main')
);
