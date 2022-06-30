import React, {useEffect, useState} from "react";
import ChartHeader from "../components/ChartHeader";
import ChartTable from "../components/ChartTable";
import '../containers/charts.css';


function ChartContainer() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getChartSongs();
  }, [])

  const getChartSongs = async function() {
    const res = await fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json');
    const songs = await res.json();
    setSongs(songs.feed.entry);
  }


  return (
    <main>
      <ChartHeader title='UK top 20'/>
      <ChartTable songs={songs}/>
    </main>
  )
}

export default ChartContainer;