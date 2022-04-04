import styles from '../styles/chip.module.css'

function select_chip() {
  console.log("You clicked a chip")
}

export default function Chip (props) {
  return (
      //Copying styles from the styles we have to find
      //Take div component styles
      //Called styles bc that's what we imported 
  <div className={styles.chip} onClick={select_chip}>
    {props.text}

  </div>
  )
}
