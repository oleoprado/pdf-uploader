import { Input, Button } from 'antd'

import styles from './styles.module.scss'
import { useState } from 'react'
import UploadPdfModal from '../UploadPdfModal/UploadPdfModal'
import { api } from '../../lib/api'

const { Search } = Input

function SearchAndUpload() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  function handleOk() {
    setIsModalOpen(false)
  }

  function handleCancel() {
    setIsModalOpen(false)
  }

  // TODO: chamar o dispatch para buscar os dados com queryParams(serachInput)
  const onSearch = async () => {
    const response = await api.get(`/files?data=${searchInput}`)
    console.log(response.data)
  }

  return (
    <>
      <div className={styles.container}>
        <Search
          placeholder="Digite o que deseja buscar"
          allowClear
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
