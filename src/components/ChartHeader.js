import React from "react";

function ChartHeader({title, onGenreSelected}) {

  function onChange(evt) {
    const genre = evt.target.value;
    onGenreSelected(genre);
  }

  return (
    <>
      <h1>{title}</h1>
      <div>
        <select onChange={onChange}>
          <option value='all'>All</option>
          <option value='rock'>Rock</option>
          <option value='dance'>Dance</option>
          <option value='country'>Country</option>
        </select>
      </div>
    </>
  )
}

export default ChartHeader;