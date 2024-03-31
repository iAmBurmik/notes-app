'use client';
import React from 'react';
import { useQuery } from '@apollo/client';
import NoteItem from './NoteItem';
import { Loader } from '../Loader/Loader';
import { GetAllNotesDocument } from '@/generates/graphql';

const NotesList = () => {
  const { data, loading, error } = useQuery(GetAllNotesDocument);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {data?.notes.map((note: any) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.name}
          text={note.text}
          updatedAt={note.updatedAt}
        />
      ))}
    </>
  );
};

export default NotesList;
