'use client'
import React, { useState } from 'react';

const Table = () => {
 const [selectedItem, setSelectedItem] = useState('assets');

 const renderComponent = async () => {
    let Component;

    switch(selectedItem) {
      case 'assets':
        Component = await import('./assets');
        break;
      case 'watchlist':
        Component = await import('./watchlist');
        break;
      case 'market':
        Component = await import('./market');
        break;
      default:
        return null;
    }

    return <Component.default />;
 };

 return (
    <div>
      <div onClick={() => setSelectedItem('assets')} className={selectedItem === 'assets' ? 'active' : ''}>Car</div>
      <div onClick={() => setSelectedItem('watchlist')} className={selectedItem === 'watchlist' ? 'active' : ''}>Ball</div>
      <div onClick={() => setSelectedItem('market')} className={selectedItem === 'market' ? 'active' : ''}>Nes</div>
      {renderComponent()}
    </div>
 );
};

export default Table;
