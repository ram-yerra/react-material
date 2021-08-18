import React, {Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Racer from 'racer';
import orm from '@startupjs/orm';
import { model, initLocalCollection } from '@startupjs/sharedb'
import init from '@startupjs/init/lib/index.web';

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylus/mixins.styl';
import './stylus/styles.styl';
import Header from './modules/common/components/header/Header';
import Loading from './modules/common/components/loading/Loading';

const FormsList = React.lazy(() => import('./modules/forms/components/formsList/FormsList'));
const FormDetails = React.lazy(() => import('./modules/forms/components/formDetails/FormDetails'));
const AddEditForm = React.lazy(() => import('./modules/forms/components/addEditForm/AddEditForm'));
const About = React.lazy(() => import('./modules/about/components/About'));

initLocalCollection('_about')
initLocalCollection('_forms')
initLocalCollection('_fields')

const baseUrl = 'http://localhost:8080';
init({ baseUrl})

model.connection.send = function send(message) {
  getToken().then(myToken => {
    message.token = myToken
    this.emit('send', message)
    this.socket.send(JSON.stringify(message))
  })
};

const getToken = () => {
  return new Promise((resolve, reject) => {
    resolve('sampletoken');
  })
};

// Init orm of @startupjs with racer
Racer.use(orm);
// Init ORM for modules
require('../loaders/modelLoader.js?context=client!').forEach(m => Racer.use(m))
Racer.use(commonModel)

function App() {
  return (    
      <div className='app'>
        <Header />
        <div className='app-content'> 
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path='/'>
                <Redirect to="/forms" />  
              </Route>          
              <Route path='/forms/:id' component={FormDetails}></Route>
              <Route match path='/forms' component={FormsList}></Route> 
              <Route path='/forms/add' component={AddEditForm}></Route>          
              <Route path='/about' component={About}></Route>          
            </Switch>
          </Suspense>
        </div>
      </div>
  );
}

export default App;
