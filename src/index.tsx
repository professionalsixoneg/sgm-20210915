import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GALLERIES from './data/galleries';
import CONFIG from './data/config';
// import reportWebVitals from './reportWebVitals';

(async function () {
  const configResponse = await fetch("https://cdn.jsdelivr.net/gh/professionalsixoneg/sgall-assets-sorting@main/AppConfig/AppConfig.json");

  const configJSON = await configResponse.json();

  Object.assign(GALLERIES, configJSON.Galleries);
  Object.assign(CONFIG, configJSON.Config);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})()






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
