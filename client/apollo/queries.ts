import { gql } from '@apollo/client';

export const GET_ALL_NOTES = gql(
  ` query getAllNotes {notes: getAllNotes {id name text updatedAt } } `
);

export const CREATE_NOTE = gql`
  mutation createNote($note: CreateNoteInput!) {
    note: createNote(createNote: $note) {
      id
      name
      text
      createdAt
      updatedAt
    }
  }
`;

export const GET_NOTE = gql`
  query getNote($id: Float!) {
    note: getNote(id: $id) {
      id
      name
      text
      updatedAt
    }
  }
`;

export const REMOVE_NOTE = gql`
  mutation removeNote($id: Float!) {
    removeNote(id: $id)
  }
`;

export const UPDATE_NOTE = gql`
  mutation updateNote($note: UpdateNoteInput!) {
    updateNote(updateNote: $note) {
      id
    }
  }
`;
