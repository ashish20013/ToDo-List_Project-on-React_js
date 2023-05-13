import React from 'react'
import styles from './Taskdisplay.module.css'
function Taskview({ Dekhe ,markdone,doneTask}) {
  return (
    <div className={styles.taskview}>

      <ol>
        {
          Dekhe.map((task,index )=> {
            return (
              <li className={task.complete ? styles.done : "nahihua"}> {task.task}
              <button className={styles.cmt} onClick ={()=>doneTask(index)}>Complet</button>
              <button className={styles.dlt} onClick ={()=>markdone(index)}>Delete</button>
              </li>

            )
          })
        }
      </ol>

    </div>
  )
}

export default Taskview;