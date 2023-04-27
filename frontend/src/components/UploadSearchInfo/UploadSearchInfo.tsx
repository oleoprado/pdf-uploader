import CardInfo from '../CardInfo/CardInfo'

import styles from './styles.module.scss'

const steps = [
  {
    step: '1',
    title: 'Objetivo',
    content:
      'Faça upload de arquivos PDF e realize buscas nos textos da tabela contida no arquivo.Os dados serão armazenados em um banco de dados.',
  },
  {
    step: '2',
    title: 'Upload',
    content:
      'Basta fazer o upload do arquivo PDF contendo a tabela que você deseja analisar.',
  },
  {
    step: '3',
    title: 'Buscar',
    content:
      'Após fazer o upload, utilize o campo abaixo para realizar buscas nos textos da tabela.Você pode acessá-los sempre que precisar.',
  },
]
function UploadSearchInfo() {
  return (
    <section className={styles.container}>
      {steps.map((step) => (
        <CardInfo
          key={step.step}
          step={step.step}
          title={step.title}
          content={step.content}
        />
      ))}
    </section>
  )
}

export default UploadSearchInfo
