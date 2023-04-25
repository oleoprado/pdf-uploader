import { Divider } from 'antd'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SearchAndUpload from './components/SearchAndUpload/SearchAndUpload'
import Table from './components/Table/Table'
import UploadSearchInfo from './components/UploadSearchInfo/UploadSearchInfo'

import styles from './styles/app.module.scss'

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <UploadSearchInfo />
        <SearchAndUpload />
        <Divider style={{ marginTop: '2rem' }} />
        <Table />
      </main>
      <Footer />
    </>
  )
}

export default App
