import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

export const Form = () => {
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
    <div className='form' id='form'>
      <form onSubmit={handleSubmit(onSubmit)} className='form__main'>
        <div className='form__info'>
          <div className='form__email'>
            <input
              className='form__input'
              placeholder='Your email'
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
            <input className='form__submit' type='submit' value='Subscribe' />
          </div>
        </div>
        <div style={{ height: 20 }}>{errors?.Email && <p className='error'>{errors?.Email?.message || 'Error!'}</p>}</div>
      </form>
    </div>
  );
};
