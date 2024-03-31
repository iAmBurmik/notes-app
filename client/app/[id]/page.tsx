'use client';
import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import {
  GetAllNotesDocument,
  GetNoteDocument,
  UpdateNoteDocument,
} from '@/generates/graphql';

interface Props {
  params: {
    id: string;
  };
}

const ContentPage = ({ params: { id } }: Props) => {
  const { data } = useQuery(GetNoteDocument, {
    variables: { id: parseInt(id) },
  });
  const [updateNote] = useMutation(UpdateNoteDocument, {
    refetchQueries: [{ query: GetAllNotesDocument }],
  });

  useEffect(() => {
    if (data) {
      setInputTitle(data?.note.name);
      setInputText(data?.note.text);
    }
  }, [data]);

  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputText, setInputText] = useState<string>('');

  const [titleIsEditing, setTitleIsEditing] = useState<boolean>(false);
  const [textIsEditing, setTextIsEditing] = useState<boolean>(false);

  const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target.value);
  };

  const changeTextHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const stopEditingTitle = () => {
    updateNote({
      variables: {
        note: {
          id: id,
          name: inputTitle,
        },
      },
    });
    setTitleIsEditing(false);
  };

  const stopEditingText = () => {
    updateNote({
      variables: {
        note: {
          id: id,
          text: inputText,
        },
      },
    });
    setTextIsEditing(false);
  };

  const date = new Date(data?.note.updatedAt);

  return (
    <div className="page">
      <div className={styles['head-section']}>
        <div
          className={styles['input-section']}
          onDoubleClick={() => setTitleIsEditing(true)}
        >
          {titleIsEditing ? (
            <input
              className={styles.titleInput}
              type="text"
              value={inputTitle}
              onChange={changeTitleHandler}
              onBlur={stopEditingTitle}
              autoFocus
            />
          ) : (
            <h1>{inputTitle}</h1>
          )}
        </div>
        <p className={styles.date}>{date.toLocaleDateString()}</p>
      </div>
      <div
        className={styles['area-section']}
        onDoubleClick={() => setTextIsEditing(true)}
      >
        {textIsEditing ? (
          <textarea
            className={styles.descriptionInput}
            value={inputText}
            onChange={changeTextHandler}
            onBlur={stopEditingText}
            autoFocus
          />
        ) : (
          <p>{inputText}</p>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
