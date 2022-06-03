import axios from "axios"

export default function handler(req, res) {
  const { streamer } = req.query
  return axios.get(`https://tmi.twitch.tv/group/user/${streamer}/chatters`).then(r => {
    res.status(200).json(r.data)
  }).catch(e => {
    res.status(500).json(e)
  })
}