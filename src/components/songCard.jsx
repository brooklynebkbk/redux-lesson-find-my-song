import React from "react";

const SongCard = (props) => {
  console.log(props)
  return (
    <div className="list-group">
      <a href="#" className="list-group-item active">
        <h4 className="list-group-item-heading">
         {props.artistName}
        </h4>
        <img src={props.artworkUrl30} alt={props.artistName} />
      </a>
    </div>
  );
};

export default SongCard;