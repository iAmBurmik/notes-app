'use client';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './page.module.css';
import { CreateNoteDocument, GetAllNotesDocument } from '@/generates/graphql';

const NewNote = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const router = useRouter();
  const [addNote] = useMutation(CreateNoteDocument, {
    update(cache, { data }) {
      const { notes }: any = cache.readQuery({ query: GetAllNotesDocument });
      cache.writeQuery({
        query: GetAllNotesDocument,
        data: {
          notes: [data?.note, ...notes],
        },
      });
    },
    onCompleted: (data) => {
      router.push(`/${data?.note.id}`);
      reset();
    },
  });

  const onSubmit = (newNoteFields: any) => {
    addNote({
      variables: {
        note: { name: newNoteFields.title, text: newNoteFields.text },
      },
    });
    reset();
  };

  return (
    <div className="container">
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>Title</label>
        <input
          className={styles.input}
          {...register('title', {
            required: 'This field is required',
            minLength: {
              value: 2,
              message: 'Minimum 2 characters',
            },
          })}
        />

        {errors?.title && (
          <p className={styles.error}>{errors?.title.message?.toString()}</p>
        )}
        <label className={styles.label}>Text:</label>
        <input
          className={styles.input}
          {...register('text', {
            required: 'This field is required',
            minLength: {
              value: 2,
              message: 'Minimum 2 characters',
            },
          })}
        />

        {errors?.text && (
          <p className={styles.error}>{errors?.text.message?.toString()}</p>
        )}
        <input className={styles.button} value="Create" type="submit" />
      </form>
    </div>
  );
};

export default NewNote;
