import Chatter from "./Chatter"
import { FixedSizeList as List } from 'react-window';

export default function ChattersList({ chatters = [], height = 800 }) {
  const Row = ({ index, style }) => (
      <Chatter chatter={chatters[index]} style={style} />
  );

  return (
    <List
      height={height}
      itemCount={chatters.length}
      itemSize={43}
      width={300}
      overscanCount={2}
    >
      {Row}
    </List>
  )
}