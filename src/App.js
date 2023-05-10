import React from 'react';
import './style.css';
import Filters from './components/Filters';
import ItemsList from './components/ItemsList';

export default function App() {
  return (
    <div className="app-container">
      <Filters />
      <ItemsList />
    </div>
  );
}
