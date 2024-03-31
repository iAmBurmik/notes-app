'use client';
import React from 'react';
import styles from './Sidebar.module.css';
import NotesList from '../Note/NotesList';
import { useSidebarContext } from '@/context/sidebar-context';

const Sidebar = () => {
  const { isOpen } = useSidebarContext();
  return (
    <aside className={`${styles.sidebar} ${!isOpen && styles.hide}`}>
      <NotesList />
    </aside>
  );
};

export default Sidebar;
