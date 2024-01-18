import React from 'react';

function Counter(props) {
  const counterStyle = {
    border: '2px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    width: '100px'
  };

  const buttonStyle = {
    margin: '0 8px',
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={counterStyle}>
      <small>{props.label}</small>
      <h1>{props.value}</h1>
      <button style={buttonStyle} onClick={props.increment}>+</button>
      <button style={buttonStyle} onClick={props.decrement}>-</button>
    </div>
  );
}

export default Counter;
