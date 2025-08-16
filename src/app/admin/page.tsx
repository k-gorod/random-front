"use client"

import React, { useEffect, useState, type FC } from "react";
import List from "../../../components/List";
import './admin.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IAdmin {
}

const Admin : FC<IAdmin> = () => {
  const [serverData, setServerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [markerIsVisible, setMarkerIsVisible] = useState(false);

  const onSaveButtonClick = () => {
     navigator.clipboard.writeText(`Привет, DeepSeek выбери, пожалуйста, из этого списока кого-то одного случайным образом: ${serverData.join(', ')}`)
     setMarkerIsVisible(true)
  }

  const fetchData = async () => {
    try{
      const response = await fetch('https://random-165h.onrender.com/list');

      const arrayOfData = await response.json()

      setServerData(arrayOfData || [])
    }catch(error){
      console.error(error)
    }
  };

  const initialFetch = async () => {
    try{
      setIsLoading(true)

      await fetchData();
    }catch(error){
      console.error(error)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    if(markerIsVisible){
      setTimeout(()=>{
        setMarkerIsVisible(false)
      }, 1500)
    }
  },[markerIsVisible])

  const onClearButtonClick = () => {
    fetch('https://random-165h.onrender.com/admin/clear');
  };

  useEffect(()=>{
    initialFetch();

    setInterval(()=>{
      fetchData();
    }, 500)
  }, [])


  return (
    <div className="">
      {
        !isLoading ? (
            <>
              <div className='admin_buttonWrapper'>
                <button onClick={onSaveButtonClick} className="admin_saveButton">Скопировать Список</button>
                <div className={`admin_marker ${markerIsVisible ? 'admin_marker-vidible' : null}`}>Сохранено</div>
              </div>
                <button onClick={onClearButtonClick} className="">Очистить все</button>
              
              <div style={{margin: '10px 0'}} >Списк:</div>
              <hr />
              <List arrayOfItems={serverData || []}/>
            </>
        ) : (
          <div>
            Loading...
          </div>
        )
      }
    </div>
  );
}

export default Admin;
