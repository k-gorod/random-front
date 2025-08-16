"use client"

import React, { type FC } from "react";
import ListItem from "../ListItem";
import './list.css';

interface IList {
  arrayOfItems: string[]
}

const List : FC<IList> = ({ arrayOfItems }) => {
  return (
    <div className="list_wrapper">
      {
        arrayOfItems.map((listItemData, index) =>  <ListItem key={`${index}-ListItem`} title={listItemData}/>)
      }
    </div>
  );
}

export default List;
