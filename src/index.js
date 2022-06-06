import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ViewCertificate from './components/ViewCertificate';
import App from './components/App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Validation from './components/validation';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:certId/:hash" element={<ViewCertificate />} />
      <Route path="validate/:certId/:hash" element={<Validation />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
