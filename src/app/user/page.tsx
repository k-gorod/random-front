"use client"

import React, { useEffect, useLayoutEffect, useState, type FC } from "react";
import './user.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IUser {
}

const User : FC<IUser> = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);
  const [blockPage, setBlockPage] = useState(false)


  const onInputChange: React.ChangeEventHandler<HTMLInputElement>  = (event) =>{
    setInputValue(event.target.value)
  }

  const onSubmitButtonClick = async () => {
    setBlockPage(true)

    await fetch(`https://random-165h.onrender.com/add?title=${inputValue}`, {
      method:'POST',
    })

    setBlockPage(false)
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

  useLayoutEffect(()=>{
    setInputValue(localStorage.getItem('user-data') || '')
    setIsSubmited(localStorage.getItem('is-submited') === 'true' || false);
  }, [])

  return (
    <div className="user_wrapper" style={{ pointerEvents: blockPage ? 'none' : 'unset' }}>
      {
        isSubmited ? (
          <>
            <div className="user_textBlock">
              Ваше имя:
            </div>
            <div>{inputValue}</div>
            <button onClick={onCancelButtonClick}>Отмена</button>
          </>
        ) : (
          <>
            <div className="user_textBlock">
              Введите имя:
            </div>
            <input onChange={onInputChange} value={inputValue}/>
            <button onClick={onSubmitButtonClick}>Подтвердить</button>
          </>
        )
      }
    </div>
  );
}

export default User;
