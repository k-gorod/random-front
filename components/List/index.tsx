"use client"

import React, { type FC } from "react";
import ListItem from "../ListItem";

interface IList {
  arrayOfItems: string[]
}

const List : FC<IList> = ({ arrayOfItems }) => {

  console.log("List", arrayOfItems)

  return (
    <div className="">
      {
        arrayOfItems.map((listItemData, index) =>  <ListItem key={`${index}-ListItem`} title={listItemData}/>)
      }
    </div>
  );
}

export default List;
