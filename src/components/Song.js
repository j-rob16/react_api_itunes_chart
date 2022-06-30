import React from "react";

function Song({song, index}) {
  return (
    <tr>
      <td>
        {index + 1}
      </td>
      <td>
        <img src={song['im:image'][0].label} alt="album cover"/>
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
      <td>
        <audio controls>
          <source src={song.link[1].attributes.href} type={song.link[1].attributes.type}/>
        </audio>
      </td>
    </tr>
  )
}

export default Song;