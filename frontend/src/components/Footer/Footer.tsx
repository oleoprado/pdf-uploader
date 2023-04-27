import styles from './styles.module.scss'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.container}>
      <p>
        Copyright {year} developed by {''}
        <a href="https://github.com/oleoprado" target="_blank" rel="noreferrer">
          Léo Prado
        </a>
      </p>
    </footer>
  )
}

export default Footer
