"use client"

import React, { useEffect, useState, type FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IUser {
}

const User : FC<IUser> = () => {
  const [inputValue, setInputValue] = useState(localStorage.getItem('user-data') || '');
  const [isSubmited, setIsSubmited] = useState(localStorage.getItem('is-submited') === 'true' || false);


  const onInputChange: React.ChangeEventHandler<HTMLInputElement>  = (event) =>{
    setInputValue(event.target.value)
  }

  const onSubmitButtonClick = () => {
    fetch(`https://random-165h.onrender.com/add?title=${inputValue}`, {
      method:'POST',
    })
    setIsSubmited(true)
  };

  const onCancelButtonClick = () => {
    fetch(`https://random-165h.onrender.com/admin/delete?title=${inputValue}`)
    setIsSubmited(false)
    setInputValue('')
  }

  useEffect(()=>{
    localStorage.setItem('user-data', inputValue)
  } ,[inputValue])

    useEffect(()=>{
    localStorage.setItem('is-submited', `${isSubmited}`)
  } ,[isSubmited])

  return (
    <div className="">
      {
        isSubmited ? (
          <>
            <div>{inputValue}</div>
            <button onClick={onCancelButtonClick}>Отмена</button>
          </>
        ) : (
          <>
            <input onChange={onInputChange} value={inputValue}/>
            <button onClick={onSubmitButtonClick}>Подтвердить</button>
          </>
        )
      }
    </div>
  );
}

export default User;
