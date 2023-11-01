import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Jumbotron } from 'react-bootstrap';

function MyJumbotron() {
  return (
    <Jumbotron>
      <h1 className="display-4">Hello, React!</h1>
      <p className="lead">This is a Bootstrap Jumbotron in a React component.</p>
      <hr className="my-4" />
      <p>It's a simple way to highlight content.</p>
    </Jumbotron>
  );
}

export default MyJumbotron;
