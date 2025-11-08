// App.jsx is where we create our React component.
// For this beginner example, we render a single heading with the text "hello giga ".

// Import React to define the component.
import React from 'react';

// Export a function component so it can be used in main.jsx.
export default function App() {
  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '20vh' }}>
      {/* The assignment asked us to display "hello giga " in a large heading. */}
      <h1 style={{ fontSize: '4rem', textTransform: 'lowercase' }}>hello giga </h1>
    </main>
  );
}
