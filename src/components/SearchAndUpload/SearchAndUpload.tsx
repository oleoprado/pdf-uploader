import { Input, Button } from 'antd'

import styles from './styles.module.scss'
import { useState } from 'react'
import UploadPdfModal from '../UploadPdfModal/UploadPdfModal'

const { Search } = Input

function SearchAndUpload() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOk() {
    setIsModalOpen(false)
  }

  function handleCancel() {
    setIsModalOpen(false)
  }

  const onSearch = (value: string) => console.log(value)

  return (
    <>
      <div className={styles.container}>
        <Search
          placeholder="Digite o que deseja buscar"
          allowClear
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
