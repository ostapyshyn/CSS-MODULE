import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

export const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className='forma' id='form'>
      <form onSubmit={handleSubmit(onSubmit)} className='form__main'>
        <input
          className='contactform__input'
          placeholder='Name'
          type='text'
          {...register('Name', {
            required: 'Enter name',
            minLength: {
              value: 3,
              message: 'Minimum 3 symbols',
            },
          })}
        />
        <div style={{ height: 20 }}>{errors?.Name && <p className='error'>{errors?.Name?.message || 'Error!'}</p>}</div>

        <input
          className='contactform__input'
          placeholder='Phone'
          type='text'
          {...register('Phone', {
            required: 'Enter your phone number',
            minLength: {
              value: 3,
              message: 'Minimum 3 symbols',
            },
          })}
        />
        <div style={{ height: 20 }}>{errors?.Phone && <p className='error'>{errors?.Phone?.message || 'Error!'}</p>}</div>

        <input
          className='contactform__input'
          placeholder='E-mail'
          type='text'
          {...register('Email', {
            required: 'Enter your email',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter valid email!',
            },
          })}
        />
        <div style={{ height: 20 }}>{errors?.Email && <p className='error'>{errors?.Email?.message || 'Error!'}</p>}</div>

        <textarea
          className='contactform__input form__textarea'
          placeholder='Message'
          rows={4}
          {...register('Text', {
            required: 'Enter your message',
            minLength: {
              value: 6,
              message: 'Minimum 6 symbols',
            },
          })}
        />
        <div style={{ height: 20 }}>{errors?.Text && <p className='error'>{errors?.Text?.message || 'Error!'}</p>}</div>
        <input className='contactform__submit' type='submit' value='Send' />
      </form>
    </div>
  );
};
