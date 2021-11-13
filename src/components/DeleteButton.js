import styles from './styles.module.css'
import { MdDelete } from 'react-icons/fa';
export default function DeleteButton(props){
    return (
        <button className={styles.deleteBtn} onClick={()=>props.onClickHandler(props.todo)}></button>
    )

}