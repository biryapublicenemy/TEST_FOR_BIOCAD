import React from 'react';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Welcome to React + TypeScript App</h1>
      <p>If you can see this message, your React application is working correctly!</p>
      <button
        onClick={() => alert('Button clicked! The app is working!')}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
