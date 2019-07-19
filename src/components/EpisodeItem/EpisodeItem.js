import React from 'react';


const EpisodeItem = ({ image, name, season, id, children }) => {
   
  return (
    <div style={{ width: "25%", padding: "0 7.5px", marginBottom: '15px'}}>
      <img src={ image !== null ? image.medium : '' } alt={ name } />
      <div> { name }</div>
      <div> Season { season }</div>
      { children }
    </div>
  )
}

export default EpisodeItem;