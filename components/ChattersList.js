import Chatter from "./Chatter"

export default function ChattersList({ chatters = [] }) {

  return (
    <>
      {chatters.map((chatter, index) => {
        return <Chatter key={index + chatter.username} chatter={chatter} />
      })}
    </>
  )
}