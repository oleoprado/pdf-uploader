import { Divider } from 'antd'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SearchAndUpload from './components/SearchAndUpload/SearchAndUpload'
import Table from './components/Table'
import UploadSearchInfo from './components/UploadSearchInfo/UploadSearchInfo'

import styles from './styles/app.module.scss'

function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchingData())
  //   api.get('/files').then((response) => dispatch(fetchData(response.data)))
  // }, [dispatch])

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
