import styles from './input.module.css'


function Taskinput({myref , addme}) {
    
   
    return (
        <>
    <input className={styles.npt} type="text" onKeyDown={addme} placeholder='Enter Your New Task' ref= {myref}/>
    
    {/* <button className={styles.btn}  onClick ={addme}>+</button> */}
    </>
    )
}

export default Taskinput;