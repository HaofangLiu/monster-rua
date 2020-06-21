import React from "react";

import Card from '../card/card';

const CardList = (props) => {
  return (
  <div className="list-class">{
    props.monsters.map((monster) => {
    return <Card key={monster.id} monster={monster} />
    })
  }</div>
  );
};

export default CardList;