import React from "react";

function Song({song, index}) {
  return (
    <tr>
      <td>
        {index + 1}
      </td>
      <td>
        <img src={song['im:image'][0].label} />
      </td>
      <td>
        {song['im:name'].label}
      </td>
      <td>
        {song['im:artist'].label}
      </td>
      <td>
        {song.category.attributes.label}
      </td>
    </tr>
  )
}

export default Song;