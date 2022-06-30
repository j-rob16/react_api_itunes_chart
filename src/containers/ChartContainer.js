import React, {useEffect, useState} from "react";
import ChartHeader from "../components/ChartHeader";
import ChartTable from "../components/ChartTable";
import '../containers/charts.css';


function ChartContainer() {

  const [songs, setSongs] = useState([]);
  const [genre, setGenre] = useState('all');

  const genreLink = {
    all: {
      title:  'UK top 20',
      url: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    },
    rock: {
      title: 'UK top 20 Rock',
      url: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json'
    },
    dance: {
      title: 'UK top 20 Dance',
      url: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json'
    },
    country: {
      title: 'UK top 20 country',
      url: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json'
    }
  }

  useEffect(() => {
    getChartSongs();
  })

  const getChartSongs = async function() {
    const res = await fetch(genreLink[genre].url);
    const songs = await res.json();
    setSongs(songs.feed.entry);
  }


  return (
    <main>
      <ChartHeader title={genreLink[genre].title} onGenreSelected={setGenre}/>
      <ChartTable songs={songs}/>
    </main>
  )
}

export default ChartContainer;