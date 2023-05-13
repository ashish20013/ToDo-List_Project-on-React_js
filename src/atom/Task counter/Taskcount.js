import React from 'react'
import styles from './Taskcount.module.css'
function Taskcounter({count}) {
  return (
    <div className={styles.taskcount}>
        Pending Tasks ({count})
        </div>
  )
}

export default Taskcounter;