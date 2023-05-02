import { Divider } from 'antd'
import { useSelector } from 'react-redux'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SearchAndUpload from './components/SearchAndUpload/SearchAndUpload'
import Table from './components/Table'
import UploadSearchInfo from './components/UploadSearchInfo/UploadSearchInfo'
import { ISearch, IState } from './store/modules/search/types'

import styles from './styles/app.module.scss'

function App() {
  const resultSearch = useSelector<IState, ISearch[]>(
    (state) => state.search.items,
  )

  return (
    <>
      <Header />
      <main className={styles.container}>
        <UploadSearchInfo />
        <SearchAndUpload />
        <Divider style={{ marginTop: '2rem' }} />
        {!resultSearch.length ? null : <Table />}
      </main>
      <Footer />
    </>
  )
}

export default App
