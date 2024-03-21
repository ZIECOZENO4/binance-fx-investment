import React from 'react';

const SelectButton = ({ children, selected, onClick }) => {
 return (
    <span
      onClick={onClick}
      className={`border border-gold rounded-md px-5 py-2 font-montserrat cursor-pointer ${selected ? 'bg-gold text-black font-bold' : 'bg-transparent text-gold'}`}
    >
      {children}
    </span>
 );
};

export default SelectButton;
