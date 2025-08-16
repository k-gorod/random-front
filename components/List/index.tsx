import React, { type FC } from "react";
import ListItem from "../ListItem";

interface IList {
  arrayOfItems: string[]
}

const List : FC<IList> = ({ arrayOfItems }) => {

  console.log("List")

  return (
    <div className="">
      {
        arrayOfItems.map((listItemData) =>  <ListItem title={listItemData}/>)
      }
    </div>
  );
}

export default List;
