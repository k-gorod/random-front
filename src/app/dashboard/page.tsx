"use client"

import React, { useEffect, useState, type FC } from "react";
import List from "../../../components/List";

interface IDashboard {
}

const Dashboard : FC<IDashboard> = () => {
  const [serverData, setServerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    try{
      setIsLoading(true)

      const response = await fetch('https://random-165h.onrender.com/list');

      const arrayOfData = await response.json()

      setServerData(arrayOfData || [])
    }catch(error){
      console.error(error)
    }finally{
      setIsLoading(false)
    }
    

  };

  useEffect(()=>{
    fetchData()
  }, [])
  

  return (
    <div className="">
      {
        isLoading ? (
          <List arrayOfItems={serverData || []}/>
        ) : null
      }
    </div>
  );
}

export default Dashboard;
