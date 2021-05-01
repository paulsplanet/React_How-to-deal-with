import React from 'react';

function App() {
    const name = React
  return (
    <div>
        {name === React ? <h1>I'm React</h1> : <h2>I'm not React</h2>}
    </div>
  );
}

function AppII() {
  const name = React
return (
  <div>
      {name === React &&  <h1>I'm React</h1>}
  </div>
);
}

function AppIII() {
  const name = undefined
return name || 'this is undefined';
}

export default App;
