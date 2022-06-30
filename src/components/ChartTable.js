import React from "react";
import Song from "./Song";

function ChartTable({songs}) {

  const songNodes = songs.map((song, index) => {
    return <Song song={song} index={index} key={index}/>
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Album Cover</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {songNodes}
      </tbody>
    </table>
  )
}

export default ChartTable;