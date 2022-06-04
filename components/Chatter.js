import Image from "next/image";

import styles from './Chatter.module.css'

export default function Chatter({
  chatter,
  style
}) {

  const onUsernameClick = () => {
    window.open(`https://www.twitch.tv/${chatter.username}`, '_blank');
  }

  return (
    <div className={styles.chatter_container} style={style}>
      <div className={styles.status_container}>
      {chatter.status === "vip" && <Image src="/assets/vip.png" alt="vip" width="15px" height="15px"/>}
      {chatter.status === "moderator" && <Image src="/assets/mod.png" alt="mod" width="15px" height="15px" />}
      </div>
      <div className={styles.username_container} onClick={onUsernameClick}>
        <p>
          {chatter.username}
        </p>
      </div>
    </div>
  )
}