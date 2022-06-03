import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {FormProvider} from "./FormContext"

ReactDOM.render(
  <FormProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </FormProvider>,
  document.getElementById("root")
);
