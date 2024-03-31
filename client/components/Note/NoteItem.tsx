import Link from 'next/link';
import React from 'react';
import styles from './NoteItem.module.css';
import { usePathname } from 'next/navigation';

interface Props {
  id: GLfloat;
  title: string;
  text: string;
  updatedAt: Date;
}

const NoteItem = ({ id, title, text, updatedAt }: Props) => {
  const pathname = usePathname();
  const date = new Date(updatedAt);

  return (
    <Link
      className={`${styles['note-item']} ${
        pathname === `/${id}` && styles.active
      }`}
      href={`/${id}`}
    >
      <h2>{title.length > 15 ? title.slice(0, 15) + '...' : title}</h2>
      <div className={styles['additional-info']}>
        <p className={styles.date}>{date.toLocaleDateString()}</p>
        <p className={styles.text}>
          {text.length > 15 ? text.slice(0, 15) + '...' : text}
        </p>
      </div>
    </Link>
  );
};

export default NoteItem;
