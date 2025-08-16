import React, { type FC } from "react";
import Cross from "../Cross";
import './listItem.css'

interface IListItem {
  title: string
}

const ListItem : FC<IListItem> = ({ title }) => {

  const onDeleteItemClick = ()=>{
    fetch(`https://random-165h.onrender.com/admin/delete?title=${title}`)
  }

  return (
    <div className="listItem" >
      {title}
      <button className="listItem_deleteButton" onClick={onDeleteItemClick}>
        <Cross />
      </button>
    </div>
  );
}

export default ListItem;
