import React from 'react';

function Resume(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.jobTitle}</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default Resume;
