import React, { type FC } from "react";

interface IListItem {
  title: string
}

const ListItem : FC<IListItem> = ({ title }) => {

  console.log("ListItem")

  return (
    <div className="">
      {title}
    </div>
  );
}

export default ListItem;
