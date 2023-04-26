import { Divider } from 'antd'
import { Provider } from 'react-redux'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SearchAndUpload from './components/SearchAndUpload/SearchAndUpload'
import Table from './components/Table'
import UploadSearchInfo from './components/UploadSearchInfo/UploadSearchInfo'
import store from './store'

import styles from './styles/app.module.scss'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main className={styles.container}>
        <UploadSearchInfo />
        <SearchAndUpload />
        <Divider style={{ marginTop: '2rem' }} />
        <Table />
      </main>
      <Footer />
    </Provider>
  )
}

export default App
