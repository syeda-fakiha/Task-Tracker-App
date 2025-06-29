
import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import { ThemeProvider, ThemeContext } from './theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

function MainApp() {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <Header title="Welcome to React Fundamentals" />
      <button onClick={toggleTheme} style={{ margin: '1rem' }}>Toggle Theme</button>
      <Form />
    </div>
  );
}

export default App;
