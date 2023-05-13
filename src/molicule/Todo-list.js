import Taskcounter from '../atom/Task counter/Taskcount';
import Taskview from '../atom/Task disply/Taskdisplay';
import Taskinput from '../atom/Task input/input';
import React, { useRef, useState } from 'react';
import styles from './Todo-list.module.css';

function Yourtask() {

    const [todos, setTodos] = useState([])
    console.log(todos)


    const inputref = useRef(null)

    const addtodo = (e) => {
        if (e.key === "Enter"){

            let newtodo = {
                task: inputref.current.value,
                complete: false
            }
            console.log(newtodo)
            setTodos([...todos, newtodo])
        }

    }
    const doneTask = (id) => {
        let mytodos=todos.map((data, index) => {
            if (index === id) {
                data.complete = !data.complete
            }
            return data

        })
        setTodos(mytodos)
    }

    const Hogaya = (id) => {
        let newTodos = todos.filter((_, index) => index !== id)
        setTodos(newTodos)
    }

    return (
        <>
            <div className={styles.counter}>
                <Taskcounter count={todos.length} />
            </div>

            <div className={styles.view}>
                <Taskview Dekhe={todos} markdone={Hogaya} doneTask={doneTask} />
            </div>

            <div className={styles.input}>
                <Taskinput myref={inputref} addme={addtodo} />
            </div>
        </>
    )
}

export default Yourtask;