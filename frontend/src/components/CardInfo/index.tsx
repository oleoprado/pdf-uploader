import styles from './styles.module.scss'

interface ICardInfoProps {
  step: string
  title: string
  content: string
}

function CardInfo({ step, title, content }: ICardInfoProps) {
  return (
    <div className={styles.container}>
      <span>{step}</span>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default CardInfo
