'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const SidebarContext = createContext({
  isOpen: true,
  changeIsOpen: () => {},
});

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, changeIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
