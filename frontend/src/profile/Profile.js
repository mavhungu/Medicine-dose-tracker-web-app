import React from 'react';
import {useForm} from 'react-hook-form'
import Wrapper from '../component/Wrapper'

export default function Profile() {
  const {register,handleSubmit, formState:{errors}}= useForm()

  const onSubmit = (data)=>{
    console.log(data)
  }
  return (
    <Wrapper>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        {/*<h1 className='h2 text-muted'>Enter new forms</h1>*/}
      </div>
        <p>Profile page</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-outline mb-4'>
              <input type={'text'} {...register("name")} className={'form-control'} />
            </div>
            <div className='form-outline mb-4'>
              <input type={"text"} {...register("email")} className={'form-control'} />
            </div>
            <input type={'submit'} className="btn btn-primary btn-block" />
          </form>
    </Wrapper>
  );
}
