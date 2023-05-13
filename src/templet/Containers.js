import styles from './Containers.module.css'
import React from 'react'
import Yourtask from '../molicule/Todo-list';

function Block() {
    return (
        <div className={styles.bloc}>

            <Yourtask />
        </div>
    )
}

export default Block;