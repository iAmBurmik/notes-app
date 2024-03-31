/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    " query getAllNotes {notes: getAllNotes {id name text updatedAt } } ": types.GetAllNotesDocument,
    "\n  mutation createNote($note: CreateNoteInput!) {\n    note: createNote(createNote: $note) {\n      id\n      name\n      text\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateNoteDocument,
    "\n  query getNote($id: Float!) {\n    note: getNote(id: $id) {\n      id\n      name\n      text\n      updatedAt\n    }\n  }\n": types.GetNoteDocument,
    "\n  mutation removeNote($id: Float!) {\n    removeNote(id: $id)\n  }\n": types.RemoveNoteDocument,
    "\n  mutation updateNote($note: UpdateNoteInput!) {\n    updateNote(updateNote: $note) {\n      id\n    }\n  }\n": types.UpdateNoteDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: " query getAllNotes {notes: getAllNotes {id name text updatedAt } } "): (typeof documents)[" query getAllNotes {notes: getAllNotes {id name text updatedAt } } "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createNote($note: CreateNoteInput!) {\n    note: createNote(createNote: $note) {\n      id\n      name\n      text\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation createNote($note: CreateNoteInput!) {\n    note: createNote(createNote: $note) {\n      id\n      name\n      text\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getNote($id: Float!) {\n    note: getNote(id: $id) {\n      id\n      name\n      text\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query getNote($id: Float!) {\n    note: getNote(id: $id) {\n      id\n      name\n      text\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation removeNote($id: Float!) {\n    removeNote(id: $id)\n  }\n"): (typeof documents)["\n  mutation removeNote($id: Float!) {\n    removeNote(id: $id)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateNote($note: UpdateNoteInput!) {\n    updateNote(updateNote: $note) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation updateNote($note: UpdateNoteInput!) {\n    updateNote(updateNote: $note) {\n      id\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;