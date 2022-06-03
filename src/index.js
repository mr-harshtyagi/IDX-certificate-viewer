import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ViewCertificate from './components/ViewCertificate';
import App from './components/App';
import {BrowserRouter,Routes,Route} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:certId/:hash" element={<ViewCertificate />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
