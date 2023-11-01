import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // Create a ref
    this.myInputRef = React.createRef();
  }

  handleClick = () => {
    // Access the DOM element using the ref
    const inputElement = this.myInputRef.current;
    if (inputElement) {
      inputElement.focus();
    }
  }

  render() {
    return (
      <div>
        <input ref={this.myInputRef} type="text" />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}
