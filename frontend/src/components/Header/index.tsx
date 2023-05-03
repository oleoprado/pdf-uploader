import { Layout, Image } from 'antd'
import logo from '../../assets/images/logo.png'

import styles from './styles.module.scss'

const { Header } = Layout

function HeaderComponent() {
  return (
    <Header className={styles.container}>
      <Image src={logo} alt="logo-brickup" preview={false} width={80} />
      <span>Buscador de itens PDF</span>
    </Header>
  )
}

export default HeaderComponent
