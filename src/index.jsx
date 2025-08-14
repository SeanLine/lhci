import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Root = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <App info={{ name: 'John' }} />
      <button onClick={() => setCount(count + 1)}>on click</button>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
