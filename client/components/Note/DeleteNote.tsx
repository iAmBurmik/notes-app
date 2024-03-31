'use client';
import { GetAllNotesDocument, RemoveNoteDocument } from '@/generates/graphql';
import DeleteIcon from '@/icons/DeleteIcon';
import { useMutation } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

const DeleteNote = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [removeNote] = useMutation(RemoveNoteDocument, {
    refetchQueries: [{ query: GetAllNotesDocument }],
    onCompleted: () => {
      router.push('/');
    },
  });

  const deleteNoteHandler = (id: string) => {
    if (id) {
      removeNote({
        variables: {
          id: parseFloat(id),
        },
      });
    }
  };
  return (
    <button className="nav-button" onClick={() => deleteNoteHandler(id)}>
      <DeleteIcon />
    </button>
  );
};

export default DeleteNote;
