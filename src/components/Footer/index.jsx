import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={`wrapper ${styles.footer}`}>
      <h2>Visite también</h2>
      <ul>
        <li>elcomercio.pe</li>
        <li>peru21.pe</li>
        <li>clubelcomercio.pe</li>
        <li>elcomercio.com.ar</li>
        <li>peruquiosco.pe</li>

      </ul>
    </div>
  )
}

export default Footer