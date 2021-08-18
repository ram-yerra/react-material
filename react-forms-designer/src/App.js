import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import FormDesigner from './components/formDesigner/FormDesigner';
import FormPreview from './components/formPreview/FormPreview';

import { FormFieldsProvider } from './contexts/FormFieldsContext';

function App() {
  return (
    <div className="App container-fluid">
        <Router>      
              <Switch>
                  <FormFieldsProvider>
                    <Route exact path="/" component={FormDesigner}></Route>
                    <Route path="/preview-form" component={FormPreview}></Route>
                  </FormFieldsProvider>
              </Switch>
        </Router>
    </div>
  );
}

export default App;
