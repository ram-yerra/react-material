import React from 'react';

import Foo from './Foo';

class MyComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {status: false};
  }
  changeStatus() {
    this.setState({status: !this.state.status})
  }
  
  render() {
    return (
      <section>
        <h1>My Component</h1>
        <Foo />
        <Foo />
        <Foo />
        <button onClick={() => this.changeStatus()} />
        <p>Status is {this.state.status ? 'On' : 'Off'}</p>
      </section>
    );
  }
}

export default MyComponent;
