import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MarsisProvider} from './MarsisContexApi';


ReactDOM.render(
  <React.StrictMode>
    <MarsisProvider>
    <App />
    </MarsisProvider>
    
</React.StrictMode>,
  document.getElementById('root')
);

