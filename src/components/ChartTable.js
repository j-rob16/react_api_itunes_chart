import React from "react";
import Song from "./Song";

function ChartTable({songs}) {

  const songNodes = songs.map((song, index) => {
    return <Song song={song} index={index} />
  })

  return (
    <table>
      <tr>
        <th>Position</th>
        <th>Album Cover</th>
        <th>Title</th>
        <th>Artist</th>
        <th>Genre</th>
      </tr>
      {songNodes}
    </table>
  )
}

export default ChartTable;