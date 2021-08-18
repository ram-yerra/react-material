import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import FormsList from './components/formsList/FormsList';
import About from './components/about/About';
import Header from './components/header/Header';
import FormDetails from './components/formDetails/FormDetails';
import AddEditForm from './components/addEditForm/AddEditForm';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App-content'> 
        <Switch>
          <Route exact path='/'>
            <Redirect to="/forms" />  
          </Route>          
          <Route path='/forms/:id' component={FormDetails}></Route>
          <Route path='/forms' component={FormsList}></Route> 
          <Route path='/forms/add' component={AddEditForm}></Route>          
          <Route path='/about' component={About}></Route>          
        </Switch>
      </div>
    </div>
  );
}

export default App;
