import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import NewIcon from '@/icons/NewIcon';
import DeleteNote from '../Note/DeleteNote';
import MenuIcon from '@/icons/MenuIcon';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['left-side']}>
        <MenuIcon />
        <h1>Notes App</h1>
      </div>
      <div className={styles['right-side']}>
        <Link href={'/new'}>
          <NewIcon />
        </Link>
        <DeleteNote />
      </div>
    </header>
  );
};

export default Header;
