
import React, { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

export default function Header({ title }) {
  const { theme } = useContext(ThemeContext);

  const styles = {
    header: {
      backgroundColor: theme === 'dark' ? '#1a1a1a' : '#4a90e2',
      color: '#ffffff',
      padding: '1.5rem',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      borderRadius: '0 0 10px 10px'
    },
    h1: {
      marginBottom: '0.2rem',
      fontSize: '2.2rem'
    },
    h2: {
      marginTop: 0,
      fontWeight: 300,
      fontSize: '1.4rem'
    }
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>{title}</h1>
      <h2 style={styles.h2}>Task Tracker App</h2>
    </header>
  );
}
