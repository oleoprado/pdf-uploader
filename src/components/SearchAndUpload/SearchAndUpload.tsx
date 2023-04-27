import { Input, Button } from 'antd'

import styles from './styles.module.scss'
import { useState } from 'react'
import UploadPdfModal from '../UploadPdfModal/UploadPdfModal'
// import { api } from '../../lib/api'
import { useDispatch } from 'react-redux'
import {
  // fetchData,
  requestDataWithSearchInput,
  fetchingData,
} from '../../store/modules/search/actions'

const { Search } = Input

function SearchAndUpload() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()

  function handleOk() {
    setIsModalOpen(false)
  }

  function handleCancel() {
    setIsModalOpen(false)
  }

  // TODO: chamar o dispatch para buscar os dados com queryParams(serachInput)
  const onSearch = async () => {
    dispatch(fetchingData())
    dispatch(requestDataWithSearchInput(searchInput))
    // const response = await api.get(`/files?search=${searchInput}`)
    // dispatch(fetchData(response.data))
  }

  // useEffect(() => {
  //   if (!searchInput.length) {
  //     dispatch(fetchingData())
  //     api.get('/files').then((response) => dispatch(fetchData(response.data)))
  //   }
  // }, [searchInput, dispatch])

  return (
    <>
      <div className={styles.container}>
        <Search
          placeholder="Digite o que deseja buscar"
          // allowClear
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
          onSearch={onSearch}
          className={styles.input}
        />
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Upload PDF
        </Button>
      </div>
      <UploadPdfModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  )
}

export default SearchAndUpload
