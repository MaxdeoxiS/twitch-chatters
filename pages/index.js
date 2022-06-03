import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [streamer, setStreamer] = useState()
  const [streamerValidated, setStreamerValidated] = useState(false)
  const [displaySearchBox, setDisplayCheckbox] = useState(true)
  const [chatters, setChatters] = useState([])
  const [chattersCount, setChattersCount] = useState(null)

  useEffect(() => {
    async function fetchChatters() {
      const { data } = await axios.get('/api/chatters/' + streamer);
      const count = data['chatter_count'];
      setChatters(data.chatters?.viewers);
      setChattersCount(count)
      setStreamerValidated(false)
      setDisplayCheckbox(false)
    }
    if (streamerValidated) {
      fetchChatters();
    }
  }, [streamer, streamerValidated])

  return (
    <div className={styles.container}>
      <Head>
        <title>Twitch Chatters</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {displaySearchBox ? (
        <Stack spacing={2} direction="row">
          <TextField
            onChange={e => setStreamer(e.target.value)}
            variant="outlined"
            value={streamer}
          />
          <Button disabled={!streamer || streamer?.length === 0} variant="outlined" onClick={() => setStreamerValidated(true)}>Valider</Button>
        </Stack>
        ) : (
          <Stack spacing={2} direction="row">
            <h3>{chattersCount} chatters</h3>
            <h3>{streamer}</h3>
            <Button onClick={() => setDisplayCheckbox(true)}>Edit</Button>
          </Stack>
        )}
        
        {chatters.map((chatter, index) => {
          return <p key={index}>{chatter}</p>
        })}
      </main>
    </div>
  )
}
