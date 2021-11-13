import styles from './styles.module.css'
export default function InputField(props){
    return (

            <div className={styles.textField}>
            {props.todo}
            </div>

        
    )

}