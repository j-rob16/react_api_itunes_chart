import React from "react";

function Song({song}) {
  return (
    <tr>
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