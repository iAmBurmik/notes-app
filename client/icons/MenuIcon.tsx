'use client';
import { useSidebarContext } from '@/context/sidebar-context';
import React, { useContext } from 'react';

const MenuIcon = () => {
  const { changeIsOpen } = useSidebarContext();

  return (
    <button className="nav-button hide" onClick={() => changeIsOpen()}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.5 27V24.75H31.5V27H4.5ZM4.5 19.125V16.875H31.5V19.125H4.5ZM4.5 11.25V9H31.5V11.25H4.5Z" />
      </svg>
    </button>
  );
};

export default MenuIcon;
